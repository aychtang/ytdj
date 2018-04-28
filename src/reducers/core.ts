import * as T from './types';

/* 
 * createTurntable: Initialise a turntable instance to be registered into redux:
 */
export function createTurntable(id: number) : T.Turntable {
    return {
        id,
        speed: 1,
        playing: false,
        videoId: undefined,
    };
}
