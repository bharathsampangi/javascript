// let user = {};

// let key = 'likes birds'

// user[key] = true

// alert(user[key])

// let user = {
//     name: "John",
//     age: 30
// }

// let key = prompt('What do you want to know about the user?', "name")

// alert(user[key])

// let fruit = prompt('Which fruit to buy?', 'apple');

// let bag = {
//     [fruit]: 5
// };

// alert(bag.apple)

// let user = { name: "John", age: 30 };

// alert("age" in user);
// alert("blabla" in user)

//for...in loop

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// }

// for(let key in user) {
//     alert(user[key])
// }

// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     "1": "USA"
// }

// for(let code in codes) {
//     alert(code)
// }

// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     "+1": "USA"
// };

// for(let code in codes) {
//     alert(+code);
// }

// let user = { name: 'John' };

// let admin = user;

// admin.name = 'Pete'

// alert(user.name)

// let user = {
//     name: 'John',
//     age: 30
// };

// let clone = {};

// for(let key in user) {
//     clone[key] = user[key]
// }

// clone.name = 'Pete';

// alert(user.name)

// let user = {name: 'John'};

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true }

// Object.assign(user, permissions1, permissions2)

// console.log(user)

// const user = {name: "John"};

// Object.assign(user, {name: 'Pete', isAdmin: true});

// console.log(user);

// let user = {
//     name: 'john',
//     age: 30
// };

// let clone = Object.assign({}, user);

// console.log(clone)

// let user = {
//     name: 'John',
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };

// let clone = Object.assign({}, user);

// alert(user.sizes === clone.sizes);

// user.sizes.width++;
// alert(clone.sizes.width);

// const user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// function isEmpty(obj) {
//     for(let key in obj)
//         return false;
//     return true;
// }

// let schedule = {};

// alert(isEmpty(schedule));

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule));

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// let sum = 0;
// for(let salary in salaries) {
//     sum = sum + salaries[salary]
// }
// console.log(sum)

// const menu = {
//     width: 200,
//     height: 300,
//     title: "My Menu"
// };

// multiplyNumeric(menu);

// function multiplyNumeric(obj) {
//     for(let key in obj) {
//         if(typeof obj[key] === 'number') {
//             obj[key] = obj[key] * 2;
//         }
//     }
// }

// console.log(menu);

// Symbols

// const id1 = Symbol('id');
// const id2 = Symbol('id')

// console.log(id1 == id2)

// const user = {
//     name: "John"
// };

// let id = Symbol("id");

// user[id] = 1;

// alert(user[id])
// console.log(user)

// let id = Symbol('id')

// const user = {
//     name: "John",
//     age: 30,
//     [id]: 'I am the man'
// }

// for(let key in user) {
//     console.log(key)
// }

// console.log('Direct', user[id])

// let id = Symbol.for('id')

// let idAgain = Symbol.for('id')

// alert(id === idAgain)

// let sym = Symbol.for('name');
// let sym2 = Symbol.for('id');

// alert(Symbol.keyFor(sym));
// alert(Symbol.keyFor(sym2))

// let globalSymbol = Symbol.for('name');
// let localSymbol = Symbol('name');

// alert(Symbol.keyFor(globalSymbol));
// alert(Symbol.keyFor(localSymbol));

// alert(localSymbol.description)

// this - keyword

// let user = {
//     name: 'John',
//     age: 30,

//     sayHi() {
//         alert(this.name)
//     }
// }

// user.sayHi()

// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         alert(user.name);
//     }
// }

// let admin = user;
// user = null;

// admin.sayHi()

// let user= { name: 'John' };
// let admin = { name: 'Admin' };

// function sayHi() {
//     alert(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();

// admin['f']()

// let user = {
//     name: 'John',
//     hi() { alert(this.name) },
//     bye() { alert('Bye'); }
// }

// user.hi()

// (user.name == 'John' ? user.hi : user.bye)()

// let user = {
//     name: 'John',
//     go: function() {
//         alert(this.name)
//     }
// };

// (user.go)()

// function makeUser() {
//     return {
//         name: 'John',
//         ref() {
//             return this;
//         }
//     }
// }

// let user = makeUser();
// console.log(user.ref().name);

// const calculator = {
//     read() {
//         let x = prompt('Enter a value for x', '');
//         this.x = +x;
//         let y = prompt('Enter a value for y', '');
//         this.y = +y;
//     },
//     sum() {
//         return this.x + this.y;
//     },
//     mul() {
//         return this.x * this.y;
//     }
// }

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// const ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         alert(this.step)
//         return this;
//     }
// }

// ladder.up().up().down().showStep()

// const user = {
//     name: 'John',
//     money: 1000,

//     [Symbol.toPrimitive](hint) {
//         alert(`hint: ${hint}`);
//         return hint == 'string' ? `{name: "${this.name}"}` : this.money;
//     }
// }

// alert(user);
// alert(+user);
// alert(user + 500);

// const user = {
//     name: "John",
//     money: 1000,
//     toString() {
//         return `{name: "${this.name}"}`;
//     },
//     valueOf() {
//         return this.money
//     }
// }

// alert(user);
// alert(+user);
// alert(user + 500);

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User('Jack');

// alert(user.name);
// alert(user.isAdmin)

// function User(name) {
//     this.name = name;

//     this.sayHi = function() {
//         alert("My name is: "+ this.name);
//     }
// }

// const john = new User('John');

// john.sayHi()

// function Calculator() {
//     this.read = function() {
//         this.x = +prompt('Enter a value for x', '');
//         this.y = +prompt('Enter a value for y', '');
//     }
//     this.sum = function() {
//         return this.x + this.y
//     }
//     this.mul = function() {
//         return this.x * this.y
//     }
// }

// let calculator = new Calculator();
// calculator.read();

// alert('Sum='+ calculator.sum());
// alert('Mul='+ calculator.mul());

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        let val = +prompt('Enter a value', '')
        this.value = this.value + val
    }
}

let accumulator = new Accumulator(1)

accumulator.read()
accumulator.read()

alert(accumulator.value)