//if statement checking for single condition

//Example 1
/*
let x = 25;

//x = 8;

if (x > 10)
{
    console.log("Value of x is greater than 10");
}
*/

//Example 2
/*
if (1 === "1")
{
    console.log("1 is euqal to 1");
}
*/
//Example 3
/*
const x = 23;
const y = 10;
if (x > y)
{
    console.log("23 is greater than 10");
}
*/
//else statement checking for two conditions
//Example 1
/*
let x = 5;

//x = 8;

if (x > 10)
{
    console.log("Value of x is greater than 10");
}
else
{
    console.log("Value of x is not greater than 10");
}
*/

/*
let score = 20;

score = 70;

if (score === 70)
{
    console.log("Grade A")
}
else {
    console.log("Some other Grade")
}
*/
/*
let x = 24;

x = 21;

//% is called modulus operator in programming
if (x % 2 == 0)
{
    console.log("Even number");
}
else {
    console.log("Odd number");
}
*/

/*
let a = 35;
a = 45;

if (a === 10) {
    console.log("a is equal to 10");
}
else if (a === 20) {
    console.log("a is equal to 20");

}
else if (a === 35)
{
    console.log("a is equal to 35");
}
else if (a === 56)
{
    console.log("a is equal to 56");
}
else
{
    console.log("a is not equal to 10,20,35,and 56");
}
*/

/*
let score = 6;
score = 35;
if (score === 80)
{
    console.log("Grade A")
}
else if (score === 50)
{
    console.log("Grade B");
}
else if (score === 35)
{
    console.log("Grade C");
}
else {
    console.log("Grade D");
}
*/

/*
marks = 87;

marks = 45;

marks = 30;

if (marks > 85 && marks <= 100)
{
    console.log("Congrats!! You scored Grade A");
}
else if (marks > 60 && marks < 85)
{
    console.log("You scored Grade B+");
}
else if (marks > 40 && marks <= 60)
{
    console.log("You scored Grade B");
}
else if (marks > 30 && marks <= 40)
{
    console.log("You scored Grade C");
}
else
{
    console.log("Sorry you failed this time..Please try again later..");
}

*/

/*
let score = 9;

switch (score)
{
    case 10:
        console.log("Grade A");
        break;
    case 9:
        console.log("Grade B");
        break;
    case 8:
        console.log("Grade C");
        break;
    default:
        console.log("No match");
}
*/

// Thw switch expression is evaluated once, then the value of the expression
//is compared with the value of each case.
//If there is a match, then the associated block of code is executed
//otherwise if no match then the default code is executed.

//break
//When Javascript reaches break keyword, it breaks completely out of switch block
//which means this will stop the execution inside the switch block
//The default keyword specifies the code to run if there is no case match

/*
let dice = 4;

switch (dice)
{
    case 1: console.log("You got one");
        break;
    case 2:
        console.log("You got two");
        break;
    case 3:
        console.log("You got three");
        break;
    default:
        console.log("You did not roll the dice");
    
}
*/

//let day = "Wednesday";
//The prompt() method displays a dialog box that prompts the visitor for input.
//It is often used if we want the user to input a value before entering a page
/*
let day = prompt("Please type any day: ");
switch (day)
{
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Not a valid day");

}
*/

//let day = "Tuesday";
/*
let day=prompt("Please type any day from Monday to Sunday: ")

switch (day)
{
    case "Monday":
        console.log("Monday Food Preparation");
        console.log("Gobi Manchurian");
        console.log("Dal recipe");
        break;
    case "Tuesday":
        console.log("Tuesday Food Preparation");
        console.log("Aloo Gobi");
        break;
    case "Wednesday":
        console.log("Wednesday Food Preparation");
        console.log("Paneer recipe");
        console.log("Aloo Paratha");
        break;
    case "Thursday":
        console.log("Thursday Food Preparation");
        console.log("Kadai paneer recipe");
        console.log("Rice");
        break;
    case "Friday":
        console.log("Friday Food Preparation");
        console.log("Veg Biryani recipe");
        console.log("Pizza");
        break;
    case "Saturday":
        console.log("Saturday Food Preparation");
        console.log("Tofu recipe");
        console.log("Paneer fried rice");
        break;
    case "Sunday":
        console.log("Sunday Food Preparation");
        console.log("Chole Bhature recipe");
        console.log("Dal Makhni rice");
        break;
    default:
        console.log("Not a valid day, Please type the day correctly");
}
*/

/*
let day=prompt("Please type any day from Monday to Sunday: ")

switch (day)
{
    case "Monday":
        console.log("Monday Food Preparation");
        console.log("Gobi Manchurian");
        console.log("Dal recipe");
        break;
    case "Tuesday":
        console.log("Tuesday Food Preparation");
        console.log("Aloo Gobi");
        break;
    case "Wednesday":
    case "Thursday":
        console.log("Wednesday & Thursday Food Preparation");
        console.log("Paneer recipe");
        console.log("Aloo Paratha");
        break;
    case "Friday":
        console.log("Friday Food Preparation");
        console.log("Veg Biryani recipe");
        console.log("Pizza");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Saturday & Sunday Food Preparation");
        console.log("Chole Bhature recipe");
        console.log("Dal Makhni rice");
        break;

    default:
        console.log("Not a valid day, Please type the day correctly");
}
*/

//Ternary Operator

let age = 22;

let voteable = (age > 18) ? "Yes you can vote" : "Not now age is below 18";

console.log(voteable);