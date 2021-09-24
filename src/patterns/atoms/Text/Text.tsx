import React from "react"
import "./Text.scss"
type Props = {
    children?: string,
    size?: string
}

export const Text: React.FC<Props> = (props: Props) => {
    const { children, size = 14 } = props
    return <p className="text" style={{fontSize:`${size}px`}} >{children}</p>
}