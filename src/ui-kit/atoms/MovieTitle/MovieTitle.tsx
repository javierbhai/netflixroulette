import React from "react"
import "./MovieTitle.scss"
type Props = {
    movieTitle?: string
}

export const MovieTitle: React.FC<Props> = (props: Props) => {
    const { movieTitle = 'No Title Provided' } = props
    return <p className="movieTitle">{movieTitle}</p>
}