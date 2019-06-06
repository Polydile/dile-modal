import { LitElement, html, css } from 'lit-element';

export class DileModal extends LitElement {

  static get styles() { 
    css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
    <slot></slot>
    `;
  }
}
customElements.define('dile-modal', DileModal);