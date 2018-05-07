import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as ReactDOM from "react-dom";

import AppReducer from "./reducers/reducer";
import Turntable from "./components/Turntable/component";

// -----------------------------------------------------------------------------

const store = createStore(AppReducer);

const rootTree = (
    <Provider store={store}>
        <div>
            <Turntable
                playing
                videoId="K_z2BkUzzSU"
            />
            <Turntable
                videoId="VE6EitjTg3k"
            />
        </div>
    </Provider>

);

ReactDOM.render(
    rootTree,
    document.querySelector(".app-root")
);
