import React from "react"
import "./Footer.scss"

type Props = {
    children?: string,
    light?: string
}

export const Footer: React.FC<Props> = (props: Props) => {
    const { children, light } = props
    return (
        <footer className="footer">
            <p>{children}<span>{light}</span></p>
        </footer>
    )
}