
import * as T from "./types";

import {
    set,
    lensPath,
} from "ramda";

import {
    createTurntable,
} from "./core";

// -----------------------------------------------------------------------------

let currentId = 0;

const defaultState : T.AppState = {
    turntables: {},
};

// -----------------------------------------------------------------------------

const turntableIdLens = (id: number) =>
    lensPath(["turntables", id]);


export default function AppReducer (
    state: T.AppState = defaultState,
    action: T.AppAction,
) {
    if (action.type === "REGISTER_TURNTABLE") {
        const newState = set(
            turntableIdLens(currentId),
            createTurntable(currentId),
            state
        );

        currentId = currentId + 1;

        return newState;
    }

    return state;
};
