/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  // Place your code here.
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  let resultArray = new Array();
  for (let i = 0; i < this.length; i++)
    if(callbackFn(this[i]))
  resultArray[resultArray.length++] = this[i];
  return resultArray
};


// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
};

// EVERY //
// Tests if all elements in the array pass the test implemented by the provided function. Returns a boolean.
Array.prototype.myEvery = function(callbackFn) {
  for (let i = 0; i < this.length; i++){
    if (callbackFn(this[i]))
    return true;
  
    else{
      return false;
    }
  }
  
};

//const isBelowThreshold = (currentValue) => currentValue < 95;

//const array1 = [1, 30, 39, 29, 95, 90];

//console.log(array1.every(isBelowThreshold)); //native method

//console.log(array1.myEvery(isBelowThreshold)); //my method 

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};