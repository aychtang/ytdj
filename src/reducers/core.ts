import * as T from './types';

/* 
 * createTurntable: Initialise a turntable instance to be registered into redux:
 */
export function createTurntable(id: number, videoId?: string) : T.Turntable {
    return {
        id,
        videoId,
        speed: 1,
        playing: false,
    };
}
