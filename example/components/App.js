import React from 'react';
import useModal from '../../src'
function App() {
    const { showModal, ModalProvider } = useModal()

    const handleShowModal = () => {
        showModal(() => (<p>This is </p>))
    }

    const handleShowModal1 = () => {
        showModal({
            component: ModalComponent,
            showOverlay: true,
            wrapperStyle: {
                background: 'red',
                top: '20vh',
                transform: 'translate(-50%,-50%)',
            },
            autoDisappear: true,
        })
    }

    return (
        <React.Fragment>
            <ModalProvider />
            <p>This is App Component</p>
            <button onClick={handleShowModal}>Show Modal</button>
            <br/>
            <br/>
            <button onClick={handleShowModal1}>Show Modal with Configuration</button>
        </React.Fragment>
    )
}

export default App

const ModalComponent = ({ closeModal }) => (
    <React.Fragment>
        <p>THis is Modal</p>
        <div
            style={{
                width: "min-content",
                padding: "2px 8px",
                borderRadius: "4px",
                background: "#8ea5f4",
                color: "white",
                cursor: "pointer"
            }}
            onClick={closeModal}
        >Close</div>
    </React.Fragment>
)