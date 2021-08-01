const map = require('./map');

describe('map', () => {

    it('Mappping [] with cube should return []', () => {
        expect(map([],i => i**3)).toEqual([]);
    });

    it('Mappping [1,2,3] with cube should return cube of [1,2,3]', () => {
        expect(map([1,2,3],i => i**3)).toEqual([1,8,27]);
    });

    it('Mappping [1,2,3] with Identity should return [1,2,3]', () => {
        expect(map([1,2,3],i => i)).toEqual([1,2,3]);
    });

    it('Mapping [a{x : 10}] with someObject => someObject.x + 1 should return 11', () => {
        expect(map([{x : 10}], i => i.x + 1)).toEqual([11]);
    });
})
