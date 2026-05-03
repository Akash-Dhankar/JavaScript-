// Array functions 

// Arrays help you store multiple values in a single variable — numbers, strings, or even objects/functions.

// ------- Common Array Methods -----------
// -----Modifiers (Change original array)

let arr = [1, 2, 3, 4];
arr.push(5); // Add to end
arr.pop(); // Remove last
arr.shift(); // Remove first
arr.unshift(0); // Add to start
arr.splice(1, 2); // Remove 2 items starting at index 1
arr.reverse(); // Reverse order

// -----Extractors (Don't modify original array)

let newArr = arr.slice(1, 3); // Copy from index 1 to 2
arr.sort(); // Lexical sort by default


// *********** splice changes original array, slice does not*******************

// ---------------Iteration Methods----------------

// 1) map() - Returns a new array with modified values.

const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]



// 2) filter() - Filters out elements based on a condition.

const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]

const odd = nums.filter(function (val){
    console.log(val%2!=0);
})


// 3) reduce() - Reduces the array to a single value.

const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

// 4) forEach() - Performs an action for each element (but returns undefined).

nums.forEach(n => console.log(n));

nums.forEach(function(val){
    console.log(val+5);
});                         

// 5) find(), some(), every()

nums.find(n => n > 2); // First match
nums.some(n => n > 5); // At least one true
nums.every(n => n > 0); // All true

// sort - ascending order

let arr = [11,62,3,4,25];
let sortedArr = arr.sort(function(a,b){
    return a-b;
})

// b-a - descending order

// sort , map , filter , each - all accept functions inside each


// ---------------Destructuring in js--------------------

let arr = [1,2,3,4,5];
let[a,b,c] = arr; // 1,2,3
let[a,b, ,c] = arr; //1,2,4
console.log(a,b,c);

let arr = [1,2,3,4,5];
let arr2 = arr; // creates a refernce in arr2 , not a copy , which means that any changes made in arr2 will reflect in arr

let arr3 = [...arr]; // creates a copy , meaning any changes in arr3 wont affect arr
// the above operator[... arr] is called the spread operator


let colors = ["Green","Blue","Red"];
colors.splice(1,0); // output same as input array
colors.splice(1,0,"Yellow");

colors.sort(); //ascending order
colors.sort().reverse(); //descending order

//------USE MAP TO SQUARE EACH NUMBER

let arr = [1,2,3,4];
let newArr = arr.map(function(val){
      return val*val;
});

//---destructuring-----
let fn = ["Harsh","Sharma"];
let[fname,lname] = fn;


//merge two arrays using spread operator

let a = [1,2];
let b = [3,4];

let c = [...a,...b];


// add india to start of array using spread

let c = ["USA","UK"];
c = ["India",...c];

