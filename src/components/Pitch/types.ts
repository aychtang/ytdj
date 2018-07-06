export interface PitchProps {
    id: number;
    lerp: (x: number) => number;
    setPitch?: (id: number, speed: number) => void;
}

export interface PitchState {
    value: number;
}

export interface PitchEvent {
    target: any;
}

export interface PitchDispatchFromProps {
    setPitch: (id: number, speed: number) => void;
}
