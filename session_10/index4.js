let arr = [1,2,3,4,5,6,7,8,9];
let arr2 = arr.forEach((item, index) => {
    return arr[index] = item*2;
})

console.log('arr', arr);
console.log('arr2', arr2);
