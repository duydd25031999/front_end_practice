(function() {
    var num = 2;
    foo();
    function foo() {
        console.log(num);
        var num = 1;
    }
})

var Human = function(name) {
    this.name = name;
}

Human.prototype.sayHello = function() {
    console.log("Hello, I'm " + this.name);
}

Human.prototype.goRage = function() {
    console.log("goRage");
}

var p1 = new Human('p1');
var p2 = new Human('p2');

p1.sayHello();
p2.sayHello();
p1.goRage();

console.log(p1.hasOwnProperty('name'));
console.log(p1.hasOwnProperty('goRage'));
console.log(p1.hasOwnProperty('hasOwnProperty'));

console.log(Object.getPrototypeOf(p1));
console.log(p1);

var cat = {
    name: 'Lucifer',
    run: function() {
        console.log(this.name + " runs");
    },
    eat: function(food) {
        console.log(this.name + " eats " + food);
    }
}

// var dog = {
//     name: 'Charlie'
// }

// cat.run();
// cat.run.call(dog);
// cat.eat.call(dog, 'food');

// var dog = Object.create(cat);
// dog.name = 'Charlie';
// console.log(dog);
console.log(Object.getPrototypeOf(cat));

var SuperHero = function(name, alias, power) {
    Human.call(this, name);
    this.alias = alias;
    this.power = power;
}

SuperHero.prototype = Object.create(Human.prototype);
SuperHero.prototype.constructor = SuperHero;

SuperHero.prototype.sayHello = function() {
    console.log("Hello, I'm " + this.alias);
}

var s1 = new SuperHero('p1', 'a1', 'pow1');
console.log(s1 instanceof SuperHero);
console.log(s1 instanceof Human);
s1.sayHello();

var newPerson = function(name) {
    var _name = name;
    var methods = {
        getName() {                 //mỗi lần gọi newPerson() lại khởi tạo function 
            return _name;           //tốn bôj nhớ
        },
        setName(name) {
            _name = name;
        },
        sayHello() {
            console.log('Hello, I\'m ' + _name);
        }
    }

    return methods
}

var p1 = {
    name : "Duy"
}
function sayHello(company, message) {
    console.log('Hello I\'m ' + this.name + " , " + company + " company. " + message);
}
sayHello.call(p1, 'IMPL', 'Nice to meet you!'); //Hello I'm  Duy, IMPL company. Nice to meet you!