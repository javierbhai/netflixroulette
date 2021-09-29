import React from "react"
import { movies } from "assets/movies";
import { MovieElement } from "../MovieElement";
import "./MovieList.scss"

export const MovieList = () => { 
    return (
        <section className="listWrapper">
            {movies.map((movie) => (
                <MovieElement
                    title={movie.title}
                    description={movie.description}
                    date={movie.date}
                    key={movie.id}
                />
            ))}
        </section>
    )
}