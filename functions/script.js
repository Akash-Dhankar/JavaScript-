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





