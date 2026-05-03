//any code which we dont want to run immediately , and only run it when we need , 
//we need to use function . 

function dance(){
    console.log("Hi");
}

dance(); // calling function 

// *Function name cant start with numbers , keywords , special characters*

// function declaration : It is also the Functional Statement

function fnc(){

}


//----------------Function Expression : ---------------

let fnc = function(){
     console.log("Hey");
}

fnc();


//----------------FAT ARROW FUNCTION--------------------

let fnc = () => {
    console.log("hey fat arrow function");
}

fnc();

//------------To input dynamic values , like you dont want to print hey everytime , use backticks and ${} ------------

function dance(v1){
    console.log(`${v1} is dancing`)
}

dance("Kutta");
dance("Gadha");


//------------Send more than one paramaters also in fnc-------

function add(v1,v2){                 // this is parameter
    console.log(v1+v2);
}

add(1,2);                            // this is argument

// ------- If we pass variables in the parameters , but in the arguments , no value is passed 
// IT GIVES US UNDEFINED 

function add(v1,v2){                 
    console.log(v1,v2);
}

add();                        // OUTPUT IS UNDEFINED,UNDEFINED

// ------------------------If we try to add 2 undefined values , it gives us NaN (Not a number)


// --------When e have a lot of arguments , we need to create that many number of paramaters ,
// --------To avoid this , we use rest operator ...
// ----- If we use ... in the function parameter , it is rest operator


function print(...val){
    console.log(val);
}

print(1,2,3,4,5,6);

//  output is [1,2,3,4,5,6]

function print(a,b,c,...val){
    console.log(a,b,c,val);
}

print(1,2,3,4,5,6);

// output is 123 [4,5,6]

// return statement 

function print(){
    return 12;
}

let ans = print();

//early returns 






// first class functions - treat functions as values
// if you can pass values in the function , then you can also pass function inside this function (since function can be treated as values)

function abcd(val){
     val();
}

abcd(function(){
     console.log("hey");
})

// this is exactly what is higher order function(here abcd is a hof)
// a function that returns another function or accepts another function in its parameters

//------Pure vs Impure Functions-------
// a function that doesnt change the value of outer function is pure function
// a function that changes the value of outer function is impure function

let a = 12;
function abcd(){
    console.log("Hey");
}

//above is a pure function

let a = 12;
function abcd(){
    a++;
}

//above is an impure function

//----------------Closures---------------------
// A function that returns another function and that return function uses the variable of the parent function

function abcd(){
    let a = 12;
    return function(){
        console.log(a);
    }
}

// in the above example of closure , the variable of parent function abcd is a = 12
// the return function uses that variable a inside it .

//------------------Lexical scoping-------------------
// the scope of variable inside that function , is where it can be used and accessed


//-------------IIFE - Immediately invoked function expression-----------------

(function(){
    console.log("IIFE function");
})();

// this code is invoked immediately and run immediately


//------------Hoisting--------------------

// calling a function even before it is written

abcd()

function abcd(){
    console.log("Hositing");
}

// above function statement works in hoisting 
// But if we write like this (below) , function expression doesnt wor in hoisting

abcd()

let abcd = function(){
    console.log("Function Expression doesnt work in hoisting");
}


// ----------------------------TDZ - Temporal DeadZone --------------------------------------------

// TDZ is the time between variable declaration and initialization where the variable cannot be accessed.
// Mainly occurs when we use function expression 
//Function Expression uses let/const → falls into TDZ

console.log(a); // ❌ ReferenceError
let a = 10;

// a is hoisted , but not initialised yet . so TDZ



sayHi(); // ❌ ReferenceError

const sayHi = function () {
  console.log("Hi");
};

 // For the above

// During hoisting:
// sayHi → uninitialized (TDZ)
// When calling:
// sayHi(); accessing before initialization 

// ReferenceError (TDZ)

sayHi(); // ❌ TypeError

var sayHi = function () {
  console.log("Hi");
};

// using var - No TDZ → no ReferenceError but TypeError



// Arrow funvtion 

greet(); // ❌ ReferenceError

const greet = () => {
  console.log("Hello");
};

// Same as function expression , Same TDZ behavior
// Use keyword function to allow hoisting. let,var,const dont allow hoisting 


