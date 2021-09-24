import React from "react"
import { Title } from "../../atoms/Title";
import "./MainBanner.scss"

type Props = {
    children?: string
}

export const MainBanner: React.FC<Props> = (props: Props) => {
    const { children } = props
    return (
        <header className="MainBanner">
            <section>
                <p>netflix<span>roulette</span></p>
                <a>+ ADD MOVIE</a>
            </section>
            <Title title="FIND YOUR MOVIE" />
            <form action="">
                <input className="inputMain" placeholder="What do you want to watch?" type="text" />
                <button>SEARCH</button>
            </form>
        </header>
    )
}