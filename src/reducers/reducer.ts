
import * as T from './types';

const defaultState : T.AppState = {
    turntables: {},
};

export default function AppReducer (
    state: T.AppState = defaultState,
    action: any
) {
    return state;
};
