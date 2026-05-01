// Q1 - What is the difference between function declaration and expression in terms of hoisting ?

//=============================================================================================================

// Q2 - Answer is greet , since it is a function statement and not function expression

greet();

function greet(){
    console.log("Hello!");
}

//=============================================================================================

// Q3 - Convert this function into an arrow function

function multiply(a,b){
    return a*b;
}

// ANSWER 

let multiply = (a,b) => {
    return a*b;
}


//========================================================================================

// Q4 Identify parameters and arguments : 

function welcome(name){
    console.log(name);
}
welcome("Harsh");

//ANS - harsh is argument , name is parameter

//=======================================================================================

// Q5 - Predict the output of the following

function sayHi(name = "Guest"){
    console.log("Hi",name);
}
sayHi();

// Ans : Hi Guest 

function sayHi(name = "Guest"){
    console.log("Hi",name);
}
sayHi("Akash");

//Ans : Hi Akash

//==========================================================================================

// Q6 - What does the ... operator mean in parameters ?
// Ans - It is a Rest Operator , which stores output as array 

//================================================================================================

// Q7 - Use rest parameters to accept any number of scores and return the total
//ANS : 

function getScore(...scores){
    console.log(scores);
}

getScore(10,12,14,18);

// [10,12,14,18] is the output

function getScore(...scores){
    let total = 0;
    scores.forEach(function (val){
        total = total + val;
    });
    console.log(total);
}

getScore(10,12,14,18);

// 54 is the output

// one more way to write the above code

function getScore(...scores){
    let total = 0;
    scores.forEach(function (val){
        total = toatl + val;
    });
    return total;
}

console.log(getScores(10,12,14,18));

//================================================================================================

// Q9 - Fix the given function using early return  : 

function checkAge(age){
    if(age<18){
        console.log("Too young");
    }
    else{
        console.log("Allowed");
    }
}

//ANS - 

function checkAge(age){
    if(age<18) return "Too young";
    return "Allowed";
}
console.log(checkAge(23));

//=======================================================================

// Q10 - What is the output ? 

function f(){
    return;
}
console.log(f());

// ANS is undefined

//===============================================================================

// Q11 - Identify the higher order function 

[1,2,3].map(function(x){
    return x*2;
});

// Ans - map is the hof. 

// Q 12 - Convert this impure function to pure function 

let total = 0;
function addToTotal(num){
    total+=num;
}

// Ans :- 

let total = 0;
function addToToatal(num){
    let newTotal = total;
    newTotal+=num; 
}

//========================================================================================

//  Q13 Convert this normal function into an IIFE

function init(){
    console.log("Done");
}

// ANS :-

(function init(){
    console.log("Done");
})();

// When we want to create a private function , we use IIFE.



