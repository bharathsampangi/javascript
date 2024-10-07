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