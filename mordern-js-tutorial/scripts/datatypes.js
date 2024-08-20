// const str = 'Hello';

// str.text = 5;

// alert(str.text);

// function readNumber() {
//     let val = +prompt('Enter a number', '');

//     if(val == undefined) {
//         return
//     }
//     else if(isNaN(val)) {
//         readNumber()
//     }

//     return val
// }

// readNumber()

// let i = 0; while (i < 11) {
//     i += 0.2;
//     if (i > 9.8 && i < 10.2) alert( i ); }

// let guestList = `Guests: 
// * John
// * Pete
// * Mary
// `;

// alert(guestList);

// const guestList = "Guests:\n * John\n * Pete \n * Mary"
// alert(guestList)

// const str = 'As sly as a fox, as strong as an ox'

// let target = 'as'

// let pos = 0;
// while(true) {
//     let foundPos = str.indexOf(target, pos)
//     if(foundPos == -1) {
//         break;
//     }

//     alert(`Found at ${foundPos}`);
//     pos = foundPos + 1;
// }

// const str = 'As sly as a fox, as strong as an ox'
// let target = 'as'
// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
// alert( pos ); }

// function ucFirst(str) {
//     str = str[0].toUpperCase() + str.slice(1)
//     return str
// }

// alert(ucFirst('john') === 'John')

// function checkSpam(str) {
//     str = str.toLowerCase();
//     return str.includes('viagra') || str.includes('xxx');
// }

// alert(checkSpam('bug viAgRa now') == true);
// alert(checkSpam('free xxxxx') == true);
// alert(checkSpam('innocent rabbit') == false);

// function truncate(str, maxLength) {
//     if(str.length > maxLength) {
//         return str.slice(0, maxLength - 1) + '...'
//     }
//     return str
// }

// console.log(truncate("What I'd like to tell on this topic is:", 20))
// console.log(truncate("Hi everyone!", 20))

// function extractCurrencyValue(str) {
//     return parseInt(str.slice(1));
// }

// console.log(extractCurrencyValue('$120'))

// let fruits = ['apple', 'pear', 'bannana'];

// fruits.age = 20
// fruits[9] = 'Mango'

// for(let fruit of fruits) {
//     console.log(fruit)
// }

// let arr = [1, 2, 3, 4, 5];

// arr.length = 2;

// alert(arr)

// arr.length = 5;

// alert(arr[3])

// function findMiddle(arr) {
//     let mid = Math.round((arr.length - 1) / 2);
//     return mid
// }

// const styles = ['Jazz', 'Blues'];

// styles.push('Rock-n-Roll');

// styles[findMiddle(styles)] = 'Classics';

// styles.shift()

// styles.unshift('Rap', 'Reggae')

// alert(styles)

// function getMaxSubSum(arr) {
//     let max = 0;
//     let sum = arr[0]
//     if(sum > max) max = sum

//     for(let i=1; i < arr.length; i++) {
//         sum = sum + arr[i]
//         max = Math.max(sum, max)
//     }

//     return max
// }

// alert(getMaxSubSum([2, -1, 2, 3, -9]))

// function camelize(str) {
//     let arr =  str.split('-');
//     let transform = arr.map((item, index) => index!=0 ? item[0].toUpperCase() + item.slice(1) : item)
//     return transform.join('')
// }

// console.log(camelize('background-color'))

// function filterRange(arr, a, b) {
//     return arr.filter((item) => item >= a && item <= b);
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert(filtered)

// function filterRangeInPlace(arr, a, b) {
//     for(let i=0; i < arr.length; i++) {
//         if(arr[i] >= a && arr[i]<=b) continue;
//         arr.splice(i, 1)
//     }
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4)

// alert(arr)

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a)

// console.log(arr)

// let arr = ['HTML', 'Javascript', 'CSS'];

// const copySorted = (arr1) => {
//     return [...arr1].sort();
// }

// let sorted = copySorted(arr);

// alert(sorted)

// function Calculator() {
//     this.operators = ['+', '-']
//     this.doCalculate = function(operator, a, b) {
//         switch(operator) {
//             case '+': return a + b;
//             case '-': return a - b;
//         }
//     }
//     this.calculate = function(str) {
//         for(let operator of this.operators) {
//             if(str.includes(operator)) {
//                 let operands = str.split(operator);
//                 return this.doCalculate(operator, +operands[0], +operands[1])
//             }
//         }
//     }
// }

// let calc = new Calculator()

// alert(calc.calculate("3 + 7"))

// let john = { name: "John", age: 25 }; 
// let pete = { name: "Pete", age: 30 }; 
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ]; 
// sortByAge(arr);

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age - b.age)
// }   

// // now: [john, mary, pete] 
// alert(arr[0].name); // John 
// alert(arr[1].name); // Mary 
// alert(arr[2].name); // Pete

// let map = new Map([
//     ['1', 'str1'],
//     [1, 'num1'],
//     [true, 'bool1']
// ])

// alert(map.get('1'))

// let obj = {
//     name: 'John',
//     age: 30
// };

// let map = new Map(Object.entries(obj));
// alert(map.get('name'))

// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
// ]);

// alert(prices.orange)

// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);

// let obj = Object.fromEntries(map.entries());

// alert(obj.orange)

// function unique(arr) {
//     const set = new Set()
//     for(let item of arr) {
//         set.add(item)
//     }
//     return set
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values))

// function aclean(arr) {
//     let map = new Map();

//     for(let word of arr) {
//         let sorted = word.toLowerCase().split('').sort().join('');
//         map.set(sorted, word)
//     }

//     return Array.from(map.values())
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert(aclean(arr))

// let map = new Map();

// map.set('name', 'John');

// let keys = Array.from(map.keys());

// console.log(keys)

// keys.push('more')

// let john = { name: 'John' };

// let map = new Map();
// map.set(john, '...');

// john = null;
// console.log(map)

// let weakMap = new WeakMap();

// let obj = {};

// weakMap.set(obj, 'ok');

// console.log(weakMap)

// let john = { name: 'John' };

// let weakMap = new WeakMap();
// weakMap.set(john, '...')

// john = null;

// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4
// };

// let doublePrices = Object.fromEntries(
//     Object.entries(prices).map(([key, value]) => [key, value * 2])
// )

// alert(doublePrices.meat)

// let salaries = {
//     'John': 100,
//     'Pete': 300,
//     'Mary': 250
// }

// alert(sumSalaries(salaries))

// function sumSalaries(obj) {
//     let sum = 0;
//     for(let salary of Object.values(obj)) {
//         sum += salary;
//     }
//     return sum;
// }

// const arr = ['Ilya', 'Kantor'];

// const [firstName, surname] = arr

// console.log(firstName)
// console.log(surname)

// const [firstName, ,title] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

// alert(title)

// const [a, b, c] = 'abc';
// console.log(a)
// console.log(b)

// let user = {};

// [user.name, user.surname] = 'Ilya Kantor'.split(' ')
// console.log(user)

// const user = {
//     name: 'John',
//     age: 30
// }

// for(let [key, value] of Object.entries(user)) {
//     alert(`${key}: ${value}`)
// }

// const user = new Map();
// user.set('name', 'John');
// user.set('age', 30);

// for(let [key, value] of user) {
//     alert(`${key}:${value}`)
// }

// const [name1, name2, ...rest] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

// alert(name1);
// alert(name2);

// alert(rest[0])
// alert(rest[1])

// const [name = 'Guest', surname = 'Anonymous'] = ['Julius'];

// alert(name)
// alert(surname)

// let [name = prompt('name?'), surname = prompt('surname?')] = ['Julius']

// alert(name)
// alert(surname)

// const options = {
//     title: 'Menu',
//     width: 100,
//     height: 200
// };

// let {title, width, height} = options;

// alert(title);
// alert(width);
// alert(height);

// const options = {
//     title: 'Menu',
//     width: 100,
//     height: 200
// };

// let {width: w, height: h, title} = options;

// alert(title);
// alert(w);
// alert(h);

// const options = {
//     title: 'Menu'
// }

// let { width: w = 100, height: h = 200, title } = options

// alert(title);
// alert(w);
// alert(h);

// const options = {
//     title: 'Menu',
//     height: 200,
//     width: 100
// }

// const {title, ...rest} = options

// console.log(rest)

// let options = { size: {
//     width: 100,
//     height: 200 },
//     items: ["Cake", "Donut"],
// extra: true };

// const { 
//     size: {width, height}, 
//     items: [item1, item2], 
//     title = 'Menu'
// } = options

// alert(title); // Menu 
// alert(width); // 100 
// alert(height); // 200 
// alert(item1); // Cake 
// alert(item2); // Donut

// const options = {
//     title: "My menu",
//     items: ["Item1", "Item2"]
// };

// function showMenu({title = 'Untitled', width = 200, height = 100, items = []}) {
//     alert( `${title} ${width} ${height}` ); // My Menu 200 100 
//     alert( items ); // Item1, Item2
// }

// showMenu(options)

// const user = {name: 'John', years: 30}

// const { name, years: age, isAdmin = false } = user

// alert( name ); // John 
// alert( age ); // 30 
// alert( isAdmin ); // false

// let salaries = { 
//     "John": 100, 
//     "Pete": 300, 
//     "Mary": 250
// };

// function topSalary(salaries) {
//     let top = [null, 0]
//     for(let [key, value] of Object.entries(salaries)) {
//         if(value > top[1]) {
//             top = [key, value]
//         }
//     }
//     return top[0]
// }

// alert(topSalary(salaries))

let user = {
    sayHi() { // ignored
    alert("Hello"); },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored 
};
alert( JSON.stringify(user) );

