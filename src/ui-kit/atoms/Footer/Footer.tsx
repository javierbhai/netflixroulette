import * as React from "react"
import "./Footer.scss"

type Props = {
    children?: string;
    light?: string;
}

export const Footer: React.FC<Props> = (props: Props) => {
    const { children, light } = props
    return (
        <footer className="footer">
            <p className="footer__logo">{children}<span className="footer__logo--light">{light}</span></p>
        </footer>
    )
};