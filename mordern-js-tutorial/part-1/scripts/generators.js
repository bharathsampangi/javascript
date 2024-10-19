// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
// }

// let generator = generateSequence()

// let one = generator.next()

// alert(JSON.stringify(one))

// let two = generator.next()

// alert(JSON.stringify(two))

// let three = generator.next()

// alert(JSON.stringify(three))

// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
// }

// let generator = generateSequence()

// for(let value of generator) {
//     alert(value)
// }

// function* generateSequence() {
//     yield 1
//     yield 2
//     yield 3
// }

// let generator = generateSequence()

// for(let value of generator) {
//     alert(value)
// }

// function* generateSequence(start, end) {
//     for(let i=start; i <= end; i++) 
//         yield i
// }

// function* generatePasswordCodes() {
//     // 0...7
//     yield* generateSequence(48, 57)

//     // A...Z
//     yield* generateSequence(65, 90)

//     // a...z
//     yield* generateSequence(97, 122)
// }

// let str = ''

// for(let code of generatePasswordCodes()){
//     str += String.fromCharCode(code)
// }

// alert(str)

// function *gen() {
//     let result = yield "2 + 2 = ?"

//     alert(result)
// }

// let generator = gen()

// let question = generator.next().value

// generator.next(4)

// function* gen() {
//     let ask1 = yield '2 + 2 = ?'

//     alert(ask1)

//     let ask2 = yield '3 * 3 = ?'

//     alert(ask2)
// }

// let generator = gen()

// alert(generator.next().value)

// alert(generator.next(4).value)

// alert(generator.next(9).done)

// function *gen() {
//     try {
//         let result = yield '2 + 2 = ?'
//         alert('The execution does not reach here, because the exception is thrown above')
//     } catch(e) {
//         alert(e)
//     }
// }

// let generator = gen()

// let question = generator.next().value

// generator.throw(new Error('The answer is not found in my database'))

function* generate() {
    let result = yield '2 + 2 = ?'
}

let generator = generate()

let question = generator.next().value

try {
    generator.throw(new Error('The answer is not found in my database'))
} catch(e) {
    alert(e)
}