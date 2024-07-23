// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function oddEven(num)
{
    if(num%2===1)
        console.log("odd");
    else
        console.log("even");
}
oddEven(5);
// output:odd

// Task 2: Write a function to calculate the square of a number and return the result.

function square(num)
{
    return num*num;
}
let num=5;
console.log(square(num));
// output:25


// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
let  Max = function(num1, num2) 
{
    let max = (num1 > num2) ? num1 : num2;
    console.log(max);
};

Max(7, 2);
// output:7

// Task 4: Write a function expression to concatenate two strings and return the result.

let strconcatenate=function(str1,str2) 
{
    return str1+str2;
}
let str=strconcatenate("Manush ","Mehta");
console.log(str);  // Output: Manush Mehta


// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

let sum=(number1,number2) =>number1+number2;
console.log(sum(9,6)); // output: 15

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

let check=(str,char)=> str.includes(char);
console.log(check("Manush",'u'));
// output:true

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

let product=(num1,num2=9)=>num1*num2;
console.log(product(7,5));
// output:35

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function messsage(name,age=25)
{
    return `Welcome ${name}.Your age is ${age}`
}
console.log(messsage("Manush",18));
// output:Welcome Manush.Your age is 18

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function repeatFunction(func, num)  {
    for (let i = 0; i < num; i++) {
        func();
    }
};
let num1=4,num2=9;
add=()=>console.log(num1+=num2);
repeatFunction(add,2);
// output:13
// 22


// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function highorder(func1, func2, value) {
    return func2(func1(value));
}

function cube(num) {
    return num*num*num;
}

let ans=highorder(square,cube,2);
console.log(ans); //output :64

