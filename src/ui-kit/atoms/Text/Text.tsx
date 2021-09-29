import React from "react"
import "./Text.scss"
type Props = {
    children?: string,
    size?: string
}

export const Text: React.FC<Props> = (props: Props) => {
    const { children, size = "xs" } = props
    return <p className={`text ${size}`} >{children}</p>
}