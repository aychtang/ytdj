
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

// -----------------------------------------------------------------------------

export default function AppReducer (
    state: T.AppState = defaultState,
    action: T.AppAction,
) : T.AppState {
    // Do nothing if no valid action found:
    if (!action || !action.type) {
        return state;
    }

    // Register a new turntable model at the current ID:
    if (action.type === "REGISTER_TURNTABLE") {
        const newState = set(
            turntableIdLens(currentId),
            createTurntable(currentId),
            state,
        );

        currentId = currentId + 1;

        return newState;
    }

    // Remove the turntable model from the redux store:
    if (action.type === "REMOVE_TURNTABLE") {
        return set(
            turntableIdLens(action.id),
            null,
            state,
        );
    }

    return state;
};
