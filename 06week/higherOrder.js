'use strict';

const assert = require('assert');

//1. Create a forEach() function that takes an array of items and a function
//that runs the function arr.length number of times.

const forEach =(array,callback)=>{
  for (let i=0; i<array.length;i++){
    console.log(array[i]);
    if (callback){
      console.log('callback present')
      callback(array[i]);
    }
  }
};


//Create a map() function that takes an array of items and a function
//that returns an array with each item manipulated by that function.
const map=(array,callback)=>{
  const mappedArray = [];
  for (let i=0; i<array.length;i++){
    console.log(array[i]);
    if (callback){
      console.log('callback present')
      mappedArray.push(callback(array[i]));
    }
  }
  return mappedArray;
};

//Create a filter() function that takes an array of items and a function that returns an array
//with only the items that return true in the function.
const filter =(array,callback)=>{
  const filteredArray=[];
  for (let i=0; i<array.length;i++){
    console.log(array[i]);
    if (callback(array[i])){
      console.log('callback present')
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
};

//Create a some() function that takes an array of items and a function
//that returns true or false if any of the items return true in the function.
const some =(array,callback)=>{
  for (let i=0; i<array.length;i++){
    console.log(array[i]);
    if (callback(array[i])) {
      return true
    }
  }
  return false;
};

//Create an every() function that takes an array of items and a function
//that returns true or false if all of the items return true in the function.
const every =(array,callback)=>{
  for (let i=0; i<array.length;i++){
    console.log(array[i]);
    if (!callback(array[i])){
      console.log('callback present');
      return false;
    }
  }
  return true;
};

if (typeof describe === 'function') {

  describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#some()', () => {
    let count = 0;
    const somed = some([1, 2, 3, 4], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return true if at least one item passes the predicate test', () => {
      assert.equal(somed, true);
    });
    it('should stop at the first item that passes the predicate test', () => {
      assert.equal(count, 2);
    });
    it('should return false if no items pass the predicate test', () => {
      const somed = some([1, 3, 5], (num) => {
        return num % 2 === 0;
      });
      assert.equal(somed, false);
    });
  });

  describe('#every()', () => {
    it('should return true if at all passes the predicate test', () => {
      const everied = every([2, 4, 6], (num) => {
        return num % 2 === 0;
      });
      assert.equal(everied, true);
    });
    let count = 0;
    const everied = every([2, 3, 4, 5], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return false if any item fails the predicate test', () => {
      assert.equal(everied, false);
    });
    it('should stop at the first item that fails the predicate test', () => {
      assert.equal(count, 2);
    });
  });

} else {

  console.log('Only run the tests on this one!')

}
