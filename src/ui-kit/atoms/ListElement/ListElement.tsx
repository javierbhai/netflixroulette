import * as React from "react"
import "./ListElement.scss"

type Props = {
    children?: string,
    className?: string,
    onClick?: Function
}

export const ListElement: React.FC<Props> = (props: Props) => {
    const { children, className = "", onClick } = props    
    return <li className={`sortingMenu__button ${className}`}><button className="sortingMenu__button" onClick={() => onClick()}>{children}</button></li>
}