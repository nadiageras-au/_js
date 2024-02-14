import {mult, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    //data
    a = 1;
    b = 2;
    c = 3;
})
test('sum should be ccorrect', () => {
    //action
    const result = sum(a, b);

    //expect result
    expect(result).toBe(3);
})
test('multiply should be ccorrect', () => {

    //action
    const result = mult(a, c);
    const result1 = mult(b, c);

    //expect result
    expect(result).toBe(3);
    expect(result1).toBe(6);
})