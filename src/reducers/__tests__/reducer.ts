import AppReducer from '../reducer';

import {
    REMOVE_TURNTABLE,
    REGISTER_TURNTABLE,
} from '../../actions/constants';

describe("Application Reducer", () => {

    describe('REGISTER_TURNTABLE reduction', () => {

        it("should add a new turntable to the redux store.", () => {
            const state = AppReducer(undefined, undefined);
            expect(state.turntables[0]).toBeUndefined();

            const state2 = AppReducer(state, { type: REGISTER_TURNTABLE });
            expect(state2.turntables[0]).toBeDefined();
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
            const state2 = AppReducer(state, { type: REMOVE_TURNTABLE, id: 0 });

            expect(state2.turntables[0]).toBe(null);
        });

        it('should do nothing when removing a turntable thats already removed.', () => {
            const state = AppReducer(undefined, { type: REGISTER_TURNTABLE });
            const state2 = AppReducer(state, { type: REMOVE_TURNTABLE, id: 0 });
            const state3 = AppReducer(state2, { type: REMOVE_TURNTABLE, id: 0 });

            expect(state3.turntables[0]).toBe(null);
        });

        it('should remove a given turntable at any index.', () => {
            const state = AppReducer(undefined, { type: REGISTER_TURNTABLE });
            const state2 = AppReducer(state, { type: REGISTER_TURNTABLE });
            const state3 = AppReducer(state2, { type: REGISTER_TURNTABLE });
            const state4 = AppReducer(state3, { type: REMOVE_TURNTABLE, id: 1 });

            expect(state4.turntables[1]).toBe(null);
        });

        it('should not affect other turntables.', () => {
            const state = AppReducer(undefined, { type: REGISTER_TURNTABLE });
            const state2 = AppReducer(state, { type: REGISTER_TURNTABLE });
            const state3 = AppReducer(state2, { type: REGISTER_TURNTABLE });
            const state4 = AppReducer(state3, { type: REMOVE_TURNTABLE, id: 1 });

            expect(state4.turntables[0]).toBeDefined();
            expect(state4.turntables[1]).toBe(null);
            expect(state4.turntables[2]).toBeDefined();
        });

    });

});
