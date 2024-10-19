// class User {
//     constructor(name) {
//         this.name = name
//     }

//     sayHi() {
//         alert(this.name)
//     }
// }

// let user = new User('John')
// user.sayHi()

// class User {
//     constructor(name) {
//         this.name = name
//     }
//     sayHi() {
//         alert(this.name)
//     }
// }

// alert(typeof User)

// alert(User = User.prototype.constructor)

// alert(User.prototype.sayHi)

// alert(Object.getOwnPropertyNames(User.prototype))

// function User(name) {
//     this.name = name
// }

// User.prototype.sayHi = function() {
//     alert(this.name)
// }

// let user = new User('John')
// user.sayHi()

// let User = class {
//     sayHi() {
//         alert('Hello!')
//     }
// }

// let user = new User()
// alert(user.sayHi())

// let User = class MyClass {
//     sayHi() {
//         alert(MyClass)
//     }
// }

// new User().sayHi()

// function makeClass(phrase) {
//     return class {
//         sayHi() {
//             alert(phrase)
//         }
//     }
// }

// let User = makeClass('Hello')

// new User().sayHi()

// class User {
//     constructor(name) {
//         this.name = name
//     }

//     get name() {
//         return this._name
//     }

//     set name(value) {
//         if(value.length < 4) {
//             alert('Name is too short!')
//             return
//         }
//         this._name = value
//     }
// }

// let user = new User('Bharath')
// user.name = 'I am Alive'
// alert(user.name)

// class Animal {
//     constructor(name) {
//         this.speed = 0
//         this.name = name
//     }
//     run(speed) {
//         this.speed += speed
//         alert(`${this.name} runs with speed ${this.speed}`)
//     }
//     stop() {
//         this.speed = 0
//         alert(`${this.name} stands still`)
//     }
// }

// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} hides!`)
//     }
// }

// let rabbit = new Rabbit('White Rabbit')

// rabbit.run(5)
// rabbit.hide()

// class Animal {
//     constructor(name) {
//         this.speed = 0
//         this.name = name
//     }

//     run(speed) {
//         this.speed += speed
//         alert(`${this.name} runs with speed ${this.speed}`)
//     }
    
//     stop() {
//         this.speed = 0
//         alert(`${this.name} stands still`)
//     }
// }

// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} hides!`)
//     }

//     stop() {
//         super.stop()
//         this.hide()
//     }
// }

// let rabbit = new Rabbit('White Rabbit')

// rabbit.run(5)
// rabbit.stop()

// class Animal {
//     constructor(name) {
//         this.speed = 0
//         this.name = name
//     }
// }

// class Rabbit extends Animal {
//     constructor(name, earLength) {
//         super(name)
//         this.earLength = earLength
//     }
// }

// let rabbit = new Rabbit('White Rabbit', 10)
// alert(rabbit.name)
// alert(rabbit.earLength)

// let animal = {
//     name: 'Animal',
//     eat() {
//         alert(`${this.name} eats`)
//     }
// }

// let rabbit = {
//     __proto__: animal,
//     name: 'Rabbit',
//     eat() {
//         this.__proto__.eat.call(this)
//     }
// }

// rabbit.eat()

// let animal = {
//     name: 'Animal',
//     eat() {
//         alert(`${this.name} eats.`)
//     }
// }

// let rabbit = {
//     __proto__: animal,
//     name: 'Rabbit',
//     eat() {
//         super.eat()
//     }
// }

// let longEar = {
//     __proto__: rabbit,
//     name: 'Long Ear',
//     eat() {
//         super.eat()
//     }
// }

// longEar.eat()

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
// }

// class Rabbit extends Animal {
//     constructor(name) {
//         super(name)
//         this.created = Date.now()
//     }
// }

// let rabbit = new Rabbit('White Rabbit')
// alert(rabbit.name)

// class User {
//     static staticMethod() {
//         alert(this === User)
//     }
// }

// User.staticMethod()

// class Article {
//     constructor(title, date) {
//         this.title = title
//         this.date = date
//     }
    
//     static compare(articleA, articleB) {
//         return articleA.date - articleB.date
//     }
// }

// let articles = [
//     new Article('HTML', new Date(2019, 1, 1)),
//     new Article('CSS', new Date(2019, 0, 1)),
//     new Article('JavaScript', new Date(2019, 11, 1))
// ]

// articles.sort(Article.compare)

// alert(articles[0].title)

// class Article {
//     constructor(title, date) {
//         this.title = title
//         this.date = date
//     }

//     static createTodays() {
//         return new this(`Today's digest`, new Date())
//     }
// }

// let article = Article.createTodays()

// alert(article.title)

// class CoffeeMachine {
//     #waterLimit = 200;

//     #checkWater(value) {
//         if(value < 0) throw new Error("Negative water")
//         if(value > this.#waterLimit) throw new Error('Too much water')
//     }
// }

// let coffeeMachine = new CoffeeMachine()

// coffeeMachine.#checkWater() - Not Accessible from Outside

// class CoffeeMachine {
//     #waterAmount = 0

//     get waterAmount() {
//         return this.#waterAmount
//     }

//     set waterAmount(value) {
//         if(value < 0) throw new Error('Negative water')
//         this.#waterAmount = value
//     }
// }

// let machine = new CoffeeMachine()

// machine.waterAmount = 100
// alert(machine.waterAmount)
// alert(machine.#waterAmount)

// let sayHiMixin = {
//     sayHi() {
//         alert(`Hello ${this.name}`)
//     },
//     sayBye() {
//         alert(`Bye ${this.name}`)
//     }
// }

// class User {
//     constructor(name) {
//         this.name = name
//     }
// }

// Object.assign(User.prototype, sayHiMixin)

// new User('Dude').sayHi()

let sayMixin = {
    say(phrase) {
        alert(phrase)
    }
}

let sayHiMixin = {
    __proto__:  sayMixin,
    sayHi() {
        super.say(`Hello ${this.name}`)
    },
    sayBye() {
        super.say(`Bye ${this.name}`)
    }
}

class User {
    constructor(name) {
        this.name = name
    }
}

Object.assign(User.prototype, sayHiMixin)

new User('Dude').sayHi()