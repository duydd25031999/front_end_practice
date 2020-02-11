// var obj1 = {name : 'Duy'};
// var obj2 = {...obj1};
// obj1.name = "Duy 2";

// var count = 0
// var total = 0
// var arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(function(item) {
//     if(count < 4) {
//         total += item
//         count++
//     }
// })
// // console.log(total)

// total = 0
// for(var key in arr) {
//     var value = arr[key]
//     // console.log('key', key)
//     // console.log('value', value)
// }

// var a = 7
// /**
//  * @param {Array} arr 
//  * @param {*} a 
//  */
// function checkExit(arr, a) {
//     // var temp = arr.filter(function(item) {
//     //     return item === a;
//     // })

//     // return temp.length > 0;

//     var check = false;
//     arr.forEach(function(item) {
//         if(item === a) {
//             check = true;
//         }
//     });
//     return check;
// }

// console.log(checkExit(arr, a));

// const a = {
//     name: 'htm',
//     showInfor: function() {
//         var content = this
//         setTimeout(function() {
//             console.log(content.name);
//         }, 2000);
//     }
// }

// a.showInfor();
// var a = {
//     name: "Duy",
//     age: 21,
//     showInfor: function() {
//         console.log(this); // 'this' thay thế  cho a
//     }
// }
// var a = Person("Duy", 21);


// var a = {
//     func: function() {
//         function func2() {
//             console.log(this); // 'this' thay thế  cho 'Window'
//         }
//         func2();
//     }
// }
function handleForEach
arr.forEach(handleForEach)

/**
 * 
 * @param {Array} arrParam 
 */
var biggestNumber = function(arrParam) {
    var arr = arrParam.filter(function(item) {
        return typeof item === 'number';
    })
    if(!arr.length) {
        return;
    }
    var max = arr[0];
    arr.forEach(function(item) {
        if(typeof item !== 'number') {
            return;
        }
        if(item > max) {
            max = item;
        }
    });
    return max;
}

var arr = ['1', '2', '3'];
console.log(biggestNumber(arr));

var max = arr[0];
for(var i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i];
    }
}

// return max

for(var i in arr) {

}