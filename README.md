# Moved!

**This package has moved** and is now available at [@dile/ui](https://github.com/Polydile/dile-components). Please update your dependencies. This repository is no longer maintained. You can read the documentation at [Dile Components](https://dile-components.com/).

# dile-modal

This is a Web Component to implement a modal box, based on LitElement.

[Go to demos page](https://dile-modal.polydile.com)

# Use

Install it from npm:

```
npm i dile-modal
```

Place the script In your HTML page or include the dile-modal.js file in your JS bundle. After that you can use the dile-modal tag, like this:

```
<dile-modal id="myModal">
  <p>
    Lorem, ipsum dolor sit...
  </p>
</dile-modal> 
```

Whatever you place inside the ```<dile-modal>``` tag will be the content displayed when the modal box opens.

When needed, you may use the ```open()``` method to open the modal box interface, and ```close()``` to close it. 

```
document.getElementById("myModal").open();
```

Other posibility in order to open or close the modal box is to set the boolean ```opened``` attribute.

## Properties

- **opened**: Bolean property used to change the modal state, false is closed / true means open.
- **showCloseIcon**: Boolean property to tell the modal box you want a close icon to be displayed.
- **blocking**: Boolean property to configure the modal box as a bloking interface. If true the modal box blocks the screen. That is, when you click in the background layer, the modal box do not close.

## Methods

- **open**: Use it to open the modal box
- **close**: Use it to close the modal box

## Events

- **dile-modal-closed**: Dispatched when the modal box becomes closed, in case you are called the close() method, or clicked in the background modal, or by the close icon.
- **dile-modal-background-closed**: Dispatched when the modal box is closed because the user clicks in the background layer.

## Style customization

You can customize the modal box interface by using the CSS custom properties bellow.

Custom property | Description | Default
----------------|-------------|---------
--dile-modal-background-color | Modal layer background color | rgba(30,30,30, 0.8)
--dile-modal-z-index | Modal layer z-index | 100
--dile-modal-content-z-index | Content layer z-index | 101
--dile-modal-width | Content layer width | 280px
--dile-modal-min-width | Content layer min width | 250px
--dile-modal-max-width | Content layer max width | 100vw
--dile-modal-height | Conten layer height | auto
--dile-modal-min-height | Content layer max height | auto
--dile-modal-max-height | Content layer max height | 100vh
--dile-modal-content-background-color | Content layer background color | #fff
--dile-modal-content-padding | Content layer padding | 1em
--dile-modal-border-radius | Content layer border radius | 15px
--dile-modal-content-shadow-displacement | content layer shadow offset | 6px
--dile-modal-content-shadow-blur | Content layer shadow blur | 16px
--dile-modal-content-shadow-color | Content layer shadow color | #000
--dile-modal-close-icon-color | Close icon color | #888
--dile-modal-close-icon-size | Close icon size | 24px
--dile-modal-animation-duration | Duration of the opacity modal animation | 0.3s
--dile-modal-close-icon-top | Top position applied to the close icon | 5px
--dile-modal-close-icon-right | Right position applied to the close icon | 18px
