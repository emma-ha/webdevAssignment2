/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// Emma Haque

// MAP //
// Creates a new array that calls the calling array and provides the results of the function in the new array.
Array.prototype.myMap = function(callbackFn) {
  let newArray = [];

  for (let i = 0; i < this.length; i++){
    newArray.push(callbackFn(this[i]));
  }

  return newArray;
};


// FILTER //
//Creates a shallow copy of the given array and filters it to only the elements that pass the given functions test
Array.prototype.myFilter = function(callbackFn) {
  let resultArray = new Array();
  for (let i = 0; i < this.length; i++)
    if(callbackFn(this[i]))
  resultArray[resultArray.length++] = this[i];
  return resultArray
};


// SOME //
//Tests if at least one element in the array passes the test provided by the given function
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
// executes a reducer call back function on all elements in the array 
Array.prototype.myReduce = function(callbackFn) {
  let red = 0
  j = this.length

  for(let i = 0; i <= this.length; i++)
  {
      red = callbackFn(red, this[i])
      if(i == j)
      {
        return red 
      }
  }
};

// INCLUDES //
// determines if a certain value is in the array's entries
Array.prototype.myIncludes = function(searchElement) {
  t = true
if(!(loc))
{
      for(let i = 0; i < this.length; i++)
    {
        if(this[i] == value) 
        {
          return t
        }
    }
    return false
}
else
{
    for(let i = loc; i < this.length; i++)
    {
        if(this[i] == value)
        {
          return t
        }
    }
    return false
}

};


// INDEXOF //
// Returns first index where the given element can be found
// returns -1 if not present
Array.prototype.myIndexOf = function(searchElement) {
  if (this === undefined){
    return -1;
  }
  let found = false;
  for (let i = 0; i < this.length; i++){
    if(this[i] === searchElement){
      found = true;
      return i;
    }
  }
  if (found === false){
    return -1;
  }
};

// LASTINDEXOF //
// Returns last index where the given element can be found
// returns -1 if not present
Array.prototype.myLastIndexOf = function(searchElement) {
  if (this === undefined){
    return -1;
  }
  let found = false;
  for (let i = this.length; i > 0; i--){
    if(this[i] === searchElement){
      found = true;
      return i;
    }
  }
  if (found === false){
    return -1;
  }
};




// KEYS //
//returns a new array iterator object that contains the keys for each index in the array
Object.myKeys = function(object) {
 let newArray = [];

  for (let i in object){
    newArray.push(i);
  }
  return newArray;
};



// VALUES //
// returns a new array iterator object that iterates through value of each index in the array
Object.myValues = function(object) {

    for (let i in object){
      newArray.push(object[i]);
    }
    return newArray;
};



