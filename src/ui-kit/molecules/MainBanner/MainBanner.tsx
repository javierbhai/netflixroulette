import * as React from "react"
import { Title } from "uikit/atoms/Title";
import { Header } from "uikit/atoms/Header";
import "./MainBanner.scss"

type Props = {
    addAction?: () => {};
}

export const MainBanner: React.FC<Props> = (props: Props) => {
    const { addAction } = props
    return (
        <header className="MainBanner">
            <Header addAction={addAction} />
            <Title title="FIND YOUR MOVIE" />
            <form action="" className="Searchform">
                <input className="Searchform__input" placeholder="What do you want to watch?" type="text" />
                <button className="Searchform__button">SEARCH</button>
            </form>
        </header>
    );
};