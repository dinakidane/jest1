const addition = require('../calc');

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => { // create test with test method, pass in a description of the test
            expect(addition(20, 22)).toBe(42);       // explain that you expect whenyou call addition function with
        });  
        test("should return 73 for 42 + 31", () => { // create test with test method, pass in a description of the test
            expect(addition(42, 31)).toBe(73);       // explain that you expect whenyou call addition function with
        });                                              //   20, 22, it should return 42
    });
    describe("Subtract function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});