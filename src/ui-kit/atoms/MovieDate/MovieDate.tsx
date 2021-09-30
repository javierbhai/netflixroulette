import React from "react"
import "./MovieDate.scss"
type Props = {
    children?: string
}

export const MovieDate: React.FC<Props> = (props: Props) => {
    const { children } = props
    return <p className="movieDate" >{children}</p>
}