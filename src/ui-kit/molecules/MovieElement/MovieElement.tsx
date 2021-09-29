import React from "react"
import { MovieTitle } from "uikit/atoms/MovieTitle";
import { Text } from "uikit/atoms/Text";
import { MovieDate } from "uikit/atoms/MovieDate";
import cover from "assets/images/pulp-fiction.png"
import "./MovieElement.scss"

type Props = {
    title?: string,
    description?: string,
    date?: string
}

export const MovieElement: React.FC<Props> = (props: Props) => {
    const { title, description, date } = props

    return (
        <div className="movieElement">
            <img src={cover} alt="Logo" />
            <div className="movieElement__info">
                <div>
                    <MovieTitle movieTitle={title} />
                    <Text>{description}</Text>
                </div>
                <MovieDate>{date}</MovieDate>
            </div>
        </div>
    )
}