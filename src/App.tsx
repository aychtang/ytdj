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

import {
    registerTurntable,
} from './actions/pureActionCreators';

// -----------------------------------------------------------------------------

const store = createStore(AppReducer);

store.dispatch(registerTurntable("NzzPYhRXI4E"));
store.dispatch(registerTurntable("elPn2pvDIcg"));

// -----------------------------------------------------------------------------

const rootTree = (
    <Provider store={store}>
        <Container/>
    </Provider>
);

ReactDOM.render(
    rootTree,
    document.querySelector(".app-root")
);
