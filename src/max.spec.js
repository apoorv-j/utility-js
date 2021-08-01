const max = require("./max");

describe('max', ()=>{
    it('max of [1,2,3,4] should be 0',() => {
        expect(max([1,2,3,4])).toEqual(4);
    });
});