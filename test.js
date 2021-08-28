let a = 100;

for (var i = 0; i < 10; i++) {
    let a = i;
    console.log(a);
}

console.log(a);

const b = 100;

// b = 101;

//var აკეთებს გლობალურ ცვლადს რომელსაც შემდეგში შეგვიძლია მივწვდეთ
//let რომელიც scope-ში არის მხოლოდ ხელმისაწვდომი
//const კონსტანტა რომელსაც ვერ მივანიჭებთ ახალ მნიშვნელობას

for (let i = 0; i < 5; i += 1) {
    if (i % 2 == 0) {
        console.log(i, " is odd");
    } else {
        console.log(i, " is even");
    }
}

// int sum(int a, int b) {
//     return a + b;
// }

function sum(a, b) {
    return a + b;
}

console.log("sum is: ", sum(2, 3));
console.log("sum is: ", sum("Hello ", "World!"));
console.log("sum is: ", sum(2.2, 2.8));

let arr = [1, "str", 2.2, sum, false, true];

var arrLength = arr.length;

console.log("size arr: ", arrLength);

for (var i = 0; i < arrLength; i++) {
    let item = arr[i];
    // console.log("index of ", i, item);

    if (typeof item == 'number') {
        console.log(item, " is number");
    } else if (typeof item == 'string') {
        console.log(item, " is string");
    } else if (typeof item == 'function') {
        console.log("it is function and sum of 2 and 3 is ", item(2, 3), item.name);
    } else if (typeof item === 'boolean') {
        console.log("it is boolean ", item);
    }
}


for (let i in arr) {
    console.log(i);
}

for (let i of arr) {
    console.log(i);
}

var c = 333;
var d = "333";

if (c === d) {
    console.log("erti mnishvneloba aqvs");
} else {
    console.log("erti mnsihvnelboa ar aqvs");
}

// ori toloba == adarebs mnishvnelobebs
// sami toloba === adarebs mnishvnelobastan ertad tipsac

var arr2 = [];
arr2.push(1);
arr2.push(2);

console.log(arr2);

var lastElement = arr2.pop();

console.log(lastElement, arr2);


var arr3 = [];

var lastElementInArr3 = arr3.pop();

console.log(lastElementInArr3, arr3);

function test(t) {
    if (t === undefined) {
        return 'Undefined value!';
    }

    return t;
}
  
let x;
let y = 101;

console.log(test(x), test(y));

// let undefinedVarialbe;


// var a = 5, b = 3, c;

// c = a + b;

// console.log(a, b, c);

// class User {
//     constructor(name, surname, email) {
//         this._name = name;
//         this._surname = surname;
//         this._email = email;
//     }

//     get getName() {
//         return this._name;
//     }

//     get getSurname() {
//         return this._surname;
//     }

//     get getEmail() {
//         return this._email;
//     }

//     set email(newEmail) {
//         this._email = newEmail;
//     }

//     fullName() {
//         return this.getName + " " + this.getSurname;
//     }
// }

// const user = new User("Tazo", "Leladze", "taz742b@gmail.com");
// user.email = "tazosNewEmail@gmail.com";

// console.log(user.fullName());
