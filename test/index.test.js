const { add, subtract } = require('../src');

describe('add', () => {
    it('should add two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
});

describe('subtract', () => {
    it('should subtract two numbers', () => {
        expect(subtract(5, 1)).toBe(4);
    });
});
