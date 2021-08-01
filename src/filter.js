const filter = (array,func) => {
    return array.filter(item => func(item));   
}
module.exports = filter;
