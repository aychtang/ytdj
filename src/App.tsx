import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as ReactDOM from "react-dom";

import Container from './Container';
import AppReducer from "./reducers/reducer";
import Turntable from "./components/Turntable/component";

import {
    PLAY_TURNTABLE,
    REGISTER_TURNTABLE,
} from './actions/constants';

// -----------------------------------------------------------------------------

const store = createStore(AppReducer);

store.dispatch({
    type: REGISTER_TURNTABLE,
    videoId: "K_z2BkUzzSU",
});

store.dispatch({
    type: REGISTER_TURNTABLE,
    videoId: "VE6EitjTg3k",
});


const rootTree = (
    <Provider store={store}>
        <Container/>
    </Provider>
);

ReactDOM.render(
    rootTree,
    document.querySelector(".app-root")
);
