import * as React from "react"
import { MovieElement } from "../MovieElement";
import { Movie } from "types";
import "./MovieList.scss"

type Props = {
    deleteAction?: () => {};
    detailAction: () => {};
    editAction?: () => {};
    movies?: Movie[];
}

export const MovieList: React.FC<Props> = (props: Props) => {
    const { deleteAction, detailAction, editAction, movies } = props;
    
    return (
        <section className="listWrapper">
            {movies.map((movie: Movie) => {
                return(
                <MovieElement
                    date={movie.date}
                    deleteAction={deleteAction}
                    detailAction={detailAction}
                    editAction={editAction}
                    genres={movie.genres.join(', ')}
                    id={movie.id}
                    imageSrc={movie.poster_path}
                    key={movie.id}
                    title={movie.title}
                />
            )})}
        </section>
    )
}
