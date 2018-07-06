import AppReducer from '../reducer';

import {
    PLAY_TURNTABLE,
    REMOVE_TURNTABLE,
    REGISTER_TURNTABLE,
    SET_TURNTABLE_PITCH,
    SET_TURNTABLE_RECORD,
} from '../../actions/constants';

describe("Application Reducer", () => {

    describe('REGISTER_TURNTABLE reduction', () => {

        it("should add a new turntable to the redux store.", () => {
            const state = AppReducer(undefined, undefined);
            expect(state.turntables[0]).toBeUndefined();

            const state2 = AppReducer(state, { type: REGISTER_TURNTABLE });
            expect(state2.turntables[0]).toBeDefined();
        });

        it("should set a new turntables videoId if available in action.", () => {
            const state = AppReducer(undefined, { type: REGISTER_TURNTABLE, videoId: 'some-id' });
            expect(state.turntables[0].videoId).toEqual('some-id');
        });

        it('should increment id values of new turntables by 1.', () => {
            const state = AppReducer(undefined, { type: REGISTER_TURNTABLE });
            expect(state.turntables[0].id).toBe(0);

            const state2 = AppReducer(state, { type: REGISTER_TURNTABLE });
            expect(state2.turntables[1].id).toBe(1);

            const state3 = AppReducer(state2, { type: REGISTER_TURNTABLE });
            expect(state3.turntables[2].id).toBe(2);
        });

    });

    describe('REMOVE_TURNTABLE reduction', () => {

        it('should remove a given turntable.', () => {
            const state = AppReducer(undefined, { type: REGISTER_TURNTABLE });
            const state2 = AppReducer(state, { type: REMOVE_TURNTABLE, turntableId: 0 });

            expect(state2.turntables[0]).toBe(null);
        });

        it('should do nothing when removing a turntable thats already removed.', () => {
            const state = AppReducer(undefined, { type: REGISTER_TURNTABLE });
            const state2 = AppReducer(state, { type: REMOVE_TURNTABLE, turntableId: 0 });
            const state3 = AppReducer(state2, { type: REMOVE_TURNTABLE, turntableId: 0 });

            expect(state3.turntables[0]).toBe(null);
        });

        it('should remove a given turntable at any index.', () => {
            const state = AppReducer(undefined, { type: REGISTER_TURNTABLE });
            const state2 = AppReducer(state, { type: REGISTER_TURNTABLE });
            const state3 = AppReducer(state2, { type: REGISTER_TURNTABLE });
            const state4 = AppReducer(state3, { type: REMOVE_TURNTABLE, turntableId: 1 });

            expect(state4.turntables[1]).toBe(null);
        });

        it('should not affect other turntables.', () => {
            const state = AppReducer(undefined, { type: REGISTER_TURNTABLE });
            const state2 = AppReducer(state, { type: REGISTER_TURNTABLE });
            const state3 = AppReducer(state2, { type: REGISTER_TURNTABLE });
            const state4 = AppReducer(state3, { type: REMOVE_TURNTABLE, turntableId: 1 });

            expect(state4.turntables[0]).toBeDefined();
            expect(state4.turntables[1]).toBe(null);
            expect(state4.turntables[2]).toBeDefined();
        });

    });

    describe('PLAY_TURNTABLE reduction', () => {

        it('should set a given turntable playing state to true.', () => {
            const state = AppReducer(undefined, { type: REGISTER_TURNTABLE });
            const state2 = AppReducer(state, { type: PLAY_TURNTABLE, turntableId: 0 });

            expect(state2.turntables[0].playing).toBe(true);
        });

    });

    describe("SET_TURNTABLE_PITCH reduction", () => {

        it('should set a given turntable speed.', () => {
            const state = AppReducer(undefined, { type: REGISTER_TURNTABLE });
            const state2 = AppReducer(state, { type: SET_TURNTABLE_PITCH, turntableId: 0, speed: 1.08 });

            expect(state2.turntables[0].speed).toBe(1.08);

            const state3 = AppReducer(state2, { type: SET_TURNTABLE_PITCH, turntableId: 0, speed: 0.92 });

            expect(state3.turntables[0].speed).toBe(0.92);
        });

    });

    describe("SET_TURNTABLE_RECORD reduction", () => {

        it('should set a given turntable videoId.', () => {
            const state = AppReducer(undefined, { type: REGISTER_TURNTABLE });
            const state2 = AppReducer(state, { type: SET_TURNTABLE_RECORD, turntableId: 0, videoId: 'N4qkjLoK1QU' });

            expect(state2.turntables[0].videoId).toBe('N4qkjLoK1QU');

            const state3 = AppReducer(state2, { type: SET_TURNTABLE_RECORD, turntableId: 0, videoId: 'u9JiMWsUjL8' });

            expect(state3.turntables[0].videoId).toBe('u9JiMWsUjL8');
        });

    });

});
