import React from "react";
import { MainBanner } from "uikit/molecules/MainBanner";
import { MovieList } from "uikit/molecules/MovieList";
import { ErrorBoundary } from "common/ErrorBoundary";
import { Footer } from "uikit/atoms/Footer";

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
