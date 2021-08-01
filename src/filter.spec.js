const filter = require('./filter');

describe('filter', () => {

    it('Filter [] for x=>true should return []', () => {
        expect(filter([],(i)=>true)).toEqual([]);
    });

    it('Filter [1,2,3] for x=>true should return [1,2,3]', () => {
        expect(filter([1,2,3],(i)=>true)).toEqual([1,2,3]);
    });

    it('filter [1,2,3] for x=>false should return []', () => {
        expect(filter([1,2,3],(i)=>false)).toEqual([]);
    });

    it('filter [1,2,3] for x=>x>1 should return [2,3]', () => {
        expect(filter([1,2,3],(i)=>i>1)).toEqual([2,3]);
    });

    it('Filter [a,B,c,D] for filterUpperCase should return [B,D]', () => {
        expect(filter(["a","B","c","D"],(i)=>{
            if(i===i.toUpperCase()){
                return i;
            }
        })).toEqual(["B","D"]);
    });
})
