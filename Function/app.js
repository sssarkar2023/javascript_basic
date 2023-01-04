
//Function 
/*
function showMessage()
{
    console.log(`Hi..I am learning Javascript`);
}

//Calling the function 

showMessage();
*/
//Example 2
/*
function Adeesha()
{
    console.log("Hi Adeesha..What are you doing?");
}

function Nitesh()
{
    console.log("Hi Nitesh ..What are you doing?");
}

Nitesh();
Adeesha();
*/

/*
function Nitesh()
{
    console.log("Hi Nitesh ..What are you doing?");
}


Nitesh();
Nitesh();
Nitesh();

*/

/*
function showMessage()
{
    let message = "Hello I am learning Javascript";

    alert(message);
}

showMessage();
*/

/*
let username = "Sanchita";//Outer variable or global variable

function showMessage()
{
    let message = `Hello ${username}`;

    console.log(message);
}

showMessage();

console.log(username);
*/

/*
let username = "Rahul";

function showMessage()
{
    username = "Sanchita";

    let message = `Hello ${username}`;

    console.log(message);
}

console.log(username);
showMessage();

console.log(username);

//If a same variable name is declared inside the function then it shadows the outer 
// variable name.
*/

/*
let username = "Sanchita";//global variable

function showMessage()
{
    let username = "Rahul"; //local varibale

    let message = `Hello ${username}`;

    console.log(message);

}

console.log(username);

showMessage();

console.log(username);

//Varibales declared outside of any function such as outer username are called global variables.
//Global variables are visible from any function unless shadowed by locals.
*/

/*
function showMessage(color1, color2,color3,color4,color5) {
    
    let colors=color1+" "+color2+" "+color3+" "+color4+" "+color5;
    console.log(colors);

}

showMessage("Green", "Red", "Blue", "Violet", "Yellow");

showMessage("Yellow", "Black", "Orange", "Fuchsia", "Lightblue");
*/

//Default values
/*
function colors(color1, color2="Red")
{
    colors = color1 + " " + color2;
    console.log(colors);
}

colors("Blue");
*/


/* add 2 numbers */


/*
function add(x, y)
{
    let result = x + y;
    console.log(`The addition of two numbers: ${result}`);
}
function sub(x, y)
{
    let result = x - y;
    console.log(`The subtraction of two numbers: ${result}`);
}
function mul(x, y)
{
    let result = x * y;
    console.log(`The multiplication of two numbers: ${result}`);
}
function div(x, y)
{
    let result = x / y;
    console.log(`The division of two numbers: ${result}`);
}

//add(12, 10);


add(100, 600);

sub(550, 200);

mul(100, 200);

div(200, 5);

*/


//return statement in a function 

//The return statement can be used to return the value to a function call.

//If nothing is returned, the function returns an undefined value.

/*
function add(a, b)
{
    return a + b;
}
function sub(a, b)
{
    return a - b;
}
function mul(a, b)
{
    return a * b;
}
function div(a, b)
{
    return a / b;
}

let addition = add(20, 12);
console.log(`The addition is :${addition}`);

let subtraction = sub(20, 12);

console.log(`The subtraction is :${subtraction}`);

let multiplication = mul(20, 12);

console.log(`The multiplication is :${multiplication}`);

let division = div(20, 2);

console.log(`The division is :${division}`);

*/

/*
function add(a, b)
{
    let result = `Addition is: ${a + b}`;

    return result;
}

function sub(a, b)
{
    let result = `Subtraction is: ${a - b}`;

    return result;
}

function mul(a, b)
{
    let result = `Multiplication is: ${a * b}`;

    return result;
}

function div(a, b)
{
    let result = `Division is: ${a / b}`;

    return result;
}

let addition = add(20, 12);
console.log(addition);

let subtraction= sub(20, 12);
console.log(subtraction);

let multiplication = mul(20, 12);
console.log(multiplication);

let division = div(20, 2);
console.log(division);
*/

//Function expression 

//Functions can also be defined as expressions. 

/*
let addition=function add(a, b)
{
    return a + b;
}

console.log(addition(20,12));

//In the above program, variable addition is used to store the function.
//Here the function is treated as an expression.Here the function is called
//using the variable name.

let subtraction=function sub(a, b)
{
    return a - b;
}

console.log(subtraction(20, 12));


let multiplication=function mul(a, b)
{
    return a * b;
}

console.log(multiplication(20, 12));

let division=function div(a, b)
{
    return a / b;
}

console.log(division(20, 10));
*/

/* Square of a number */

/*
let square_of_a_number = function (number) {
    return number * number;
}

console.log(square_of_a_number(6))

let result = square_of_a_number(3)

console.log(`The square of a number 3 is :${result}`);
*/

/*

let check_Score=function checkScore(currentScore, passingScore)
{
    if (currentScore >= passingScore)
    {
        return "Passed";
    } else {
        return "Failed";
    }

}

let first_Score = check_Score(90, 55);

console.log(`The first result is :${first_Score}`);

let Second_Score = check_Score(55, 45);

console.log(`The second result is :${Second_Score}`);

let Third_Score = check_Score(45, 55);

console.log(`The third result is :${Third_Score}`);

*/

/* Movie Performance*/

/*
let movie_Performance=function moviePerf(movieName, boxOffice) {
    
    return `The ${movieName} has grossed ${boxOffice} billion`;
}


let first_movie_Performance = movie_Performance("Jurassic Park", 1.8);

console.log(first_movie_Performance);

let second_movie_Performance = movie_Performance("Family Man", 1.3);

console.log(second_movie_Performance);

let third_movie_Performance = movie_Performance("Sooryavansham", 1);

console.log(third_movie_Performance);
*/

/* Calculate Age */

/*
let Current_Person_Age=function calculateAge(birthYear) {

    return 2021 - birthYear;

}

let first_Person_Age = Current_Person_Age(1980);

console.log(`The first Person Age is ${first_Person_Age}`);

let second_Person_Age = Current_Person_Age(1990);

console.log(`The second Person Age is ${second_Person_Age}`);

let third_Person_Age = Current_Person_Age(1970);

console.log(`The third Person Age is ${third_Person_Age}`);
*/


// Function can be passed as values
/*
function add(x, y)
{
    return x + y;
}

let subtract=function(x, y)
{
    return x - y;
}

function mul(x, y)
{
    return x * y;
}

let division=function(x, y)
{
    return x / y;
}

//We can store functions in an array
let arithmetic_operations = [add,subtract,mul,division];

//Loop over all the functions in an array usinf for of loop

for (let func of arithmetic_operations)
{
    let result = func(20, 10);
    console.log(`The arithmetic operation: ${result}`);
}
*/

//Function accepts another function as an argument 

//This function called and taking as an argument as a function, here the function is shout.
//Indirectly we are calling shout() function 3 times inside the call_Function\
/*
function call_Function(func) {
    //Calling function (func) 
    func();
    func();
    func();
}

function shout() {
    console.log("😚😚😙Speaking loudly");
}

function cry() {
    console.log("Crying...");
}


//This call_function is taking shout function as a paramter and calling the call_function
//call_Function(shout);
call_Function(cry);
*/


//Function accepst another function as arguments Example 2
/*
function callThreeTimes(f)
{
    f();
    f();
    f();
}

function smile()
{
    console.log("😁Smiling...😃");
}

function happy()
{
    console.log("Happy")
}

callThreeTimes(smile);

callThreeTimes(happy);

*/

//Function accept another function as arguments  Example 3  

/*
function callTimes(fnc, number) {
    
    for (i = 1; i <= number; i++) {
        fnc();
    }
}
function smile()
{
    console.log("😁Smiling...😃");
}
function happy()
{
    console.log("Happy")
}

callTimes(smile, 5);
callTimes(happy, 7);

*/

//Function accept another function as arguments  Example 4
/*
function pickOne(fnc1, fnc2) {    
    let rndm = Math.random();
    console.log(rndm);    
    if (rndm < 0.5)
    {
        fnc1();
    }
    else {
        fnc2();
    }
}
function smile()
{
    console.log("😁Smiling...😃");
}
function happy()
{
    console.log("Happy")
}

pickOne(smile, happy);
*/


//Returning multiple values from a function using an array 

/*
function names()
{
    let name1 = "Rohit";

    let name2 = "Rahul";

    let name3 = "Seema";

    let name4 = "Krishna";

    let name5 = "Suraj";

    //returning as an array

    return [name1, name2, name3, name4, name5];
}


let name_list = names();

console.log(`List of names: ${name_list}`);
*/


//Returning multiple values from a function using an array Example 2

/*
function names(n1,n2,n3,n4,n5)
{
    let name1 = n1;
    let name2 = n2;
    let name3 = n3;
    let name4 = n4;
    let name5 = n5;
    //returning as an array
    return [name1, name2, name3, name4, name5];
}

let name_list1 = names("Rahul", "Sumit", "Seema", "Teena", "Kiran");

let name_list2 = names("Abhishek","Rajat","Mohan","Reena","Nitesh");

console.log(`List of names: ${name_list1}`);

console.log(`List of names: ${name_list2}`);
*/

/* Function returns a function */

/*
function muitiplyBy(num)
{
    return function (n1)
    {
        return n1 * num;
    }
}

let triple = muitiplyBy(3);

console.log(triple);

console.log(triple(4));

console.log(triple(5));

console.log(triple(6));

let double = muitiplyBy(2);

console.log(double(2));

console.log(double(3));

console.log(double(4));


let halve = muitiplyBy(0.5);

console.log(halve(5));

console.log(halve(6));

console.log(halve(100));

*/

/* Function returns a function */
/* Example 2*/
/*
function makeBetweenFunc(x, y)
{
    return function (num) {
        return num >= x && num <= y;
    }
}
//this function checks if a value is between 0 and 18
let range1 = makeBetweenFunc(0, 18);

console.log(range1(10));

console.log(range1(58));

console.log(range1(27));

let IsNineties = makeBetweenFunc(1990, 1999);
console.log(IsNineties(1994));
console.log(IsNineties(1985));
*/


//Anonymous Functions

//An anonymous function is a function without a name.

//This function has no name between the function keyword and paranthesis ().

//Example 1
/*
let func = function () {

    console.log("Anonymous Function");
}

func();

*/

//Example 2

//Built in function called setTimeout() function ,this function will output the 
//anonymous function after 3 second.

/*
setTimeout(
    function () {
    console.log("Calling Anonymous Function");
    }, 3000);

    */

/*
function display() {
    console.log("An Anonymous Function");
    
}

setTimeout(display, 3000);
*/

//IIFE (Immediately Invoked Function Expression)

//If you want to create a function that will exceute immediately after the declaration,
// we can use anonymous function. T

//Example 1
/*
(
    function () {
        console.log("Immediately Invoked Function Expression");
    }
)();


//Example 2

(
    function add(a, b) {
        let x = a + b;
        console.log(x);
    }
)(12,12);

*/


//Arrow Function

//ES6 (EcmaScript 6 )

//ES6 introduced arrow function expression that provides a short hand for declaring
// anonymous functions.

//Normal Anonymous Function

/*
let display = function () {
    console.log("Anonymous Function");
}

display();
*/

//Above code is rewritten using arrow function 


/*
 Syntax of arrow function:

 let func= (arg1,arg2,arg3,...argN)=>expression;


 The above code creates a fucntion name func that accepts arg1,agr2,arg3 to argN (arguments), then evaluates the expression on the right side with their use and return its result.

Above mentioned arrow function is a shorter version of this below function
 let func=function(arg1,arg2,....arg3)
 {
 return expression;
 }
 
 */
/*
let display = () => {
    console.log("Anonymous Function");
}

display();
*/

//Arrow Function - Example 2

/*
let sum = function (a, b) {
    console.log(`${a + b}`);
}

sum(12, 12);

*/

/*
let sum = (a, b) => {
    
    return a + b
};
*/
/*
let sum = (a, b) =>  a + b;
console.log(sum(12, 12));
*/

//Arrow Function - Example 3

let isEven = (num) => {
    
    return num % 2 === 0;
}

console.log(isEven(24));

console.log(isEven(25));



