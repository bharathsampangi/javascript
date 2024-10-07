// let user = {
//     name: 'John'
// }

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name')

// alert(JSON.stringify(descriptor, null, 2))

// let user = {}

// Object.defineProperty(user, 'name', { value: 'John' });

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// alert(JSON.stringify(descriptor, null, 2))

// user.name = 'Nemo';

// let descriptor1 = Object.getOwnPropertyDescriptor(user, 'name')

// alert(JSON.stringify(descriptor1, null, 2))

// let user = {
//     name: 'John',
//     toString() {
//         return this.name
//     }
// }

// for(let key in user) alert(key)

// let user = {
//     name: 'John',
//     toString() {
//         return this.name;
//     }
// }

// Object.defineProperty(user, 'toString', {
//     enumerable: false
// })

// for(let key in user) alert(key)

// alert(Object.keys(user))

// let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

// alert(JSON.stringify(descriptor, null, 2))

// let user = {}

// Object.defineProperty(user, 'name', {
//     value: 'John',
//     writable: false,
//     configurable: false
// })

// Object.defineProperty(user, 'name', {
//     writable: true
// })

// let user = {}

// Object.defineProperties(user, {
//     name: { value: 'John', writable: false },
//     surname: { value: 'Smith', writable: false }
// })

// let descriptor = Object.getOwnPropertyDescriptors(user)

// alert(JSON.stringify(descriptor, null, 2))

// let user = {}

// Object.defineProperties(user, {
//     name: { value: 'John', writable: false },
//     surname: { value: 'Smith', writable: false }
// })

// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user))

// let descriptor = Object.getOwnPropertyDescriptors(clone)

// alert(JSON.stringify(descriptor, null, 2))

// let user = {
//     name: 'John',
//     surname: 'Smith',

//     get fullName() {
//         return `${this.name} ${this.surname}`
//     }
// }

// alert(user.fullName)

// let user = {
//     name: 'John',
//     surname: 'Smith',

//     get fullName() {
//         return `${this.name} ${this.surname}`
//     },

//     set fullName(value) {
//         [this.name, this.surname] = value.split(' ')
//     }
// }

// user.fullName = 'Alice Cooper'
// alert(user.name)
// alert(user.surname)

// let user = {
//     name: 'John',
//     surname: 'Smith'
// }

// Object.defineProperty(user, 'fullName', {
//     get() {
//         return `${this.name} ${this.surname}`
//     },

//     set(value) {
//         [this.name, this.surname] = value.split(' ')
//     }
// })

// alert(user.fullName)

// for(let key in user) alert(key)

// let user = {
//     get name() {
//         return this._name
//     },
//     set name(value) {
//         if(value.length < 4) {
//             alert('Name is too short, need at least 4 characters');
//             return;
//         }
//         this._name = value
//     }
// }

// user.name = 'Pete'
// alert(user.name)

// user.name = ''
// alert(user.name)

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let john = new User('John', 25)

// alert(john.age)

// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;

//     Object.defineProperty(this, 'age', {
//         get() {
//             let todayYear = new Date().getFullYear()
//             return todayYear - this.birthday.getFullYear()
//         }
//     })
// }

// let john = new User('John', new Date(1992, 6, 1));

// alert(john.birthday)
// alert(john.age)

// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal

// alert(rabbit.eats)
// alert(rabbit.jumps)

// let animal = {
//     eats: true,
//     walk() {
//         alert('Animal walk');
//     }
// }

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// }

// rabbit.walk()

// let animal = {
//     eats: true,
//     walk() {
//         alert('Animal walk')
//     }
// }

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// }

// let longEar = {
//     earLength: 10,
//     __proto__: rabbit
// }

// longEar.walk()
// alert(longEar.jumps)

// let animal = {
//     eats: true,
//     walk() {
//         alert('I am from Prototype')
//     }
// }

// let rabbit = {
//     __proto__: animal
// }

// rabbit.walk = function() {
//     alert('Rabbit! Bounce-bounce!')
// }

// rabbit.walk()
// animal.walk()

// let user = {
//     name: 'John',
//     surname: 'Smith',

//     set fullName(value) {
//         [this.name, this.surname] = value.split(' ')
//     },

//     get fullName() {
//         return `${this.name} ${this.surname}`
//     }
// }

// let admin = {
//     __proto__: user,
//     isAdmin: true
// }

// alert(admin.fullName)

// admin.fullName = 'Alice Cooper';

// alert(admin.fullName)

// let animal = {
//     walk() {
//         if(!this.isSleeping) {
//             alert('I walk')
//         }
//     },
//     sleep() {
//         this.isSleeping = true;
//     }
// }

// let rabbit = {
//     name: 'White Rabbit',
//     __proto__: animal
// }

// rabbit.sleep()

// alert(rabbit.isSleeping)
// alert(animal.isSleeping)

// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// }

// alert(Object.keys(rabbit))

// for(let prop in rabbit) alert(prop)

// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// }

// for(let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop)

//     if(isOwn) {
//         alert(`Our: ${prop}`)
//     } else {
//         alert(`Inherited ${prop}`)
//     }
// }