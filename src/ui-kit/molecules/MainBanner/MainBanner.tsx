import * as React from "react"
import { Title } from "uikit/atoms/Title";
import "./MainBanner.scss"

type Props = {
    addAction?: (action: boolean) => {};
}

export const MainBanner: React.FC<Props> = (props: Props) => {
    const { addAction } = props
    return (
        <header className="MainBanner">
            <section className="top">
                <p className="top__logo">netflix<span>roulette</span></p>
                <a className="top__button" onClick={() => addAction(false)}>+ ADD MOVIE</a>
            </section>
            <Title title="FIND YOUR MOVIE" />
            <form action="" className="Searchform">
                <input className="Searchform__input" placeholder="What do you want to watch?" type="text" />
                <button className="Searchform__button">SEARCH</button>
            </form>
        </header>
    );
};