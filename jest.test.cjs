// const sum = require('./sum');
import {describe, expect, test} from '@jest/globals';

describe('describe common matcher',()=>{
    expect(2+2).toBe(4)
    // expect(2+2).not.toBe(4)
})

describe('describe to be true or false',()=>{
    expect(1).toBeTruthy()
    expect(0).toBeFalsy()
})

describe('describe number',()=>{
    expect(4).toBeGreaterThan(3)
    expect(2).toBeLessThan(3)
})

describe('describe object',()=>{
    expect({name:'viking'}).toEqual({name:'viking'})
})
