import * as React from "react"
import { DeleteEdit } from "uikit/atoms/DeleteEdit";
import { MovieDate } from "uikit/atoms/MovieDate";
import { MovieTitle } from "uikit/atoms/MovieTitle";
import { Text } from "uikit/atoms/Text";
import cover from "assets/images/cover.png"
import "./MovieElement.scss"

type Props = {
    date?: string,
    deleteAction?: any
    editAction?: any
    genres?: string,
    id?: string,
    imageSrc?: string,
    title?: string,
}

export const MovieElement: React.FC<Props> = (props: Props) => {
    const { date = "Soon", deleteAction, editAction, genres, id, imageSrc = cover, title } = props;

    return (
        <a className="movieElement">
            <img src={imageSrc} className="movieElement__image" alt={title} />
            <div className="movieElement__info">
                <div>
                    <DeleteEdit
                        id={id}
                        deleteAction={deleteAction}
                        editAction={editAction}
                    />
                    <MovieTitle movieTitle={title} />
                    <Text>{genres}</Text>
                </div>
                <MovieDate>{date}</MovieDate>
            </div>
        </a>
    )
}