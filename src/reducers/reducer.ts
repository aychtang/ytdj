
import * as T from "./types";
import {
    REMOVE_TURNTABLE,
    REGISTER_TURNTABLE,
} from "../actions/constants";

import {
    set,
    lensPath,
} from "ramda";

import {
    createTurntable,
} from "./core";

// -----------------------------------------------------------------------------

const defaultState : T.AppState = {
    turntables: {},
    turntableId: 0,
};

// -----------------------------------------------------------------------------

const turntableLens = (id: number) =>
    lensPath(["turntables", id]);

const turntableIdLens = () =>
    lensPath(["turntableId"]);

// -----------------------------------------------------------------------------

export default function AppReducer (
    state: T.AppState = defaultState,
    action: T.AppAction,
) : T.AppState {
    if (!action) {
        return state;
    }

    if (action.type === REGISTER_TURNTABLE) {
        const id = state.turntableId;

        const newState = set(
            turntableLens(id),
            createTurntable(id),
            state,
        );

        return set(
            turntableIdLens(),
            id + 1,
            newState,
        );
    }

    if (action.type === REMOVE_TURNTABLE) {
        return set(
            turntableLens(action.id),
            null,
            state,
        );
    }

    return state;
};
