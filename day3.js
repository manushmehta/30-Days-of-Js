// Activity 1: If-Else Statements

// - Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num=5;
if(num>0)
    console.log("positive"); // Output: "positive"
else if(numpos<0)
    console.log("negative");
else
    console.log("zero");

// - Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age=5;
if(age>=18)
        console.log("Eligible");
else    
        console.log("not Eligible"); // output:"not Eligible"

// Activity 2: Nested If-Else Statements

// - Task 3 Write a program to find the largest of three numbers using nested if-else statements.
let num1=10,num2=13,num3=5;
let max;
if (num1>=num2)
{
    if (num1>=num3) 
        max=num1;
    else 
    max=num3;
} 
else 
{
    if (num2>=num3) 
        max=num2;
    else 
        max=num3;
}   
 console.log(max); //output: 13

// Activity 3: Switch Case

// - Task 4 Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day=2;
switch(day)
{
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log("Invalid");
}
// output:Tuesday

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let grade=80;
switch(true) 
{
    case(grade>=85):
        console.log('A');
        break;
    case (grade>=75):
        console.log('B');
        break;
    case (grade>=65):
        console.log('C');
        break;
    case (grade>=55):
        console.log('D');
        break;
    case (grade>=45):
        console.log('E');
        break;
    default:
        console.log('F');
        break;
}
// output:B

// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let number=12;
(number%2==0)?console.log("even"):console.log("Odd");
// output:Even


// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year=2020;

if(year%400==0 ||(year%4==0 && year%100!=0))
    console.log("leap year");
else
    console.log("not a leap year");
// output:"leap year"