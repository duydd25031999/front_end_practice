var obj1 = {name : 'Duy'};
var obj2 = {...obj1};
obj1.name = "Duy 2";

var count = 0
var total = 0
var arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function(item) {
    if(count < 4) {
        total += item
        count++
    }
})
// console.log(total)

total = 0
for(var key in arr) {
    var value = arr[key]
    // console.log('key', key)
    // console.log('value', value)
}

var a = 7
/**
 * @param {Array} arr 
 * @param {*} a 
 */
function checkExit(arr, a) {
    // var temp = arr.filter(function(item) {
    //     return item === a;
    // })

    // return temp.length > 0;

    var check = false;
    arr.forEach(function(item) {
        if(item === a) {
            check = true;
        }
    });
    return check;
}

console.log(checkExit(arr, a));