import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { DileModal } from '../dile-modal.js';
import '../dile-modal.js';

import readme from '../README.md';

storiesOf('dile-modal', module)
  .addDecorator(withKnobs)
  
  .add(
    'Modal box openend',
    () => html`
      <dile-modal opened>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quia, excepturi, perspiciatis quo obcaecati similique commodi temporibus hic iusto asperiores laborum debitis in quasi velit animi, error nam rerum veniam?
      </dile-modal>
    `, {
      notes: { markdown: readme },
    }
  )
  .add(
    'Modal box open button',
    () => html`
      <button @click="${() => document.getElementById('myModal').open()}">Open Modal</button>
      <dile-modal id="myModal">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quia, excepturi, perspiciatis quo obcaecati similique commodi temporibus hic iusto asperiores laborum debitis in quasi velit animi, error nam rerum veniam?
      </dile-modal>
    `, {
      notes: { markdown: readme },
    }
  )
  .add(
    'Large content & close icon',
    () => html`
      <style>
        dile-modal {
          --dile-modal-background-color: rgba(130,230,230, 0.5);
          --dile-modal-height: 300px;
          --dile-modal-border-radius: 5px;
        }
        p {
          margin-top: 0;
        }
      </style>
      <button @click="${() => document.getElementById('myModal2').open()}">Open Modal With close icon</button>
      <dile-modal showcloseicon id="myModal2" opened>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum omnis deserunt, eius ratione quia quaerat odit. Quae ab esse minima alias sit. Totam dolor rem illo molestias sunt ducimus eos?
        </p>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
        <p>Quo nihil quidem earum magnam libero tempore voluptatum animi? Ad commodi delectus sequi, beatae, eaque inventore porro nesciunt quae sint sunt rerum eveniet ducimus. Repellat ullam atque minus perspiciatis a.</p>
        <p>Ipsam voluptatibus voluptas dolorem, ea doloribus quasi neque voluptates nostrum ab sunt nobis perspiciatis impedit voluptatum. Sunt nam earum modi officia culpa facilis repellendus, ducimus obcaecati similique possimus totam corporis.</p>
      </dile-modal>
    `, {
      notes: { markdown: readme },
    }
  )

  .add(
    'Customized modal box',
    () => html`
      <style>
      #myModalCustomized {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        --dile-modal-border-radius: 0;
        --dile-modal-content-background-color: #303030;
        --dile-modal-width: 200px;
        --dile-modal-min-width: 100px;
        text-align: center;
        --dile-modal-content-shadow-color: #ddd;
        --dile-modal-background-color: #fff;
        --dile-modal-animation-duration: 1s;
      }
      #myModalCustomized p {
        color: #f66;
        font-size: 0.9em;
        margin: 0 0 10px;
        text-transform: uppercase;
      }
      </style>
      <h1>Customized modal box</h1>
      <p>Customized styles</p>
      <pre>
        --dile-modal-border-radius: 0;
        --dile-modal-content-background-color: #303030;
        --dile-modal-width: 200px;
        --dile-modal-min-width: 100px;
        text-align: center;
        --dile-modal-content-shadow-color: #ddd;
        --dile-modal-background-color: #fff;
        --dile-modal-animation-duration: 1s;
      </pre>
      <button @click="${() => document.getElementById('myModalCustomized').open()}">Open customized Modal</button>
      <dile-modal id="myModalCustomized">
        <p>This action is not permited! #JOKE</p>
        <button id="acceptButon" @click="${() => document.getElementById('myModalCustomized').close() }">Accept!</button>
      </dile-modal> 
    `, {
      notes: { markdown: readme },
    }
  )
  .add(
    'Blocking modal box',
    () => html`
      <p>This modal box uses "blocking" property as true. So, the interface blocks the screen, that is, you can not close it by clicking the background layer.</p>
      <p>For closing this modal box you should call the regular method "close()" of the element. Obviusly, the element trigger (ie. button, link...) should be inside the modal box content.</p>
      <button @click="${() => document.getElementById('myBlockerModal').open()}">Open Modal</button>
      <dile-modal blocking id="myBlockerModal">
        To close the modal box, please, click this button.
        <button @click=${ () => {
          let modal = document.getElementById('myBlockerModal');
          modal.close();
        }}>Accept</button>
      </dile-modal>
    `, {
      notes: { markdown: readme },
    }
  )

  .add(
    'Customizing the close icon',
    () => html`
      <style>
        dile-modal {
          --dile-modal-background-color: rgba(130,230,230, 0.8);
          --dile-modal-border-radius: 0px;
          --dile-modal-close-icon-size: 36px;
          --dile-modal-close-icon-top: 5px;
          --dile-modal-close-icon-right: 5px;
          --dile-modal-close-icon-color: #f44;
          --dile-modal-content-shadow-color: #eee;
          --dile-modal-content-shadow-displacement: 1px;
        }
        p {
          margin-top: 20px;
        }
        div.accept {
          display: inline-block;
          padding: 10px;
          background-color: #58f;
          color: #fff;
          border-radius: 10px;
          cursor: pointer;
        }
      </style>
      <button @click="${() => document.getElementById('myModal5').open()}">Open Modal With close icon</button>
      <dile-modal showcloseicon id="myModal5" opened>
        <p>
          This customized Modal Box has a big red close icon!
        </p>
        <div class="accept" @click=${ () => {
          let modal = document.getElementById('myModal5');
          modal.close();
        }}>
          Accept
        </div>
      </dile-modal>
    `, {
      notes: { markdown: readme },
    }
  )