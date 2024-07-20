// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.

let num1=2;
let num2=4;
let add=num1+num2;
console.log(add);
// output:6

// Task 2: Write a program to subtract two numbers and log the result to the console.

let sub=num1-num2;
console.log(sub);
// output:-2

// Task 3: Write a program to multiply two numbers and log the result to the console. 

let mul=num1*num2;
console.log(mul);
// output:8

// Task 4: Write a program to divide two numbers and log the result to the console.

let div=num1/num2;
console.log(div);
// output:0.5

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

let rem=num1%num2;
console.log(rem);
// output:2

// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.

let number1=5,number2=6;
number2+=number1;
console.log(number2);
// output: 11

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

number1-=number2;
console.log(number1);

// number1=5,number2=11 Output:-6

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using < and > and log the result to the console.

let val1=9,val2=4;
console.log(val1<val2);
// output:false
console.log(val1>val2);
// output:true

// Task 9: Write a program to compare two numbers using <= and >= and log the result to the console.

console.log(val1<=val2);
// output false
val1-=5;
console.log(val1>=val2);
// output:true

// Task 10: Write a program to compare two numbers using == and === and and log the result to the console. and log the result to the console.

let a=5;
let b="5";

console.log(a==b);
// output: true
console.log(a===b);
// output :false


// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

let x=5,y=0;
console.log((x>y)&&y>=0);
// output:true

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

console.log(x<y||x>0);
// output :true

// Task 13: Write a program that uses the operator ! to negate a condition and log the result to the console.

console.log(!(x>4));
// output:false

//ACTIVITY 5 : TERNARY OPERATOR 
  
// Task 14 : write a program that uses ternary operator to check if a number is positive or negative and log the result to console.
  
let n=4;
n>0?console.log("positive"):console.log("negative");
// output:positive

// Feature Request:

// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results. 

let r=9,s=5;

console.log(r+s);//Addition 
// output:14
console.log(r-s);//Subtraction
// output:4
console.log(r*s);//Multiplication
// output:45
console.log(r/s);//Division
// Output:1.8
console.log(r%s);//Remainder
// Output:4
console.log(r**s);//Exponential
// output:59049

// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.


// equal to operator
console.log(9 == 2);
// output:false

// not equal operator
console.log(2 != 3);
// output:true

// strictly equal to operator
console.log(2 === '2');
// output:false

// strictly not equal to operator
console.log( 3 !== '2');
// output:true

// greater than operator
console.log(3 > 0);
// output:true

// less than operator
console.log(1 > 2);
// output:false

// greater than or equal to operator
console.log( 3 >= 3);
// output:true

// less than or equal to operator
console.log( 8 <= 2);
// output:false

// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

let t =-2;
t>0?console.log("positive"):console.log("negative");