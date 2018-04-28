import * as React from "react";
import * as ReactDOM from "react-dom";

import AppReducer from './reducers/reducer';

import Turntable from "./components/Turntable/component";

// -----------------------------------------------------------------------------

const rootTree = (
    <div>
        <Turntable
            playing
            videoId="K_z2BkUzzSU"
        />
        <Turntable
            videoId="VE6EitjTg3k"
        />
    </div>
);

ReactDOM.render(
    rootTree,
    document.querySelector(".app-root")
);
