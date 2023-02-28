const { describe, it } = require("node:test")
const {findLargest, arrayLengthType} = require("./functions")

describe("findLargest", () => {

    it("exists", () => {
        expect(findLargest).toBeDefined();
    })
    it("is a function", () => {
        expect(findLargest instanceof Function).toEqual(true);
    })
    it("return a number", () => {
        expect(typeof findLargest == 'number').toEqual(true);
    })
    it("return index of largest number", () => {
        expect(findLargest([1, 2, 3, 4])).toEqual(4);
    }) 
    it("return -1 if no values are passed in", () => {
        expect(findLargest([])).toEqual(-1);
    }) 
})

describe("arrayLengthType", () => {
    it("exists", () => {
        expect(arrayLengthType).toBeDefined();
    })
    it("is a function", () => {
        expect(arrayLengthType instanceof Function).toEqual(true);
    })
    it("returns a string", () => {
        expect(typeof arrayLengthType() == "string").toEqual(true);
    })
    it("returns empty if no values are passed in", () => {
        expect(arrayLengthType([])).toEqual("empty");
    })
    it("returns odd", () => {
        expect(arrayLengthType([1, 2, 3])).toEqual("odd");
    })
    it("returns even", () => {
        expect(arrayLengthType([1, 2, 3, 4])).toEqual("even");
    })
})
