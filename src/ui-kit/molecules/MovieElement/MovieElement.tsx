import * as React from "react"
import { DeleteEdit } from "uikit/atoms/DeleteEdit";
import { Image } from "uikit/atoms/Image";
import { MovieDate } from "uikit/atoms/MovieDate";
import { MovieTitle } from "uikit/atoms/MovieTitle";
import { Text } from "uikit/atoms/Text";
import { yearConvert } from "lib/settings";
import cover from "assets/images/cover.png"

import "./MovieElement.scss"

type Props = {
    date?: string;
    deleteAction?: () => {};
    editAction?: () => {};
    detailAction?: (idParam: string) => {};
    genres?: string;
    id?: string;
    imageSrc?: string;
    title?: string;
}

export const MovieElement: React.FC<Props> = (props: Props) => {
    const { date = "Soon", deleteAction, detailAction, editAction, genres, id, imageSrc = cover, title } = props;

    const handleDetail = (id: string) => {
        detailAction(id)
    }

    return (
        <a className="movieElement" onClick={() => handleDetail(id)}>
            <Image src={imageSrc} title={title} />
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
                <MovieDate>{yearConvert(date)}</MovieDate>
            </div>
        </a>
    )
}