const binarySearch = require('./array-binary-search');

describe('binary search', () => {
    it('can find the index of a value in an array', () => {
        let array = [3, 5, 2, 7, 1];
        expect(binarySearch(array, 2)).toBe(2);
    });
    it('can find the index of a value in an array with a single item', () => {
        let array =[7];
        expect(binarySearch(array, 7)).toBe(0);
    });
    it('returns -1 if the array aint got the droids you was looking for', () => {
        let array = [3, 5, 2, 7, 1];
        expect(binarySearch(array, 9)).toBe(-1);
    });
    it('can handle an empty array', () => {
        let array =[];
        expect(binarySearch(array, 9)).toBe(-1);
    });
})
