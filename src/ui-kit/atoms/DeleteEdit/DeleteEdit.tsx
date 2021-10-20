import * as React from "react"

import closeButton from "uikit/icons/close-button.svg"
import deleteEdit from "uikit/icons/delete-edit.svg"
import "./DeleteEdit.scss"

type Props = {
    deleteAccion?: any;
    editAccion?: any;
    id?: string;
}

export const DeleteEdit: React.FC<Props> = (props: Props) => {
    const { deleteAccion, editAccion, id } = props
    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = () => setIsOpen(!isOpen);    
    
    const handleEditAction = (id: any) => {
        editAccion(id)
        toggle()
    }

    const handleDeleteAction = (id: any) => {
        deleteAccion(id)
        toggle()
    }

    
    return (
        <>
        <div className="deleteEdit">
            <img
                src={deleteEdit}
                onClick={toggle}
                className="deleteEdit__icon"
                alt="Edit Delete"
            />
        </div>
        <ul className={`deleteEdit__ul ${isOpen ? 'displayFlex' : 'displayNone'}`}>
            <li onClick={toggle} className="deleteEdit__close">
                <img
                    src={closeButton}
                    className="deleteEdit__closeicon"
                    alt="Edit Delete"
                />
            </li>
            <li className="deleteEdit__li" onClick={() => handleEditAction(id)}>Edit</li>
            <li className="deleteEdit__li" onClick={() => handleDeleteAction(id)}>Delete</li>
        </ul>
        </>
    )
}