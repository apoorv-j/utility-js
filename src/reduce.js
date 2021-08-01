const reduce = (array,func,initial) => {

    if(initial == null && array.length == 0)
        return undefined;
    
    if(initial != null)
        return array.reduce(func,initial);   
    
    return array.reduce(func);
}
module.exports = reduce;
