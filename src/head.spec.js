const head = require('./head');

describe('Head', () => {

    it('Head of [1,2,3] should be 1', () => {
        expect(head([1,2,3])).toEqual(1);
    });

    it('Head of [] should be null', () => {
        expect(head([])).toEqual(null);
    });
})
