import * as React from "react"
import { DeleteEdit } from "uikit/atoms/DeleteEdit";
import { MovieTitle } from "uikit/atoms/MovieTitle";
import { Text } from "uikit/atoms/Text";
import { MovieDate } from "uikit/atoms/MovieDate";
import cover from "assets/images/pulp-fiction.png"
import "./MovieElement.scss"

type Props = {
    imageSrc?: string,
    title?: string,
    genres?: string,
    date?: string,
    id?: string,
    deleteAccion?: any
    editAccion?: any
}

export const MovieElement: React.FC<Props> = (props: Props) => {
    const { imageSrc, title, genres, date, deleteAccion, editAccion, id } = props;
    
    
    return (
        <a className="movieElement">
            <img src={imageSrc} className="movieElement__image" alt={title} />
            <div className="movieElement__info">
                <div>
                    <DeleteEdit
                        id={id}
                        deleteAccion={deleteAccion}
                        editAccion={editAccion}
                    />
                    <MovieTitle movieTitle={title} />
                    <Text>{genres}</Text>
                </div>
                <MovieDate>{date}</MovieDate>
            </div>
        </a>
    )
}