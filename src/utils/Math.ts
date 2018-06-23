export const lerpFactory = (min: number, max: number) => (value: number) : number => {
    return (1 - value) * min + value * max;
};
