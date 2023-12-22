// document.getElementById("demo").innerHTML = time;

// regular expressions

//Precedence

// - ERRORS

// - try {
// -      Block of code to try
// -      if(condition) throw "error message"
// -   }
// -   catch(err) {
// -     Block of code to handle errors
// -   }

// - Eval Error
// - Range Error
// - Reference Error
// - Syntax Error
// - Type Error
// - URI (Uniform Resource Identifier) Error

// - function myfunction()
// - {
// -     let x = document.getElementById("demo3").value ;
// -     let message = document.getElementById("message");
// -     message.innerHTML = "";
// -     try{
// -         if(isNaN(x)) throw "not a number";
// -         if(x.trim()=="") throw "empty";
// -         x = Number(x);
// -         if(x < 5) throw "too low";
// -         if(x > 10) throw "too high";
// -     }
// -     catch(err){
// -         message.innerHTML = "input is " + err ;
// -     }
// -     finally{
// -         document.getElementById("demo3").value = "";
// -     }
// - }

// - JavaScript Scope

// - Block scope
// - Local scope
// - Function scope
// - Global scope
// - Automatically Global

// - JavaScript Hoisting

// - JavaScript Declarations are Hoisted
// - The let and const Keywords
// - JavaScript Initializations are Not Hoisted
// - Declare Your Variables At the Top !

// - JavaScript Use Strict
// - "use strict";

// - The JavaScript "this" Keyword

// - What is this?      
// - this in a Method
// - this Alone
// - this in a Function (Default)
// - this in a Function (Strict)
// - this in Event Handlers
// - Object Method Binding
// - Explicit Function Binding
// - Function Borrowing
// - This Precedence

// - const person1 = {
// -     fullname : function(){
// -         return this.firstname + " " + this.secondname ;
// -     }
// - }
// - const person2 ={
// -     firstname : "john",
// -     secondname : "cena"
// - }
// - // - call()
// - let x = person1.fullname.call(person2)
// - document.getElementById("demo").innerHTML = x ;

// - JavaScript Arrow Function

// hello = function() {
//     return "Hello World!";
//   }

// function hello(){
//     return "Hello World!";
//  }
  
// hello = () =>{
//     "Hello World!";
// } 

// this in arrow function represent the owner of the function (window)

// - JavaScript Classes

// - class cars{
// -     constructor(name,year){
// -         this.name = name;
// -         this.year = year;
// -     }
// -     age()
// -     {
// -         let d = new Date();
// -         let year =  d.getFullYear() - this.year;
// -         return year;
// -     }
// - }
// - const mycar = new cars("omni",2000);
// - console.dir(cars);
// - document.getElementById("demo").innerHTML = "mycar age is : " + mycar.age() + " years";

// - JavaScript Modules

// import message from "./message.js";

// document.getElementById("demo").innerHTML = message();

// - JavaScript JSON

// The JSON Format Evaluates to JavaScript Objects
// JSON Syntax Rules
// JSON Data - A Name and a Value
// JSON Objects
// JSON Arrays
// Converting a JSON Text to a JavaScript Object

// let text = '{"employees":[' +
//     '{"firstName":"John", "lastName":"Doe"},' + 
//     '{"firstName":"Anna", "lastName":"Smith"},' +
//     '{"firstName":"Peter", "lastName":"Jones"}]}';

// let obj = JSON.parse(text)
// document.getElementById("demo").innerHTML =
// obj.employees[1].firstName + " " + obj.employees[1].lastName;

// - Use "" instead of new String()
// - Use 0 instead of new Number()
// - Use false instead of new Boolean()
// - Use {} instead of new Object()
// - Use [] instead of new Array()
// - Use /()/ instead of new RegExp()
// - Use function (){} instead of new Function()