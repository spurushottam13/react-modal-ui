# Easy to use React Modal using Hooks


## Naive Example:
This is native example of modal, but it offer lot of customization.

```javascript
import useModal from 'react-modal-ui'
function App() {
    const { showModal, ModalProvider , closeModal} = useModal()

    const ModalComponent = ({ closeModal }) => (
        <React.Fragment>
            <p>THis is Modal</p>
            <button onClick={closeModal}>Close</button>
        </React.Fragment>
    )

    useEffect(() => {
        // call closeModal to close modal from outside of modal component.
        return () => closeModal()
    })

    return (
        <React.Fragment>
            <ModalProvider />
            <p>My Componet</p>
            <button
                onClick={_ => showModal(ModalComponent)}
            >Show Modal</button>
        </React.Fragment>
    )
}
```

## Detailed Documentation:

`const { showModal, ModalProvider , closeModal} = useModal()`

### Provider: `ModalProvider`  
Add this Provider in Component like `<ModalProvider/>` to use modal.

### Method: `showModal` 
`showModal` either accept the **Your React Component** (loads modal with default configuration) or **Configuration Object** for custom configuration

```javascript
// Loads with all default configuration
// MyModalComponent will recieve props closeModal method
showModal(MyModalComponent) 

// with configuration.
showModal({
    component: MyModalComponent,
    showOverlay: true,
    autoDisappear: 10,
    wrapperStyle: {
        top: '20vh',
    },
    overlayStyle: {
        background: rgba(255,0,0,0.5)
    }
    bodyStyle:{
        //..React Style Object
    }
})
```

|Keys| Default : Type| Description|
|--|--|--|
|component|  React.Fragement : React Component | Your modal Component|
|showOverlay| true : Boolean| Show overlay between background and modal|
|autoDisappear| 5 : Boolean or Integer | Number of second for auto disappear or `false` to never auto disappear|



### Method: `closeModal`
call this method to close the Modal from outside, component passed to `showModal` will also receive this method as a prop.

*Your component can expect a `closeModal` method to close modal*

```javascript
const ModalComponent = ({ closeModal }) => (
    <React.Fragment>
        <p>THis is Modal</p>
        <button onClick={closeModal}>Close</button>
    </React.Fragment>
)
```