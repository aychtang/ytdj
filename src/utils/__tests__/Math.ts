import {lerpFac} from '../Math';

describe("Math Module", () => {
    describe("Linear Interpolation Factory", () => {
        it("Should interpolate correctly to min and max values constructed", () => {
            const lerp = lerpFac(0.92, 1.08);
            expect(lerp(0)).toEqual(0.92);
            expect(lerp(0.5)).toEqual(1);
            expect(lerp(1)).toEqual(1.08);
        });
    });
});
