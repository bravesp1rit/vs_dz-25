'use strict';

// IndexOf
let arr = [1,3,4,6,8,9];
function IndexOf (array, searchElement, fromIndex = 0){
    if (fromIndex >= array.length) return -1;
    if (fromIndex < 0) {
      fromIndex = array.length + fromIndex;
      if (fromIndex < 0){
        fromIndex = 0;
      }
    }
    if (searchElement === undefined) return -1;
    for(let i = fromIndex; i < array.length; i++){
        if (array[i] === searchElement) return i;
    }
    return -1;
}
console.log(IndexOf(arr, 9));

// lastIndexOF
let arr2 = [1,2,4,5,7,'o'];
function lastIndexOf(strarr, item) {
  for(let i = 0; i <= strarr.length; i++){
    if (strarr[i] === item) return i+1;
  }
  return -1;
}
console.log(lastIndexOf(arr2, 'o'));

// find
let arr3 = [1,2,3,4,5,6,7]
function find (arr, cb) {
  for(let i = 0; i < arr.length; i++){
    if (cb(arr[i])) return arr[i];
  }
  return undefined;
}
console.log(find(arr3, function(item){
  return item % 2 === 1;
})); 


// findIndex
let arr4 = [1,23,6,51,6,7,87,8,875];
function findIndex (arr, cb){
  for (let i = 0; i < arr.length; i++){
    if(cb(arr[i])) return i+1;
  }
  return -1;
}
console.log(findIndex(arr4, function(item){
  return item % 2 === 0;
}));

// includes
let arr5 = [1, 'q', 'w', 'f', 0];
function includes (arr, item){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === item) return true;
  }
  return false;
}
console.log(includes(arr5, 'f'));
console.log(includes(arr5, 2));

// every
let arr6 = [1, 6, 4, 7, 9, 5];
function every (arr, cb){
  for(let i = 0; i < arr.length; i++){
    if(!cb(arr[i]))return false;
  }
  return true;
}
console.log(every(arr6, function(item){
  return item < 10;
}));

// some
let arr7 = [1, 6, 4, 7, 9, 5];
function some (arr, cb){
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i]))return true;
  }
  return false;
}
console.log(some(arr7, function(item){
  return item > 10;
}));