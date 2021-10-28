import * as React from "react"

import { Header } from "uikit/atoms/Header";
import { join, timeConvert, yearConvert } from "lib/settings";
import { Movie } from "types";
import { Title, Text } from "uikit/atoms";

import cover from "assets/images/cover.png"
import "./MovieDetail.scss"

type Props = {
    searchAction?: () => {};
    movieToDisplay?: Movie;
}

export const MovieDetail: React.FC<Props> = (props: Props) => {
    const { searchAction, movieToDisplay } = props
    const {
      overview,
      runtime,
      release_date,
      vote_average,
      genres,
      title,
      poster_path = cover
    } = movieToDisplay;

    const renderDetail = () =>{
        return(<article className="Detail">
            <div>
            <img src={poster_path} className="movieElement__image" alt="title" />
            </div>
            <div>
                <div className="df-row ai-center">
                    <Title title={title} />
                    <Text className="Detail__points" size="l">{vote_average}</Text>
                </div>
                <div>
                    <Text>{join(genres)}</Text>
                    <div className="df-row">
                        <Text className="Detail__time" size="xl">{yearConvert(release_date)}</Text>
                        <Text className="Detail__time" size="xl">{timeConvert(runtime)}</Text>
                    </div>
                    <Text className="Detail__description" size="l">{overview}</Text>
                </div>
            </div>
        </article>)
    }
    return (
        <section className="MovieDetail">
            <Header searchAction={searchAction} />
            {renderDetail()}
        </section>
    );
};