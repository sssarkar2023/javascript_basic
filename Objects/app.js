
/*

Object is an unordered collection of key-value pairs where each key-value pair is called a property.

The key can be a string and the value can be any valid Javascript value like string,number,an array or even a function.

When we declare a function as a property of an object, we can call this as a method.

*/

/* Object Example 1*/

let object1 = {};

console.log(object1);

/* Object Example 2*/

/* person object with two properties firstName and lastName with the corresponding values Rajesh and Kumar.

When an object has multiple properties, we can use comma to separate the line.
*/
/*
let person = {
    firstName: "Rajesh",
    lastName:"Kumar"
};
console.log(person);
*/


/* How to access properties */

/* We can access property of an object using dot notation. 
objectname.propertyName


*/

/* Object Example 3*/
/*
let person = {
    firstName: "Rajesh",
    lastName:"Kumar"
};

console.log(person.firstName);

console.log(person.lastName);
*/


/* Array notation for accessing properties

objectName["propertyName"]

*/
/*
let person = {
    firstName: "Rajesh",
    lastName:"Kumar"
};

console.log(person["firstName"]);

console.log(person["lastName"]);
*/

/* Object Example 4 */
/*
let person = {
    
    name: "Sam",
    age: "35",
    "Full Address": "Mumbai,Andheri",
    job: "Designer",
    dob: 1985,
    1985:"DOB"
};

console.log(person);

console.log(person.name);

console.log(person["age"]);

console.log(person["Full Address"]);

console.log(person.dob);

console.log(person[1985]);


*/

/* Modifying the value of a property */
/*
let person = {
    firstName: "Rajesh",
    lastName:"Kumar"
};

console.log(person);
console.log(person.firstName);
/* We can chnage tha value of a property by suing = (assignment operator)
person.firstName = "Suresh";
console.log(person);
console.log(person.firstName);
 */

/* Object Example 5 */
/*
let movieRatings = {
    "Mission Impossible": 9.1,
    Inception: 8.8,
    "Dark Knight": 8.9,
    "Superman": 7.7
};

console.log(movieRatings);

console.log(movieRatings["Inception"]);
console.log(movieRatings["Mission Impossible"]);

movieRatings["Mission Impossible"] = 9.8;

movieRatings["Dark Knight"] = 5.5;

console.log(movieRatings);

/* Adding new property 
movieRatings["Venom3"] = 8.1;

console.log(movieRatings);
*/

/* Object Example 6*/
/*
let palette = {
    
    red: "#eb4d4b",
    yellow: "#f9ca24",
    blue: "#30336b"
};

console.log(palette);

console.log(palette.red, palette.yellow, palette.blue);

//Updating one property
palette.yellow = "#dfgr55";
console.log(palette.red, palette.yellow, palette.blue);

//Updating one more property
palette["blue"] = "#6ghtgh";

console.log(palette.red, palette.yellow, palette.blue);

//New Property not added inside the object
let mysteryColor = "#45tyhg";

console.log(palette[mysteryColor]);

*/

/* Object Example 7*/
/*
let userReviews = {};


userReviews['MissionImpossible'] = 8.8;

userReviews.Inception = 9.2;

userReviews["Dark Knight"] = 9.5;

console.log(userReviews);
*/


/* Object Example 8 */

/*
let person = {
  
    firstName: "Rajat",
    lastName: "Sharma",
    age: 2021 - 1990,
    job: "Designer",
    friends:["Teena","Suraj","Raj"]
};

console.log(person);

console.log(`First Name: ${person.firstName}\nLast Name: ${person.lastName}\nAge: ${person.age}\nJob: ${person.job}\nFriend 1: ${person.friends[0]}\nFriend 2: ${person.friends[1]}\nFriend 3: ${person.friends[2]}`);

let nameKey = 'Name';

console.log(person['firstName']);

console.log(person['last' + nameKey])

console.log(person["first" + nameKey]);


let interestedIn = prompt('What do you want to know about this person? Choose between firstName, lastName,age,job and friends');

if (person[interestedIn])
{
    console.log(person[interestedIn])
}
else {
    console.log("Wrong request! Choose between firstName, lastName,age,job and friends")
}

person.location = "San Francisco";

person["twitter"] = '@rajatsharma';

console.log(person);

*/

/* Object Example 9*/
/* Methods Example 1 */
/*
let person = {
    firstName: "Rohit",
    lastName: "Kumar",
    age: 24
};
*/
/*
We used a function expression to create a function and assigned it to the welcome property of the person object.
Then we call the function via the welcome property as welcome()
*/
/*
person.welcome = function () {
    
    console.log("Welcome Rohit!!!")
}

console.log(person);

person.welcome();
*/

/* Methods Example 2 */
/*
let person = {
    firstName: "Rohit",
    lastName: "Kumar",
    age: 24
};
function welcome() {
    console.log("Welcome Rohit");
}

function call_Person()
{
    console.log("Person called...");
}
person.welcome = welcome;
person.call_Person = call_Person;
console.log(person);
person.welcome();
person.call_Person();
console.log(`First Name:${person.firstName}\n Last Name:${person.lastName}\nAge:${person.age}\n`);
console.log(person.welcome());
console.log(person.call_Person());
*/


/* Method Example 3*/

/* 

It is possible to define methods of an object using the object literal syntax which is as shown in this example. 

ES6 (EcmaScript 6) provides us with the method syntax that allows us to make it shorter to define a method for an object.

let person = {
    firstName: "Rohit",
    lastName: "Kumar",
    age: 24,
    welcome: function () {
        console.log("Welcome Rohit");
    }
};

person.welcome();
*/

/* Method Example 4

let person = {
    firstName: "Rohit",
    lastName: "Kumar",
    job: "Desginer",
    friends: ["Teena", "Suraj", "Raj"],    
    calcAge1: function (birthYear) {
        return 2021 - birthYear;
    },
    calcAge2: function (birthYear) {
        let age = 2021 - birthYear;
        return age;
    }
};

let age1 = person.calcAge1(1985);
let age2 = person.calcAge2(1976);

console.log(`Age is ${age1}`);
console.log(`Age is ${age2}`);

*/
/*
let name1 = "Javascript";

function fun()
{
    console.log(name1);
}

window.fun();
*/

/* this keyword */
/* 
this references the object of which the function is a property, we can say in other words this references the object that is currently calling the function. 

When we call the next() method we can access the this object.
In this example inside the next() function this references the counter object.

The next() function is the property of the counter object, so inside the next() function
this references the counter object.

*/
/*
let counter = {
    count: 0,
    next: function () {
        return ++this.count;
    }
}

console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
*/

//Example 2 (this keyword)

/* 
this references in this ecample to the global object which is the window object on the web browser.



console.log(this);

console.log(this === window);
*/
/*

If we assign a property to this object in the global context, Javascript will add the proeprty to the global object as shown in the below example


this.counter = 0;

console.log(++window.counter);

*/

//Example 3 (this keyword)
/*
let mobile = {
    
    brand: "Samsung",
    
    getbrand: function () {
        return this.brand;
    }
};

console.log(mobile.brand);

console.log(`this keyword references to the mobile here ${mobile.getbrand()}`);

*/

//Ecample 4 (this keyword)
/*
let mobile = {
    
    brand: "Samsung",
    
    getbrand: function () {
        return this.brand;
    }
};
*/
//console.log(mobile.getbrand());

//let brand = mobile.getbrand();

//console.log(brand);


/* 
In the below code, we are getting undefined instead of Samsung because when we call a method without specifying its object, Javascript sets this to the global object(window object). 

//let brand2 = mobile.getbrand;
//console.log(brand2());

So to fix this issue we can use bind() method,which creates a new function whose  this keyword is set to a specified value. 

Now when we call brand() method, this keyword is bound to the mobile object.
let brand3 = mobile.getbrand.bind(mobile);
console.log(brand3());
*/

/* this keyword


let person = {
    firstName: "Rohit",
    lastName: "Kumar",
    birthYear:1991,
    job: "Desginer",
    friends: ["Teena", "Suraj", "Raj"],  
    hasDriverlicense: true,
    calcAge1: function () {
        return 2021 - this.birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge1()} years old. He has ${this.hasDriverlicense ? 'a':'no'} driver's license.`
    }
};

console.log(person.getSummary());

console.log(person.calcAge1());
*/


/* This keyword 

let person =
{
    firstName: "Raj",
    lastName: "Kumar",
    greet: function () {
        console.log("Hello");
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.getFullName());
*/

/* in operator to check property exists or not 

let employee = {
    
    firstName: "Kiran",
    employeeID: 101,
    age: 45
};
*/
/* 
The in operator returns true if the propertyName exists in the objectName.
In this example we have created an employee object ans uses the in operator to check
if the lastName and age properties exist in the object.

Syntax:
propertyName in objectName

console.log('lastName' in employee);
console.log('age' in employee);
*/
/* delete a property of an object */
/* 
We can delete a property of an object using the delete operator.

Syntax:

delete objectName.propertyName;

We have deleted the age property from the employee object.
After the delete operation if we attempt to access the age property again, we will get
undefined.


delete employee.age;

console.log('age' in employee);

console.log(employee.age);
*/

/* BMI Example */

/* BMI= mass/height*height   */

let Raj = {
    fullName: "Raj Sinha",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

let Rohit = {
    fullName: "Rohit Shetty",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

Raj.calcBMI();
Rohit.calcBMI();


if (Raj.bmi > Rohit.bmi) {
    console.log(`${Raj.fullName}'s BMI (${Math.floor(Raj.bmi)}) is higher than ${Rohit.fullName}'s BMI (${Rohit.bmi})`);

} else if (Rohit.bmi > Raj.bmi) {
    console.log(`${Rohit.fullName}'s BMI (${Rohit.bmi}) is higher than ${Raj.fullName}'s BMI (${Raj.bmi})`);
}

