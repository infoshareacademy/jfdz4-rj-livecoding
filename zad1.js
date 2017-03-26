// map, filter, reduce, find,  slice, splice

var tab1 = [1,2,3,4,5];

var tab2 = tab1.map(function(element, index, arr){
    return arr[ index+1 ] - element;
});
// [ 1, 1, 1, 1, NaN]


console.log(tab2);