import * as React from "react"
import { MovieElement } from "../MovieElement";
import "./MovieList.scss"

type Props = {
    deleteAccion?: () => {};
    editAccion?: () => {};
    movies?: Array<{}>;
}

export const MovieList: React.FC<Props> = (props: Props) => {
    const { deleteAccion, editAccion, movies } = props;
    
    return (
        <section className="listWrapper">
            {movies.map((movie:any) => {
                return(
                <MovieElement
                    date={movie.date}
                    deleteAccion={deleteAccion}
                    editAccion={editAccion}
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