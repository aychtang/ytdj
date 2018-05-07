
import * as T from "./types";
import {
    PLAY_TURNTABLE,
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

const turntableIdLens = lensPath(["turntableId"]);

const turntableLens = (id: number) =>
    lensPath(["turntables", id]);

const turntablePlayingLens = (id: number) =>
    lensPath(["turntables", id, "playing"]);

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
            createTurntable(id, action.videoId),
            state,
        );

        return set(
            turntableIdLens,
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

    if (action.type === PLAY_TURNTABLE) {
        return set(
            turntablePlayingLens(action.id),
            true,
            state,
        );
    }

    return state;
};
