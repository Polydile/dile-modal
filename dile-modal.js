import { LitElement, html, css } from 'lit-element';

export class DileModal extends LitElement {

  static get properties() {
    return {
      _toChange: { type: Boolean },
      /**
       * If true the modal box is in opened status.
       */
      opened: { type: Boolean },
      /**
       * If true the modal box displays a close icon
       */
      showCloseIcon: { type: Boolean },
    }
  }

  constructor() {
    super();
    this._toChange = false;
    this.opened = false;
    this.showCloseIcon = false;
  }
  
  static get styles() { 
    return css`
      * {
        box-sizing: border-box;
      }
      :host {
        display: block;
      }
      section {
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100vw;
        display: none;
        transition: opacity 0.3s ease-in;
        -webkit-transition: opacity 0.3s ease-in;
        align-items: center;
        justify-content: center;
        z-index: var(--dile-modal-z-index, 100);     
        background-color: var(--dile-modal-background-color, rgba(30,30,30, 0.8));
      }
      .content {
        display: block;
        position: relative;
        z-index: var(--dile-modal-content-z-index, 101);
        width: var(--dile-modal-width, 280px);
        min-width: var(--dile-modal-min-width, 250px);      
        max-width: var(--dile-modal-max-width, 100vw);
        height: var(--dile-modal-height, auto);
        max-height: var(--dile-modal-max-height, 100vh);
        background-color: var(--dile-modal-content-background-color, #fff);
        box-shadow: var(--dile-modal-content-shadow-displacement, 6px) var(--dile-modal-content-shadow-displacement, 6px) var(--dile-modal-content-shadow-blur, 16px) var(--dile-modal-content-shadow-color, #000);
        border-radius: var(--dile-modal-border-radius, 15px);
        padding: var(--dile-modal-content-padding, 1em) 0 var(--dile-modal-content-padding, 1em) var(--dile-modal-content-padding, 1em);
      }
      article {
        overflow: auto;
        max-height: 100%;
        height: 100%;
        padding-right: var(--dile-modal-content-padding, 1em);
      }
      .transparent {
        opacity: 0;
      }
      .opaque {
        opacity: 1;
        display: flex !important;
      }
      .opened {
        display: flex !important;
      }
      span{
        position: absolute;
        top: 5px;
        right: 18px;
        z-index: 1002; 
      }
      span svg {
        width: var(--dile-modal-close-icon-size, 24px);
        height: var(--dile-modal-close-icon-size, 24px);
        cursor: pointer;
      }
      span path {
        fill: var(--dile-modal-close-icon-color, #888);
      }
      span path[fill="none"] {
        fill: transparent;
      }
      .contentIconSeparation {
        padding-top: var(--dile-modal-close-icon-size, 24px);
      }
    `;
  }

  render() {
    return html`
      <section class="${this.getModalClass(this.opened, this._toChange)}" @click="${this._backgroundModalClick}" @transitionend="${this.animationEnd}">
        <div class="content" @click="${this.contentClick}">
          ${ this.showCloseIcon 
            ? html`<span @click="${this.close}">${this.closeIcon}</span>`
            : ''
          }
          <article class="${ this.showCloseIcon ? 'contentIconSeparation' : '' }">
              <slot></slot>
          </article>
        </div>
      </section>
    `;
  }

  get closeIcon() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"/></svg>`;
  }

  getModalClass(opened, _toChange) {
    if(!opened && !_toChange) {
      return 'transparent';
    }
    if(opened && _toChange) {
      return 'transparent opened'
    }
    if(opened && !_toChange) {
      return 'opaque'
    }
    if(!opened && _toChange) {
      return 'transparent opened'
    }
  }

  open() {
    this.opened = true;
    this._toChange = true;
    setTimeout(() => {
      this._toChange = false;
    }, 1);
  }

  _backgroundModalClick(e) {
    this.close()
    this.dispatchEvent(new CustomEvent('dile-modal-background-closed', {
      bubbles: true,
      composed: true,
      detail: this
    }));
    e.stopPropagation();
  }

  close() {
    this.opened = false;
    this._toChange = true;
    this.dispatchEvent(new CustomEvent('dile-modal-closed', {
      bubbles: true,
      composed: true,
      detail: this
    }));
  }
  
  animationEnd() {
    this._toChange = false;
  }

  contentClick(e) {
    e.stopPropagation();
  }
}
customElements.define('dile-modal', DileModal);