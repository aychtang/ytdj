import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as ReactDOM from "react-dom";

import Container from './Container';
import AppReducer from "./reducers/reducer";
import Turntable from "./components/Turntable/component";

// -----------------------------------------------------------------------------

const store = createStore(AppReducer);

const rootTree = (
    <Provider store={store}>
        <Container/>
    </Provider>

);

ReactDOM.render(
    rootTree,
    document.querySelector(".app-root")
);
