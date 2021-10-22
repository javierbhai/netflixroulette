import * as React from "react"

import { CustomAlert } from "uikit/molecules/CustomAlert";
import CloseIcon from "uikit/icons/close-button.svg"
import ReactModal from "react-modal";

import "./DeleteModal.scss";

type Props = {
    deleteIsOn?: boolean
    setDeleteIsOn?: (id: boolean) => {}
}

ReactModal.setAppElement('#root');

export const DeleteModal: React.FC<Props> = (props: Props) => {
    const { deleteIsOn, setDeleteIsOn } = props;

    return(
    <ReactModal 
        isOpen={deleteIsOn}
        className="Modal"
        overlayClassName="Overlay"
    >
        <img 
            src={CloseIcon}
            alt="Close Modal"
            className="CloseIcon"
            onClick={() => setDeleteIsOn(false)}
        />
        <CustomAlert
            legend="DELETE MOVIE"
            content="Are you sure you want to delete this movie?"
            action="CONFIRM"
        />
    </ReactModal>
    )    
}
