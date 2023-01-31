import { merge } from './merge';

test("merge both array", ()=>{
    let c1 = [1,2,4];
    let c2 = [3,5];
    let result = merge(c1,c2);
    expect(result).toBe([1,2,3,4,5]);
})
