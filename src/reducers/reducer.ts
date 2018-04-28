
import * as T from "./types";

import {
    createTurntable,
} from "./core";

let currentId = 0;

const defaultState : T.AppState = {
    turntables: {},
};

export default function AppReducer (
    state: T.AppState = defaultState,
    action: T.AppAction,
) {
    if (action.type === "REGISTER_TURNTABLE") {
        const newState = Object.assign({}, state, {
            turntables: Object.assign({}, state.turntables, {
                [currentId]: createTurntable(currentId),
            })
        });

        currentId = currentId + 1;

        return newState;
    }

    return state;
};
