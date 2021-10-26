import * as React from "react"

import searchIcon from "uikit/icons/search-icon.svg";
import "./Header.scss"

type Props = {
    addAction?: (state: boolean) => {};
    searchAction?: () => {};
}

export const Header: React.FC<Props> = (props: Props) => {
    const { addAction, searchAction } = props

    const add = (<a className="top__button" onClick={() => addAction(false)}>+ ADD MOVIE</a>)
    const search = (<a className="top__button" onClick={() => searchAction()}><img src={searchIcon} /></a>)
    return (
        <header className="top">
            <p className="top__logo">netflix<span className="top__logo--light">roulette</span></p>
            {addAction ? add : search}
        </header>
    )
};