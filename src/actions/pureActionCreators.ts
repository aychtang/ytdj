import {
    PLAY_TURNTABLE,
    REMOVE_TURNTABLE,
    REGISTER_TURNTABLE,
    SET_TURNTABLE_PITCH,
    SET_TURNTABLE_RECORD,
} from './constants';

import { AppAction } from '../reducers/types';

export const setTurntablePitch = (turntableId : number, speed : number) : AppAction => ({
    speed,
    turntableId,
    type: SET_TURNTABLE_PITCH,
});

export const registerTurntable = (videoId : string) : AppAction => ({
    videoId,
    type: REGISTER_TURNTABLE,
});

export const setRecord = (turntableId : number, videoId: string) : AppAction => ({
    videoId,
    turntableId,
    type: SET_TURNTABLE_RECORD,
});
