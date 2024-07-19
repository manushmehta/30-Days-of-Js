// Activity 1: Variable Declaration

// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.
var num=5;
console.log(num);

// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.
let str="Manush"
console.log(str);
// Activity 2: Constant Declaration

// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.

const boolConst=false;
console.log(boolConst);

// Activity 3: Data Types

// Task 4: Create variables of different data types and log each variable's type using the `typeof` operator.

let num1 = 100; // Number
let str1 = "JavaScript"; // String
let bool = true; // Boolean
const obj = {
        name: "Manush", 
        Rollno : 103
    }; // Object
let arr = [1, 2, 3, 4, 5]; // Array

console.log(typeof(num1),typeof(str1),typeof(bool),typeof(obj),typeof(arr));

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.
let val="Initial";
console.log(val);
val="Final";
console.log(val);

// Activity 5: Understanding `const`

// Task 6: Try reassigning a variable declared with `const` and observe the error.
const value=7;
console.log(value);
// value=5;
// Error :Assignment to constant variable.

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let num2=4;
let str2="Hello";
let bool2=false;
const Info = {
    Name:"Manush",
    Age:"18",
};
const arr2=[1,2,3];

console.log(num1,typeof(num1));
console.log(str2,typeof(str2));
console.log(bool2,typeof(bool2));
console.log(Info,typeof(Info));
console.log(arr2,typeof(arr2));

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.
let string="Hello";
console.log(string);
string="Hello world";
console.log(string);

const string2="Thank you";
console.log(string2);
// string2="Bye";
// Error