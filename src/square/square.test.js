const square = require('./square');

describe('square', () => {
    let mockValue;
    //Вызов перед каждым тестамом
    beforeEach(() => {
    })
    //Вызов один раз перед всеми тестами
    beforeAll(() => {
    })
    test('Корректное значение', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
        expect(square(2)).not.toBeUndefined();
    })
    //Вызов после каждого теста
    afterEach(() => {
    })
    //Вызов один раз после всемех тестов
    afterAll(() => {
    })
})