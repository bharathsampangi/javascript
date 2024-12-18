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

// fetch('sample/user.json')
//     .then(response => response.json())
//     .then(user => fetch(`https://api.github.com/users/${user.name}`))
//     .then(response => response.json())
//     .then(githubUser => {
//         let img = document.createElement('img')
//         img.src = githubUser.avatar_url
//         img.className = 'promise-avatar-example'
//         document.body.append(img)

//         setTimeout(() => img.remove(), 3000)
//     })

// fetch('sample/user.json')
//     .then(response => response.json())
//     .then(user => fetch(`https://api.github.com/users/${user.name}`))
//     .then(response => response.json())
//     .then(githubUser => new Promise((resolve) => {
//         let img = document.createElement('img')
//         img.src = githubUser.avatar_url
//         img.className = 'promise-avatar-example'
//         document.body.append(img)

//         setTimeout(() => {
//             img.remove()
//             resolve(githubUser)
//          }, 3000)
//     }))
//     .then(githubUser => alert(`Finished showing ${githubUser.name}`))

// function loadJson(url) {
//     return fetch(url)
//         .then(response => response.json())
// }

// function loadGithubUser(name) {
//     return fetch(`https://api.github.com/users/${name}`)
//         .then(response => response.json())
// }

// function showAvatar(githubUser) {
//     return new Promise(function(resolve) {
//         let img = document.createElement('img');
//         img.src = githubUser.avatar_url;
//         img.className = 'promise-avatar-example';
//         document.body.append(img);

//         setTimeout(() => {
//             img.remove();
//             resolve(githubUser);
//         }, 3000);
//     })
// }

// loadJson('sample/user.json')
//     .then(user => loadGithubUser(user.name))
//     .then(showAvatar)
//     .then(githubUser => alert(`Finished showing ${githubUser.name}`))

// fetch('sample/user.json')
// .then(response => response.json())
// .then(user => fetch(`https://api.github.com/users/${user.name}`)) .then(response => response.json())
// .then(githubUser => new Promise((resolve, reject) => {
// let img = document.createElement('img'); img.src = githubUser.avatar_url; img.className = "promise-avatar-example"; document.body.append(img);
// setTimeout(() => { img.remove(); resolve(githubUser);
// }, 3000); }))
// .catch(error => alert(error.message));

// new Promise(() => {
//     throw new Error('Whoops!!')
// }).catch(alert)

// new Promise((resolve) => {
//     resolve('ok')
// }).then(() => {
//     throw new Error('Whoops!')
// }).catch(alert)

// new Promise((resolve) => {
//     resolve('ok')
// }).then(() => {
//     blabla()
// }).catch(alert)

// new Promise(() => {
//     throw new Error('Whoops!')
// }).catch(function(error) {
//     alert('The error is handled, continued normally')
// }).then(() => alert('Next successful handler runs'))

// new Promise(() => {
//     throw new Error('Whoops!')
// }).catch(function(error) {
//     if(error instanceof URIError) {

//     } else {
//         alert("Can't handle such error")

//         throw error
//     }
// }).then(() => {

// }).catch((error) => {
//     alert(`The unknown error has occured: ${error}`)
// })

// window.addEventListener('unhandledrejection', function(event) {
//     alert(event.promise)
//     alert(event.reason)
// })

// new Promise(function() {
//     throw new Error('Whoops!')
// })

// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1)), 3000),
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)),
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))
// ]).then(alert)

// let urls = [ 'https://api.github.com/users/iliakan', 'https://api.github.com/users/remy', 'https://api.github.com/users/jeresig'
// ];

// let requests = urls.map(url => fetch(url))

// Promise.all(requests)
// .then(responses => responses.forEach(response => alert(`${response.url}: ${response.status}`)))

// let names = ['iliakan', 'remy', 'jeresig']

// let requests = names.map(name => fetch(`https://api.github.com/users/${name}`))

// Promise.all(requests)
//     .then(responses => {
//         responses.forEach(response => alert(`${response.url}: ${response.status}`))
//         return responses
//     }).then(responses => Promise.all(responses.map(r => r.json())))
//     .then(users => users.forEach(user => alert(user.name)))

// Promise.all([
//     new Promise(resolve => setTimeout(resolve(1), 2000)),
//     new Promise((resolve, reject) => setTimeout(reject(new Error('Whoops!'), 3000))),
//     new Promise(resolve => setTimeout(resolve(2), 1000))
// ]).then(alert)
// .catch(alert)

// let urls = [ 'https://api.github.com/users/iliakan', 'https://api.github.com/users/remy', 'https://no-such-url'
// ];

// Promise.allSettled(urls.map(url => fetch(url)))
//     .then(results => {
//         results.forEach((result, num) => {
//             if(result?.status == "fulfilled") {
//                 alert(`${urls[num]}: ${result?.value?.status}`)
//             }
//             if(result?.status == "rejected") {
//                 alert(`${urls[num]}: ${result.reason}`)
//             }
//         })
//     })

// if (!Promise.allSettled) {
//     Promise.allSettled = function (promises) {
//         return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
//             state: 'fulfilled',
//             value
//         }), reason => ({
//             state: 'rejected',
//             reason
//         }))))
//     }
// }
    
// Promise.race([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error('Whoops!')), 2000)),
//     new Promise((resolve) => setTimeout(() => resolve(3), 3000))
// ]).then(alert)

// let promise = new Promise(resolve => resolve(1))

// promise.then(alert)

// let cache = new Map()

// function loadCached(url) {
//     if(cache.has(url)) {
//         return Promise.resolve(cache.get(url))
//     }

//     return fetch(url)
//         .then(response => response.text())
//         .then(text => {
//             cache.set(url, text)
//             return text
//         })
// }

// loadCached('https://api.github.com/users/iliakan').then(alert)
// loadCached('https://api.github.com/users/remy').then(alert)
// loadCached('https://api.github.com/users/iliakan').then(alert)

// let promise = new Promise((resolve, reject) => reject(error))

// function loadScript(src, callback) {
//     let script = document.createElement('script')
//     script.src = src

//     script.onload = () => callback(null, script)
//     script.onerror = () => callback(new Error(`Script load error for ${src}`))

//     document.head.append(script)
// }

// let loadScriptPromise= function(src) {
//     return new Promise((resolve, reject) => {
//         loadScript(src, (err, script) => {
//             if(err) reject(err)
//             else resolve(script)
//         })
//     })
// }

// loadScript('sample/sample.js')

// let promise = Promise.resolve()

// promise.then(() => alert('promise done!'))

// alert('code finished')

// let promise = Promise.reject(new Error('Promise Failed!'))
// promise.catch(err => alert('caught'))

// window.addEventListener('unhandledrejection', event => alert(event.reason))

// let promise = Promise.reject(new Error('Promise Failed!'))

// window.addEventListener('unhandledrejection', event => alert(event.reason))

// let promise = Promise.reject(new Error("Promise Failed!"));
// setTimeout(() => promise.catch(err => alert('caught')), 1000); 
// // Error: Promise Failed! 
// window.addEventListener('unhandledrejection', event => alert(event.reason));

// async function f() {
//     return 1
// }

// f().then(alert)

// async function f() {
//     return Promise.resolve(1)
// }

// f().then(alert)

// async function f() {
//     let promise = new Promise((resolve) => setTimeout(() => resolve('Done!'), 1000))

//     let result = await promise
    
//     alert(result)
// }

// f()

// function f() {
//     let promise = Promise.resolve(1)
//     let result = await promise
// }

// fetch('sample/user.json')
//     .then(response => response.json())
//     .then(user => fetch(`https://api.github.com/users/${user.name}`))
//     .then(response => response.json())
//     .then(githubUser => new Promise((resolve) => {
//         let img = document.createElement('img')
//         img.src = githubUser.avatar_url
//         img.className = 'promise-avatar-example'
//         document.body.append(img)

//         setTimeout(() => {
//             img.remove()
//             resolve(githubUser)
//          }, 3000)
//     }))
//     .then(githubUser => alert(`Finished showing ${githubUser.name}`))

// async function showAvatar() {
//     let response = await fetch('sample/user.json')

//     let user = await response.json()

//     let response1 = await fetch(`https://api.github.com/users/${user.name}`)

//     let githubUser = await response1.json()

//     let img = document.createElement('img')
//     img.src = githubUser.avatar_url
//     img.className = 'promise-avatar-example'
//     document.body.append(img)

//     await new Promise(resolve => setTimeout(() => resolve(githubUser), 3000))

//     img.remove()

//     alert(`Finished showing ${githubUser.name}`)

//     return githubUser
// }

// showAvatar()

// (async () => {
//     let response = await fetch('sample/user.json')

//     let user = await response.json()

//     let response1 = await fetch(`https://api.github.com/users/${user.name}`)

//     let githubUser = await response1.json()

//     let img = document.createElement('img')
//     img.src = githubUser.avatar_url
//     img.className = 'promise-avatar-example'
//     document.body.append(img)

//     await new Promise(resolve => setTimeout(() => resolve(githubUser), 3000))

//     img.remove()

//     alert(`Finished showing ${githubUser.name}`)
// })()

// class Thenable {
//     constructor(num) {
//         this.num = num
//     }
//     then(resolve) {
//         alert(resolve)
//         setTimeout(() => resolve(this.num * 2), 1000)
//     }
// }

// async function f() {
//     let result = await new Thenable(1)
//     alert(result)
// }

// f()

// class Waiter {
//     async wait() {
//         return await Promise.resolve(1)
//     }
// }

// new Waiter()
//     .wait()
//     .then(alert)

// async function f() {
//     await Promise.reject(new Error('Whoops!'))
// }

// f()

// async function f() {
//     throw new Error('Whoops!')
// }

// f()

// async function f() {
//     try {
//         let response = await fetch('http://no-such-url')
//     } catch(err) {
//         alert(err)
//     }
// }

// f()

// async function f() {
//     let response = await fetch('http://no-such-url')
// }

// f().catch(alert)

// async function loadJson(url) {
//     let response = await fetch(url)

//     if(response.status == 200) {
//         let json = await response.json()
//         return json
//     }

//     throw new Error(response.status)
// }

// loadJson('http://no-such-url')
//     .catch(alert)

// class HttpError extends Error {
//     constructor(response) {
//         super(`${response.status} for ${response.url}`)
//         this.name = 'HttpError'
//         this.response = response
//     }
// }

// async function loadJson(url) {
//     let response = await fetch(url)

//     if(response.status == 200) {
//         let json = await response.json()
//         return json
//     }

//     throw new HttpError(response)
// }

// async function demoGithubUser() {
//     let user

//     while(true) {
//         let name = prompt('Enter a name?', 'iliakan');

//         try {
//             user = await loadJson(`https://api.github.com/users/${name}`);
//             break;
//         } catch(err) {
//             if(err instanceof HttpError && err.response.status == 404) {
//                 alert('No such user, please reenter')
//             } else {
//                 throw err
//             }
//         }
//     }

//     alert(`Full name: ${user.name}`);

//     return user;
// }

// demoGithubUser()

// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000))

//     return 10
// }

// async function f() {
//     let response = await wait()
//     alert(response)
// }

// f()