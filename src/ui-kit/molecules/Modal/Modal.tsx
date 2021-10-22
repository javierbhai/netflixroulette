import * as React from "react"

import CloseIcon from "uikit/icons/close-button.svg"
import ReactModal from "react-modal";

import "./Modal.scss";

type Props = {
    children?: string
}

ReactModal.setAppElement('#root');

// export const Modal: React.FC<Props> = (props: Props) => <div className="modal">{props.children}</div>
export const Modal: React.FC<Props> = (props: Props) => {
    const { children } = props;
    const [ showModal, setShowModal ] = React.useState(false)
    return(
        <ReactModal 
            isOpen={showModal}
            className="Modal"
            overlayClassName="Overlay"
        >
            <img
                src={CloseIcon}
                alt="Close Modal"
            />
            <button onClick={()=>setShowModal(false)}>Close Modal </button>
        </ReactModal>
    )    
}
