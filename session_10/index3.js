// var newPerson = function(name) {
//     var _name = name;
//     return {
//         setName: function(name) {
//             _name = name;
//         },
//         getName: function() {
//             return _name;
//         },
//         sayHi: function() {
//             console.log('Hi, I\'m ' + _name);
//         }
//     }
// }

// var person1 = newPerson('Person 1');
// person1.sayHi();

// var person2 = newPerson('Person 2');
// person2.sayHi();

// const singleton = (function() {
//     var _incrementor = 0;
//     return {
//         get: function() {
//             return "Incrementor = " + _incrementor;
//         },
//         increment: function() {
//             _incrementor++;
//         }
//     };
// }());

// console.log(singleton.get());
// singleton.increment();
// console.log(singleton.get());

var users = [
    {
        id: 'a1',
        name: 'Duy',
        age: 24
    },
    {
        id: 'a2',
        name: 'Duy',
        age: 24
    },
    {
        id: 'a3',
        name: 'Duy',
        age: 24
    },
    {
        id: 'a4',
        name: 'Duy',
        age: 24
    }
]

var mergeItem = function(obj, item){
    obj[item.id] = item;
    return obj;
}

// normalization
var usersById = users.reduce(mergeItem, {});

console.log('usersById', usersById);

usersById['a2'].name = "Duy 2";
console.log('user a2', users[1]);
