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
  let newArray = [];

  for (let i = 0; i < this.length; i++){
    newArray.push(callbackFn(this[i]));
  }

  return newArray;
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
  let bool = true 

  for(let i = 0; i < this.length; i++)
  {
      if(!(callbackFn(this[i])))
      {
          bool = false
      }
      else
      {
          continue
      }
  }
  return bool
};


// EVERY //
// Tests if all elements in the array pass the test implemented by the provided function. Returns a boolean.
Array.prototype.myEvery = function(callbackFn) {
  let bool = true

  for(let i = 0; i < this.length; i++)
  {
      if(!callbackFn(this[i])) 
      {
        bool = true
      }
        else
      {
        continue
      }
  }
  return bool
};


// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
 

};


// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  
  
};




// KEYS //
Object.myKeys = function(object) {
 let arr = [];

  for (keys in object){
      newArray.push(keys)
  }

  return arr;

};



// VALUES //
Object.myValues = function(object) {
    let newArray = [];
    for (values in object){
      newArray.push(object[values])
    }
    return newArray;
};

//const array1 = ['a', 'b', 'c'];
//const iterator = array1.myValues();

//for (const value of iterator) {
//  console.log(value);
//}

// expected output: "a"
// expected output: "b"
// expected output: "c"

