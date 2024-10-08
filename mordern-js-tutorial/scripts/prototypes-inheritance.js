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

// let animal = {
//     jumps: null
// };

// let rabbit = {
//     __proto__: animal,
//     jumps: true
// }

// alert(rabbit.jumps)

// delete rabbit.jumps

// alert(rabbit.jumps)

// delete animal.jumps

// alert(rabbit.jumps)

// let head = {
//     glasses: 1
// }

// let table = {
//     pen: 3,
//     __proto__: head
// }

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// }

// let pockets = {
//     money: 2000,
//     __proto__: bed
// }

// alert(pockets.pen)
// alert(bed.glasses)

// let hamster = {
//     eat(food) {
//         this.stomach.push(food)
//     }
// }

// let speedy = {
//     stomach: [],
//     __proto__: hamster
// }

// let lazy = {
//     stomach: [],
//     __proto__: hamster
// }

// speedy.eat('apple')

// alert(speedy.stomach)

// alert(lazy.stomach)

// let hamster = {
//     stomach: [],

//     eat(food) {
//         this.stomach = [food]
//     }
// }

// let speedy = {
//     __proto__: hamster
// }

// let lazy = {
//     __proto__: hamster
// }

// speedy.eat('apple')

// alert(speedy.stomach)

// alert(lazy.stomach)

// let animal = {
//     eats: true
// };

// function Rabbit(name) {
//     this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit('White Rabbit');

// alert(rabbit.eats)

// function Rabbit() {}

// alert(Rabbit.prototype.constructor == Rabbit)

// function Rabbit() {}

// let rabbit = new Rabbit()

// alert(rabbit.constructor == Rabbit)

// function Rabbit(name) {
//     this.name = name;
//     alert(name)
// }

// let rabbit = new Rabbit('White Rabbit')

// let rabbit2 = new rabbit.constructor('Black Rabbit')

// function Rabbit() {}

// Rabbit.prototype = {
//     jumps: true
// }

// let rabbit = new Rabbit()

// alert(rabbit.constructor === Rabbit)

// function Rabbit() {}

// Rabbit.prototype.jumps = true

// let arr = [1, 2, 3]

// alert(arr.__proto__ === Array.prototype)

// alert(arr.__proto__.__proto__ === Object.prototype)

// alert(arr.__proto__.__proto__.__proto__)

// let arr = [1, 2, 3]

// alert(arr)

// function f() {}

// alert(f.__proto__ == Function.prototype)

// alert(f.__proto__.__proto__ == Object.prototype)

// String.prototype.show = function() {
//     alert(this)
// }

// 'BOOM!'.show()

// if(!String.prototype.repeat) {
//     String.prototype.repeat = function(n) {
//         return new Array(n+1).join(this)
//     }
// }

// alert('La'.repeat(3))

// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms)
// }

// function f() {
//     alert('Hello!')
// }

// f.defer(1000)

// Function.prototype.defer = function(ms) {
//     let f = this
//     return function(...args) {
//         setTimeout(() => {
//             f.apply(this, args)
//         }, ms)
//     }
// }

// function f(a, b) {
//     alert(a + b)
// }

// f.defer(1000)(1, 2)

// let animal = {
//     eats: true
// }

// let rabbit = Object.create(animal)

// alert(rabbit.eats)

// alert(Object.getPrototypeOf(rabbit) === animal)

// Object.setPrototypeOf(rabbit, {})

// alert(rabbit.eats)

// let animal = {
//     eats: true
// }

// let rabbit = Object.create(animal, {
//     jumps: {
//         value: true
//     }
// })

// alert(rabbit.jumps)

// let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))

let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join()
        }
    }
})

dictionary.apple = 'Apple'
dictionary.__proto__ = 'test'

for(let key in dictionary) {
    alert(key)
}

alert(dictionary)