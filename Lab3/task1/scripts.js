"use strict";
alert('Hello');

// Some comment

/* An example with two messages.
This is a multiline comment.
*/

[1, 2].forEach(alert); // This comment follows the statement

var greet = "Hello, world!";
//let age = 19;
const name = "Karim";

let inf = 1 / 0;

let age = prompt("How old are you?", 19);
alert(`You are ${age} years old!`);

let isBoss = confirm("Are you the boss?");

console.log( isBoss );

let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

console.log( "6" / "2" );

let str = "123";
console.log(typeof str);

let num = Number(str);

console.log(typeof num);

age = Number("an arbitrary string instead of a number");

console.log(age);

console.log(Number("   123   ")); // 123
console.log(Number("123z"));
console.log(Number(true));
console.log(Number(false));

let x = 1;

x = -x;
console.log(x);

x = 1
let y = 3;
console.log(y - x);

let s = "my" + "string";
console.log(s);

let apples = "2";
let oranges = "3";

console.log( +apples + +oranges );

x = 2 * 2 + 1;

console.log(x); // 5

let counter = 2;
counter++;
console.log(counter);

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);

console.log(2 > 1);
console.log(2 == 1);
console.log(2 != 1);

console.log(5 > 4);
console.log("apple" > "pineapple");
console.log("2" > "12");
console.log(undefined == null);
console.log(undefined === null);
console.log(null == "\n0\n");
console.log(null === +"\n0\n");

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  console.log('Too early...');
} else if (year > 2015) {
  console.log('Too late');
} else {
  console.log('Exactly!');
}

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

if (-1 || 0) console.log('first');
if (-1 && 0) console.log('second');
if (null || -1 && 1) console.log('third');

let user;

alert(user ?? "Anonymous");

user = "John";

alert(user ?? "Anonymous"); 

x = 1 && 2 ?? 3;

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

for (;;) { // for-ever loop
  console.log("Sara is the best");
  break;
}

let z = 2 + 2;

switch (z) {
  case 3:
    console.log('Too small');
    break;
  case 4:
    console.log('Exactly!');
    break;
  case 5:
    console.log('Too big');
    break;
  default:
    console.log("I don't know such values");
}

function showMessage() {
  console.log('Hello everyone!');
}

showMessage();
showMessage();

let sayHi = function() {
  console.log("Hello");
};

let func = (arg1, arg2) => expression;

func = function(arg1, arg2) {
  return expression;
};

function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    console.log(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}

i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

user = new Object();
user = {};

user = {
  name: "John",
  age: 30
};

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

user = makeUser();

console.log( user.ref.name );

let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;

let id = Symbol("id");

console.log(obj);

anotherObj[obj] = 123;

let john = {
  name: "John",
  sayHi: function() {
    alert("Hi buddy!");
  }
};

john.sayHi();

let billion = 1000000000;
billion = 1_000_000_000;

arr = new Array();
arr = [];

arr = ["I", "go", "home"];

delete arr[1];

let range = {
  from: 1,
  to: 5
};

let map = new Map();

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

arr = ["John", "Smith"]

let [firstName, surname] = arr;

let now = new Date();

user = {
  name: "John",
  age: 30,

  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  }
};

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
}));
