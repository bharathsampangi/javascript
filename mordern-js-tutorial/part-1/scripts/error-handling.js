// try {
//     alert('Start of try runs')

//     lalala

//     alert('End of try (never reached)')
// } catch(err) {
//     alert('Error has occured!')
// }

// let json = '{ bad json }'

// try {
//     let user = JSON.parse(json)
//     alert(user.name)
// } catch(e) {
//     alert('Our apologies, the data has errors. We will try to request it one more time')
//     alert(e.name)
//     alert(e.message)
// }

// let json = '{"age": 30}'

// try {
//     let user = JSON.parse(json)

//     if(!user.name) {
//         throw new SyntaxError('Incomplete data: no name')
//     }
// } catch(e) {
//     alert('JSON Error: '+ e.message)
// }

// let json = '{"age": 30}'

// try {
//     let user = JSON.parse(json)

//     if(!user.name) {
//         throw new SyntaxError('Incomplete data: no name')
//     }

//     blabla()

//     alert(user.name)
// } catch(e) {

//     if(e.name == 'SyntaxError') {
//         alert('JSON Error: '+ e,message)
//     } else {
//         throw e
//     }

// }

// function readData() {
//     let json = '{"age": 30}'

//     try {
//         blabla()
//     } catch(e) {
//         if(e.name != 'SyntaxError') {
//             throw e
//         }
//     }
// }

// try {
//     readData()
// } catch(e) {
//     alert('External catch got: '+ e)
// }

// let num = +prompt('Enter a positive integer number?', 35)

// let diff, result 

// function fib(n) {
//     if(n < 0 || Math.trunc(n) != n) {
//         throw new Error('Must not be a negative, and also an integer')
//     }
//     return n <= 1 ? n : fib(n-1) + fib(n-2)
// }

// let start = Date.now()

// try {
//     result = fib(num)
// } catch(e) {
//     result = 0
// } finally {
//     diff = Date.now() - start
// }

// alert(result || 'error occured')

// alert(`execution took ${diff}ms`)

// window.onerror = function(message, url, line, col, error) {
//     alert(`${message}\n At ${line}:${col} of ${url}`)
// }

// function readData() {
//     badFunc()
// }

// readData()

// class ValidationError extends Error {
//     constructor(message) {
//         super(message)
//         this.name = 'ValidationError'
//     }
// }

// function test() {
//     throw new ValidationError('Whoops!')
// }

// try {
//     test()
// } catch(err) {
//     alert(err.message)
//     alert(err.name)
//     alert(err.stack)
// }

class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = 'ValidationError'
    }
}

function readUser(json) {
    let user = JSON.parse(json)

    if(!user.age) {
        throw new ValidationError('No field: age')
    }

    if(!user.name) {
        throw new ValidationError('No field: name')
    }

    return user
}

try {
    let user = readUser('{ "age": 25 }')
} catch(err) {
    if(err instanceof ValidationError) {
        alert('Invalid data: '+ err.message)
    } else if (err instanceof SyntaxError) {
        alert('JSON Syntax Error: '+ err.message)
    } else {
        throw err
    }
}