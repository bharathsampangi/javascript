// let target = {}

// let proxy = new Proxy(target, {})

// proxy.test = 5
// alert(target.test)

// alert(proxy.test)

// for(let key in proxy) {
//     alert(key)
// }

// let numbers = [0, 1, 2]

// numbers = new Proxy(numbers, {
//     get(target, prop) {
//         if(prop in target){
//             return target[prop]
//         } else {
//             return 0
//         }
//     }
// })

// alert(numbers[1])
// alert(numbers[123])

// let dictionary = {
//     'Hello': 'Hola',
//     'Bye': 'Adios'
// }

// dictionary = new Proxy(dictionary, {
//     get(target, phrase) {
//         if(phrase in target) {
//             return target[phrase]
//         } else {
//             return phrase
//         }
//     }
// })

// alert(dictionary['Hello'])

// alert(dictionary['Welcome to Proxy'])

// let numbers = []

// numbers = new Proxy(numbers, {
//     set(target, prop, val) {
//         if(typeof val == 'number') {
//             target[prop] = val
//             return true
//         } else {
//             return false
//         }
//     }
// })

// numbers.push(1)
// numbers.push(2)

// alert("Length is: "+ numbers.length)

// numbers.push("test")

// alert("This line is never reached (error in the line above)")

// let user = {
//     name: 'John',
//     age: 30,
//     _password: "***"
// }

// user = new Proxy(user, {
//     ownKeys(target) {
//         return Object.keys(target).filter(key => !key.startsWith('_'))
//     }
// })

// for(let key in user) alert(key)

// alert(Object.keys(user))

// alert(Object.values(user))

// let user = {}

// user = new Proxy(user, {
//     ownKeys(target) {
//         return ['a', 'b', 'c']
//     }
// })

// alert(Object.keys(user))

// let user = {}

// user = new Proxy(user, {
//     ownKeys(target) {
//         return ['a', 'b', 'c']
//     },

//     getOwnPropertyDescriptor(target, prop) {
//         return {
//             enumerable: true,
//             configurable: true
//         }
//     }
// })

// alert(Object.keys(user))

// let user = {
//     name: 'John',
//     _password: '***'
// }

// user = new Proxy(user, {
//     get(target, prop) {
//         if(prop.startsWith('_')) {
//             throw new Error('Access Denied')
//         }
//         let value = target[prop]
//         return (typeof value === 'function') ? value.bind(target) : value
//     },
//     set(target, prop, val) {
//         if(prop.startsWith('_')) {
//             throw new Error('Access Denied')
//         } else {
//             target[prop] = val
//             return true
//         }
//     },
//     deleteProperty(target, prop) {
//         if(prop.startsWith('_')) {
//             throw new Error('Access Denied')
//         } else {
//             delete target[prop]
//             return true
//         }
//     },
//     ownKeys(target) {
//         return Object.keys(target).filter(key => !key.startsWith('_'))
//     }
// })

// try {
//     alert(user._password)
// } catch(e) {
//     alert(e.message)
// }

// try {
//     user._password = 'test'
// } catch(e) {
//     alert(e.message)
// }

// try {
//     delete user._password
// } catch(e) {
//     alert(e.message)
// }

// for(let key in user) alert(key)

// let range = {
//     start: 1,
//     end: 10
// }

// range = new Proxy(range, {
//     has(target, prop) {
//         return prop >= target.start && prop <= target.end
//     }
// })

// alert(5 in range)
// alert(50 in range)

// let code = 'alert("Hello")'

// eval(code)

// let value = eval('1+1')
// alert(value)

// let value = eval('let i=0; ++i')
// alert(value)

// let a = 1;

// function f() {
//     let a = 2

//     eval('alert(a)')
// }

// f()

// Currying

function curry(f) {
    return function(a) {
        return function(b) {
            return f(a, b)
        }
    }
}

function sum(a, b) {
    return a + b
}

let curriedSum = curry(sum)

alert(curriedSum(1)(2))