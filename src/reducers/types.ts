
interface Turntable {
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
