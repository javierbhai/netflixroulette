import React from "react";
import { MainBanner } from "../../patterns/molecules/MainBanner";
import { MovieList } from "../../patterns/molecules/MovieList";
import { ErrorBoundary } from "../../App/ErrorBoundary";
import { Footer } from "../../patterns/atoms/Footer";

import "./home.scss";

export const Home = () => {

  return (
    <main>
      <MainBanner />
      <ErrorBoundary>
        <MovieList />
      </ErrorBoundary>
      <Footer light="roulette">netflix</Footer>
    </main>
  );
}
