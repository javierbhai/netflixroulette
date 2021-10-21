import * as React from "react"

import { EditForm } from "uikit/molecules/EditForm";
import CloseIcon from "uikit/icons/close-button.svg"
import ReactModal from "react-modal";

import "./EditModal.scss";

type Props = {
    isAddOrEdit?: string;
    editAddIsOn?: boolean;
    setEditAddIsOn?: (action: boolean) => {};
}

ReactModal.setAppElement('#root');

export const EditModal: React.FC<Props> = (props: Props) => {
    const { isAddOrEdit, editAddIsOn, setEditAddIsOn } = props;    
    return(
    <ReactModal 
        isOpen={editAddIsOn}
        className="Modal"
        overlayClassName="Overlay"
    >
        <img
            src={CloseIcon}
            alt="Close Modal"
            className="CloseIcon"
            onClick={() => setEditAddIsOn(false)}
        />
        <EditForm isAddOrEdit={isAddOrEdit}/>
    </ReactModal>
    )    
};