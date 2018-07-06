
import * as T from "./types";
import {
    PLAY_TURNTABLE,
    REMOVE_TURNTABLE,
    REGISTER_TURNTABLE,
    SET_TURNTABLE_PITCH,
    SET_TURNTABLE_RECORD,
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

const turntableLens = (turntableId: number) =>
    lensPath(["turntables", turntableId]);

const turntablePlayingLens = (turntableId: number) =>
    lensPath(["turntables", turntableId, "playing"]);

const turntableSpeedLens = (turntableId: number) =>
    lensPath(["turntables", turntableId, "speed"]);

const turntableRecordLens = (turntableId: number) =>
    lensPath(["turntables", turntableId, "videoId"]);

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
            turntableLens(action.turntableId),
            null,
            state,
        );
    }

    if (action.type === PLAY_TURNTABLE) {
        return set(
            turntablePlayingLens(action.turntableId),
            true,
            state,
        );
    }

    if (action.type === SET_TURNTABLE_PITCH) {
        return set(
            turntableSpeedLens(action.turntableId),
            action.speed,
            state,
        );
    }

    if (action.type === SET_TURNTABLE_RECORD) {
        return set(
            turntableRecordLens(action.turntableId),
            action.videoId,
            state,
        );
    }

    return state;
};
