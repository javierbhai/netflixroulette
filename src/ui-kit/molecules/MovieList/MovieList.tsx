import * as React from "react"
import { MovieElement } from "../MovieElement";
import "./MovieList.scss"

type Props = {
    movies?: any,
    deleteAccion?: any
    editAccion?: any
}

export const MovieList: React.FC<Props> = (props: Props) => {
    const { movies, deleteAccion, editAccion } = props;
    
    return (
        <section className="listWrapper">
            {movies.map((movie:any) => {
                return(
                <MovieElement
                    imageSrc={movie.poster_path}
                    title={movie.title}
                    genres={movie.genres.join(', ')}
                    date={movie.date}
                    key={movie.id}
                    id={movie.id}
                    deleteAccion={deleteAccion}
                    editAccion={editAccion}
                />
            )})}
        </section>
    )
}