import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./store/store"
import { Home } from "./pages/home";
import "./index.scss";

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>
, document.getElementById("root"));