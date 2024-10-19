// function sum(a) { 
 
//     return function(b) { 
//       return a + b; // takes "a" from the outer lexical environment 
//     }; 
   
// } 

// console.log(sum(1)(2))

// document.body.childNodes

// if(true) {
//   var test = true
// }

// console.log(test)

// function sayHi() {
//   if(true) {
//     var phase = 'Hello!'
//   }
// }

// sayHi()
// console.log(phase)

// function sayHi() {
//   phrase = 'Hello'

//   console.log(phrase)

//   var phrase
// }

// sayHi()

// function sayHi() {
//   console.log(phrase)

//   var phrase = 'Hello'
// }

// sayHi()

// function sayHi() {
//   console.log(counter)
//   alert("Hi");
//   // let's count how many times we run 
//   sayHi.counter++;
// }
// sayHi.counter = 0; // initial value 
// sayHi(); // Hi
// sayHi(); // Hi 
// alert(`Called ${sayHi.counter} times`); 

// let sayHi = function func(who) {
//   if(who) {
//     alert(`Hello, ${who}`)
//   } else {
//     func('Guest')
//   }
// }

// sayHi()

// func()

// let sayHi = function(who) {
//   if(who) {
//     alert(`Hello, ${who}`)
//   } else {
//     sayHi('Guest')
//   }
// }

// let welcome = sayHi
// sayHi = null
// welcome()

// let sayHi = function func (who) {
//   if(who) {
//     alert(`Hello, ${who}`);
//   } else {
//     func('Guest')
//   }
// }

// let welcome = sayHi
// sayHi = null
// welcome()

// function makeCounter() {
//   let count = 0;

//   this.set = function(value) {
//     count = value;
//   }

//   this.decrease = function() {
//     --count;
//   }

//   this.counter = function() {
//     return count;
//   }
// }

// const counter = new makeCounter()
// counter.set(10)
// counter.decrease()
// console.log(counter.counter())

// function makeCounter() {
//   let count = 0;

//   function counter() {
//     return count++;
//   }

//   counter.set = value => count = value;

//   counter.decrease = () => count--;

//   return counter;
// }

// const counter = makeCounter()
// console.log(counter())
// counter.set(10)
// counter.decrease()
// console.log(counter())

// const arr = [1, 2, 3, 4, 5, 6, 7]

// function inBetween (min, max) {
//   return function(ele) {
//     return ele >= min && ele <= max
//   }
// }

// function inArray(...items) {
//   return function(ele) {
//     return items.includes(ele)
//   }
// }

// alert(arr.filter(inBetween(3, 6)))
// alert(arr.filter(inArray(1, 2, 10)))

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(key) {
//   return function(a, b) {
//     return a[key] > b[key] ? 1 : -1
//   }
// }

// console.log(users.sort(byField('name')))
// console.log(users.sort(byField('age')))

// function makeArmy() { 
//   let shooters = []; 
 
  
//   for (let i=0; i < 10; i++) { 
//     let shooter = function() { // shooter function
//       console.log( i ); // should show its number 
//     }; 
//     shooters.push(shooter); 
//   } 
 
//   return shooters;
//  } 
 
// let army = makeArmy(); 
 
// army[0](); // the shooter number 0 shows 10 
// army[5]();

// function makeArmy() {
//   let shooters = [];
//   let i = 0;
//   while (i < 10) {
//     let j = i;
//     let shooter = function () { // shooter function 
//       alert(j); // should show its number 
//     };
//     shooters.push(shooter);
//     i++;
//   }
//   return shooters;
// }
// let army = makeArmy();
// army[0](); // 0 
// army[5](); // 5

// function sayHi(phrase, who) {
//   alert(`${phrase}, ${who}`)
// }

// setTimeout(sayHi, 1000, 'Hello', 'john')

// setTimeout("alert('Hello')", 1000);

// setTimeout(() => alert('Hello!'), 1000)

// let timer = setTimeout(() => alert('Hello'), 2000)
// console.log(timer)
// clearTimeout(timer)
// console.log(timer)

// let timerId = setInterval(() => alert('tick'), 2000)

// setTimeout(() => {
//   clearInterval(timerId);
//   alert('stop')
// }, 5000)

// let timerId = setTimeout(function tick() {
//   alert('tick')
//   timerId = setTimeout(tick, 2000)
// }, 2000)

// let i=1;
// setInterval(function() {
//   // func(i++)
//   console.log(i)
// }, 100)

// function printNumbers(from, to) {
//   console.log(from)
//   if(from === to)
//     return
//   setTimeout(printNumbers, 1000, ++from, to)
// }

// setTimeout(printNumbers, 1000, 1, 20)

// function sayHi() {
//   alert(this.name)
// }

// let user = { name: 'John' }
// let admin = { name: 'Admin' }

// sayHi.call(user)
// sayHi.call(admin)

// function say(phrase) {
//   alert(this.name+ ' : ' + phrase)
// }

// let user = { name: 'John' }

// say.call(user, 'Hello')

// function slow(x) {
//   alert(`Called with ${x}`);
//   return x;
// }

// function cachingDecorator(func) {
//   let cache = new Map();

//   return function(x) {
//     if(cache.has(x)) {
//       return cache.get(x);
//     }

//     let result = func(x);

//     cache.set(x, result);
//     return result;
//   }
// }

// slow = cachingDecorator(slow)

// alert(slow(1))
// alert('Again: '+ slow(1))

// alert(slow(2))
// alert('Again: '+ slow(2))

// function work(a, b) {
//   alert(a+b);
// }

// function spy(func) {
//   function wrapper(...arguments) {
//     wrapper.calls.push(arguments)
//     return func.apply(this, arguments)
//   }

//   wrapper.calls = []

//   return wrapper
// }

// work = spy(work);

// work(1, 2);
// work(4, 5);

// for(let args of work.calls) {
//   alert('call: ' + args.join())
// }

// function f(x) {
//   alert(x);
// }

// function delay(func, ms) {
//   return function(...arguments) {
//     setTimeout(() => func.apply(this, arguments), ms)
//   }
// }

// let f1000 = delay(f, 1000);
// let f5000 = delay(f, 5000);

// f1000('test')
// f5000('test2')

// function debounce(func, ms) {
//   let isCooldown = false;

//   return function(...arguments) {
//     if(isCooldown) return

//     func.apply(this, arguments)

//     isCooldown = true

//     setTimeout(() => isCooldown = false, ms)
//   }
// }

// let f = debounce(alert, 1000);

// f(1)
// f(2)

// setTimeout( () => f(3), 100); // ignored ( only 100 ms passed )
// setTimeout( () => f(4), 1100); // runs
// setTimeout( () => f(5), 5000);

// function throttle(func, ms) {
//   let isThrottled = false, savedArgs, savedThis;

//   function wrapper() {
//     if(isThrottled) {
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     }

//     func.apply(this, arguments);

//     isThrottled = true;

//     setTimeout(function() {
//       isThrottled = false;
//       if(savedArgs) {
//         wrapper.apply(savedThis, savedArgs);
//         savedArgs = savedThis = null;
//       }
//     }, ms)
//   }

//   return wrapper;
// }

// function f(a) {
//   console.log(a);
// }

// let f1000 = throttle(f, 1000);

// f1000(1);
// f1000(2);
// f1000(3);

// let user = {
//   firstName: 'John',
//   sayHi() {
//     alert(`Hello, ${this.firstName}`)
//   }
// }

// setTimeout(user.sayHi, 1000)

// setTimeout(function() {
//   user.sayHi()
// }, 1000)

// let user ={
//   firstName: 'John',
//   sayHi() {
//     alert(`Hello, ${this.firstName}`);
//   }
// };

// setTimeout(() => user.sayHi(), 1000)

// user = {
//   sayHi() {
//     alert('Another user in setTimeout!')
//   }
// }

// let user = {
//   firstName: 'John'
// }

// function func() {
//   alert(this.firstName)
// }

// let funcUser = func.bind(user)
// funcUser()

// let user = {
//   firstName: 'John'
// };

// function func(phrase) {
//   alert(phrase + ', ' + this.firstName);
// }

// let funcUser = func.bind(user);

// funcUser('Hello')

// let user = {
//   firstName: 'John',
//   sayHi() {
//     alert(`Hello, ${this.firstName}!`)
//   }
// };

// let sayHi = user.sayHi.bind(user);

// sayHi();

// setTimeout(sayHi, 1000);

// user = {
//   sayHi() {
//     alert('Another user in setTimeout!')
//   }
// }

// let user = {
//   firstName: 'John',
//   say(phrase) {
//     alert(`${phrase}, ${this.firstName}!`);
//   }
// };

// let say = user.say.bind(user);

// say('Hello');
// say('Bye');

// function mul(a, b) {
//   return a * b;
// }

// let double = mul.bind(null, 2);

// alert(double(3));
// alert(double(4));
// alert(double(5));

function mul(a, b) {
  return a * b;
}

let triple = mul.bind(null, 3);

alert(triple(3));
alert(triple(4));
alert(triple(5));