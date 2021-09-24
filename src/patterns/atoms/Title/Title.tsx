import React from "react"
import "./Title.scss"
type Props = {
    title?: string
}

export const Title: React.FC<Props> = (props: Props) => {
    const { title = 'No Text Provided' } = props
    return <h1 className="title">{title}</h1>
}