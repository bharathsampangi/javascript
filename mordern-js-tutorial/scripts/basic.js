// alert('All fine now');
// [1, 2].forEach(alert)

// 'use strict'
// num = 5

// let admin;
// let name;
// name = "John"
// admin = name
// alert(admin)

// alert('I am Great')
// console.log('Let me take a nap')

// const name = prompt('What is your name?', 'John')
// alert(name)

// const year = prompt('In which year was the ECMAScript-2015 specification published?', '')
// if(year == 2015) {
//     alert('You guessed it right!')
// } else {
//     alert('How can you be so wrong?')
// }

// const year = prompt('In which year was the ECMAScript-2015 specification published?', '')
// if(year < 2015) {
//     alert('Too Early...')
// } else if(year > 2015) {
//     alert('Too late')
// } else {
//     alert('Exactly!')
// }

// const age = prompt('How old are you?', '')
// let accessAllowed

// if(age > 18) {
//     accessAllowed = true
// } else {
//     accessAllowed = false
// }

// alert(accessAllowed)

// const age = prompt('How old are you?', '')
// let accessAllowed = age > 18 ? true : false
// alert(accessAllowed)

// const age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby' :
//     (age < 18) ? 'Hello!' :
//     (age < 100) ? 'Greetings!':
//     'Hello, Samaritan'

// alert(message)

// const officialName = prompt("What's the \"official\" name of Javascript", '');
// let name = officialName == 'ECMAScript' ? 'Right!' : 'You don\'t know? "ECMAScript!"'
// alert(name)

// const number = prompt('Enter a number', '')
// if(number < 0) {
//     alert(-1)
// } else if(number > 0) {
//     alert(1)
// } else {
//     alert(0)
// }

// const result = a + b < 4 ? 'Below' : 'Over';

// const login = prompt('Log in', '');
// const message = login == 'Employee' ? 'Hello' :
//     login == 'Director' ? 'Greetings' : 
//     login == '' ? 'No login' : 
//     ''
// alert(message)

// let currentUser = null
// let defaultUser = "John"

// let name = currentUser || defaultUser || "unnamed"
// alert(name)

// const user = prompt('Who\'s there?', '');

// if(user == 'Admin') {
//     const password = prompt('Password?', '')
//     if(password == 'TheMaster') {
//         alert('Welcome!')
//     } else if(password) {
//         alert('Wrong password')
//     } else {
//         alert('Canceled')
//     }
// } else if(user) {
//     alert('I don\'t know you')
// } else {
//     alert('Canceled')
// }

// for(let i=0; i < 3; i++) {
//     let val = prompt('Enter number', '')
//     if(!val) break
//     alert(val)
// }

// for(let i=0; i < 4; i++) {
//     if(i % 2 == 0) continue
//     alert(i)
// }

// outer: for(let i=0; i<3; i++) {
//     for(let j=0; j<3; j++) {
//         let input = prompt(`value at cords ${i} ${j}`, '');
//         if(!input) break outer;

//         alert(input)
//     }
// }

// alert('Done')

// for(let i=2; i < 10; i++) {
//     if(i % 2 == 0) {
//         alert(i)
//     }
// }

// let i = 0;
// while(i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }

// while(true) {
//     let number = prompt('Enter number greater than 100', '');
//     if(!number) break
//     if(number < 100) continue
//     else {
//         alert(`The entered number is ${number}`)
//         break
//     }
// }

// let n = prompt('Enter a number greater than 2', '')
// let array = []
// nextPrime: for(let i=2; i <= n; i++) {
//     for(let j=2; j < i; j++) {
//         if(i % j == 0) {
//             continue nextPrime
//         }
//     }
//     array.push(i)
// }
// alert(array)

// let browser = prompt('Which browser you are using?', '')

// if(browser == 'Edge') {
//     alert('You have got the Edge!')
// } else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
//     alert('Okay we support these browsers too')
// } else {
//     alert('We hope that this page looks ok!')
// }

// let a = +prompt('a?', '')

// switch(a) {
//     case 0: alert(0)
//         break;
//     case 1: alert(1)
//         break;
//     case 2:
//     case 3: alert('2,3')
//         break;
// }

// function showMessage(from, text) {
//     from = '*' + from + '*'
//     alert(from + ' : ' + text)
// }

// let from = 'Ann'
// showMessage(from, 'Hello')

// alert(from)

// function showMessage(from, text = getText()) {
//     from = '*' + from + '*'
//     alert(from + ' : ' + text)
// }

// function getText() {
//     return 'Hello, how are you?'
// }

// let from = 'Ann'
// showMessage(from,)

// alert(from)

// function checkAge(age) {
//     if(age > 18) {
//         return true;
//     } else {
//         return confirm('Do you have permission from your parents?');
//     }
// }

// let age = prompt('How old are you?', 18);

// if(checkAge(age)) {
//     alert('Access granted');
// } else {
//     alert('Access denied')
// }

// function min(a, b) {
//     return a > b ? b : a
// }

// console.log(min(2, 5))
// console.log(min(3, -1))
// console.log(min(1, 1))


// let x = +prompt('Enter value for x', '')
// let n = +prompt('Enter value of n', '')

// function pow(x, n) {
//     let prod = x
//     for(let i=1; i < n; i++) {
//         prod = prod * x
//     }
//     return prod
// }

// alert(pow(x, n))

// function ask(question, yes, no) {
//     if(confirm(question)) yes()
//     else no()
// }

// function showOk() {
//     alert('You agreed.')
// }

// function showCancel() {
//     alert('You canceled the execution')
// }

// ask('Do you agree?', showOk, showCancel)

// function ask(question, yes, no) {
//     if(confirm(question)) yes();
//     else no();
// }

// ask('Do you agree?', 
//     function() { alert('You agreed') },
//     function() { alert('You canceled the execution') }
// )

// let age = prompt('What is your age?', 18);

// let welcome;

// if(age < 18) {
//     welcome = function() {
//         alert('Hello!');
//     }
// } else {
//     welcome = function() {
//         alert('Greetings!');
//     }
// }

// welcome();

// let age = prompt('What is your age?', 18);

// let welcome = (age > 18) ?
//     function() { alert('Hello!'); } :
//     function() { alert('Greetings!'); };

// welcome()

function ask(question, yes, no) {
    if(confirm(question)) {
        yes();
    } else {
        no();
    }
}

ask('Do you agree?',
    () => { alert('You agreed.'); },
    () => { alert('You canceled the execution.'); }
)