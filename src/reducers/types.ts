export interface Turntable {
    id: number;
    speed: number;
    videoId: string;
    playing: boolean;
}

interface TurntableMap {
    [key: string]: Turntable;
}

export interface AppState {
    turntables: TurntableMap;
    turntableId: number;
}

// -----------------------------------------------------------------------------

// Register a new turntable into store:
export type RegisterTurntableAction = {
    type: "turntable/REGISTER";
    videoId?: string;
}

// Remove a turntable from store:
export type RemoveTurntableAction = {
    type: "turntable/REMOVE";
    id: number;
}

// Play a turntable:
export type PlayTurntableAction = {
    type: "turntable/PLAY";
    id: number;
}

export type SetTurntablePitchAction = {
    type: "turntable/PITCH";
    id: number;
    speed: number;
}

export type SetTurntableRecordAction = {
    type: "turntable/CHANGE_RECORD";
    id: number;
    videoId: string;
}

// App action type union:
export type AppAction =
    PlayTurntableAction |
    RemoveTurntableAction |
    RegisterTurntableAction |
    SetTurntablePitchAction |
    SetTurntableRecordAction;
