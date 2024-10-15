// function loadScript(src, callback) {
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => callback(script)
//     document.head.append(script)
// }

// loadScript('/sample/sample.js', script => {
//     console.log(`Cool, the script ${script.src} is loaded`)
// })

// loadScript('/sample/sample.js', function() {
//     loadScript('/sample/sample2.js', function() {
//         loadScript('/sample/sample3.js', function() {
//             console.log('Completed')
//         })
//     })
// })

// function loadScript(src, callback) {
//     let script = document.createElement('script')
//     script.src = src

//     script.onload = () => callback(null, script)
//     script.onerror = () => callback(new Error(`Script load error for $[src]`))

//     document.head.append(script)
// }

// loadScript('/sample/sample.js', function(error, script) {
//     if(error) {
//         alert('Error')
//     } else {
//         alert('Script loaded successfully')
//     }
// })

// function handleError(error) {
//     alert('Error', error.message)
// }

// function loadScript(src, callback) {
//     let script = document.createElement('script')
//     script.src = src

//     script.onload = () => callback(null, script)
//     script.onerror = () => callback(new Error(`Script load error for $[src]`))

//     document.head.append(script)
// }

// loadScript('/sample/sample.js', function(error, script) {
//     if(error) {
//         handleError(error)
//     } else {
//         loadScript('/sample/sample2.js', function(error, script) {
//             if(error) {
//                 handleError(error)
//             } else {
//                 loadScript('/sample/sample3.js', function(error, script) {
//                     if(error) {
//                         handleError(error)
//                     } else {
//                         alert('Done')
//                     }
//                 })
//             }
//         })
//     }
// })

function handleError(error) {
    alert('Error', error.message)
}

function loadScript(src, callback) {
    let script = document.createElement('script')
    script.src = src

    script.onload = () => callback(null, script)
    script.onerror = () => callback(new Error(`Script load error for $[src]`))

    document.head.append(script)
}

// loadScript('sample/sample.js', step1)

// function step1(error, script) {
//     if(error) {
//         handleError(error)
//     } else {
//         loadScript('sample/sample2.js', step2)
//     }
// }

// function step2(error, script) {
//     if(error) {
//         handleError(error)
//     } else {
//         loadScript('/sample/sample3.js', step3)
//     }
// }

// function step3(error, script) {
//     if(error) {
//         handleError(error)
//     } else {
//         alert('Done')
//     }
// }

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve('done', 1000))
// })

// let promise = new  Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error('Whoops!')), 1000)
// })

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve('Done!'), 1000)
// })

// promise.then(result => alert(result), error => alert(error))

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve('Whoops!'), 1000)
// })

// promise.then(result => alert(result), error => alert(error))

// function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//         let script = document.createElement('script')
//         script.src = src
        
//         script.onload = () => resolve(script)
//         script.onerror = () => reject(new Error(`Script load error for ${src}`))

//         document.head.append(script)
//     })
// }

// let promise = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js')

// promise.then(
//     script => alert(`${script.src} is loaded!`),
//     error => alert(`Error: ${error.message}`)
// )

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

// delay(3000)
//     .then(() => alert('runs after 3 seconds'))

// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000)
// }).then(function(result) {
//     alert(result)
//     return result * 2
// }).then(function(result) {
//     alert(result)
//     return result * 2
// }).then(function(result) {
//     alert(result)
//     return result * 2
// })

function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script')
        script.src = src
        
        script.onload = () => resolve(script)
        script.onerror = () => reject(new Error(`Script load error for ${src}`))

        document.head.append(script)
    })
}

// loadScript('sample/sample.js')
//     .then(function() {
//         return loadScript('sample/sample2.js')
//     })
//     .then(function() {
//         return loadScript('sample/sample3.js')
//     })
//     .then(function() {
//         alert('Done')
//     })

// loadScript('sample/sample.js')
//     .then(() => loadScript('sample/sample2.js'))
//     .then(() => loadScript('sample/sample3.js'))
//     .then(() => alert('Done'))

// loadScript('sample/sample.js')
//     .then(() => {
//         loadScript('sample/sample2.js')
//             .then(() => {
//                 loadScript('sample/sample3.js')
//                     .then(() => {
//                         alert('Done')
//                     })
//             })
//     })

// class Thenable {
//     constructor(num) {
//         this.num = num
//     }
//     then(resolve) {
//         alert(resolve)

//         setTimeout(() => resolve(this.num * 2), 1000)
//     }
// }

// new Promise(function(resolve) {
//     resolve(1)
// }).then(result => {
//     return new Thenable(result)
// }).then(alert)

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(function (response) {
//         console.log(response.json())
//         return response.json()
//     }).then(function (json) {
//         alert(JSON.stringify(json))
//     })

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => alert(json))