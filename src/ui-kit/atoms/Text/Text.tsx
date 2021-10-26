import * as React from "react"
import "./Text.scss"
type Props = {
    children?: string,
    className?: string,
    size?: string
}

export const Text: React.FC<Props> = (props: Props) => {
    const { children, size = "xs", className = "" } = props
    return <p className={`text ${size} ${className}`} >{children}</p>
}