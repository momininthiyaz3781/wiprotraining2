[10:45 AM] Maria (Unverified)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>Document</title>
  <script src="script.js"></script>  
    <!-- <script src="employee.js"></script> -->
    <!-- <script type="module" src="main.js"></script> -->
   
</head>
<body>
    <!-- <h1 id="message"></h1> -->
 <h1>I am a body of this Page</h1>
 
</body>
</html>
........................................
[10:45 AM] Maria (Unverified)
 
/*
console.log("Hi");// dynamically typed programming language
var c=9; //outdated
let a=10;
const pi=3.14;
console.log('a value is '+a);
console.log('pi value is '+pi);
console.log('c value is '+c);
*/
 
/* //try alert box
let uname=prompt("Enter ur name?");
console.log("entered name is "+uname);
*/
 
/*
 
//if else
let age=60; let gender='female';
 
if(age>60 && gender=='female'){
console.log("u can avail special conc");
}
else
{
console.log("sorry , u can not");
}
 
console.log("bye");
 
*/
 
// Looping statement - for, while,do while
 
/*
for(let i=1;i<=5;i++){
  //  console.log("Hello");
    console.log(i);
 }
*/
 
/*
let i=10;
while(i>=1){
    console.log(i);
    i--;
 
}
*/
 
 
/*let i=10;
 
do{
    console.log(i);
    i--;
}
while(i>=1);
*/
 
/*
let arr=['Maria','priya','swathi','archu'];
//for loop
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//for each loop
for(let name1 of  arr){
    console.log(name1);
}
*/
 
/* //example function 1
 function addNumbers(a,b){// defining the function
    return a+b;
   
 }
 console.log(addNumbers(4,5)); // calling the function
console.log(addNumbers);
console.log(typeof(addNumbers));
*/
/*
//example function 2
function isPositive(num){
     return num>0
}
console.log(isPositive(3));
*/
/*
//example function 3
function sayHello(){
    console.log('Hello');
}
sayHello();//Hello
*/
 
/*
//example function 4 // default parameter
function greet(uname ='there'){
    console.log('hi',uname)
}
greet('Maria');
*/
/*
//example function 5
let isEven =function(num){
    return num%2==0
}
console.log(isEven(6));
*/
 
let volume=function(l,b,h){
    return l*b*h;
    }
  //  console.log(volume(1,2,3));
 
    let volume1=(l,b,h) =>l*b*h;
    console.log(volume1(1,2,3));
