const tail = require('./tail');

describe('Tail', () => {

    it('Tail of [1,2,3] should return everything except 1', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });

    it('Tail of [] should be []', () => {
        expect(tail([])).toEqual([]);
    });
})
