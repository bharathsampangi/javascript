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