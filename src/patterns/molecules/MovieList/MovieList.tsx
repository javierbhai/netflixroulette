import React from "react"
import { MovieElement } from "../MovieElement";
import "./MovieList.scss"

export const MovieList = () => {
    let movies = [
        {
            title: "Rick and Morty",
            description:"Animated Science Fiction Sitcom",
            date: "2014",
            id: "r43d2"
        },
        {
            title: "Stanger Things",
            description:"American Science Fiction Series",
            date: "2014",
            id: "f43ds"
        },
        {
            title: "Interstellar",
            description:"Epic Science Fiction Movie",
            date: "2014",
            id: "d2s24"
        },
        {
            title: "Pulp Fiction",
            description:"Action & Adventure",
            date: "2014",
            id: "r43f3"
        },
        {
            title: "Avengers: War of Infinity",
            description:"Action & Adventure",
            date: "2014",
            id: "r43t4"
        }
    ]  
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