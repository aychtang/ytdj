
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
}

// -----------------------------------------------------------------------------

// Register a new turntable into store:
export type RegisterTurntableAction = {
    type: "REGISTER_TURNTABLE",
};

// Remove a turntable from store:
export type RemoveTurntableAction = {
    id: number;
    type: "REMOVE_TURNTABLE",
};

// App action type union:
export type AppAction =
    RemoveTurntableAction |
    RegisterTurntableAction;
