import * as React from "react"
import { MovieElement } from "../MovieElement";
import "./MovieList.scss"

type Props = {
    deleteAction?: () => {};
    editAction?: () => {};
    movies?: Array<{}>;
}

export const MovieList: React.FC<Props> = (props: Props) => {
    const { deleteAction, editAction, movies } = props;
    
    return (
        <section className="listWrapper">
            {movies.map((movie:any) => {
                return(
                <MovieElement
                    date={movie.date}
                    deleteAction={deleteAction}
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