// The following exercise contains the following subjects:
// ● context
// Instructions
// Answer the following questions:
// Question 1:
// In your own words what will this point to and why?
// (Note this is the global scope)
   console.log(this);   //window
   //global.window
// Question 2:
// a. In your own words what will this point to and why?
// b. How can you fix this code?

//this on arrow function object = object ,so that undefined
// It actually makes sense. In the regular function, a function always defines its this value. Arrow functions treat this keyword differently. They don’t define their own context since it doesn’t have its own this context. They inherit that from the parent scope whenever you call this.
// this in regular function always refers to the context of the function being called. However, in the arrow function, this has nothing to do with the caller of the function. It refers to the scope where the function (the enclosing context) is present. That’s why we get undefined
const myObj = {
name: "Timmy",
greet: () => {
console.log(`Hello ${this.name}`);

},
};

   myObj.greet(); 
   //{} object empty //Hello Timmy

// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
console.log(this);
};

// Question 4:
// In your own words what will this point to and why?
 const myFuncArrow = () => {
 console.log(this);
 };
 myFuncArrow();
//  Question 5:
//  a. In your own words, what will this point to and why?
//  b. How can you fix this code?
 document.querySelector(".element").addEventListener(() => {
 console.log(this);
 });
 