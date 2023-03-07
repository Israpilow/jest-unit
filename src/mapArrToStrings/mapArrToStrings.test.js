const mapArrToStrings = require("./mapArrToStrings");

describe('mapArrToStrings', () => {
    test("Корренктное значение", () => {
        expect(mapArrToStrings([1,2,3])).toEqual(['1', '2', '3'])
    });
    test("Что попало", () => {
        expect(mapArrToStrings([1,2,3, null, undefined, 'dadads'])).toEqual(['1', '2', '3'])
    });
    test("Пустой массив", () => {
        expect(mapArrToStrings([])).toEqual([])
    });
    test("Отрицание", () => {
        expect(mapArrToStrings([1,2,3])).not.toEqual([1,2,3])
    });
})
