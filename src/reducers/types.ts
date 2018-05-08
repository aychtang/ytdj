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
    type: "REGISTER_TURNTABLE";
    videoId?: string;
};

// Remove a turntable from store:
export type RemoveTurntableAction = {
    type: "REMOVE_TURNTABLE";
    id: number;
};

// Play a turntable:
export type PlayTurntableAction = {
    type: "PLAY_TURNTABLE";
    id: number;
};

export type SetTurntablePitchAction = {
    type: "SET_TURNTABLE_PITCH";
    id: number;
    speed: number;
}

// App action type union:
export type AppAction =
    PlayTurntableAction |
    RemoveTurntableAction |
    RegisterTurntableAction |
    SetTurntablePitchAction;
