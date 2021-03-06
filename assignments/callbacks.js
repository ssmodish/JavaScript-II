console.log('\n\n------------------------------------------\n');
console.log('------------   CALLBACKS.JS   ------------\n');
console.log('------------------------------------------\n');
// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

// ========== Challenge 1 ?????????????
console.log('========== Challenge 1 ?????????????');
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

const lengthSquared = function(length){
  return length * length;
}

console.log(getLength(items, lengthSquared));



// ========== Challenge 2 ?????????????
console.log('\n\n========== Challenge 2 ?????????????');
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

const lastItemCapped = function(lastItem){
  return lastItem.toUpperCase();
}

console.log(last(items, lastItemCapped));



// ========== Challenge 3 ?????????????
console.log('\n\n========== Challenge 3 ?????????????');
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

const halved = function(whole){
  return whole / 2;
}

console.log(sumNums(9, 7, halved));




// ========== Challenge 4 ?????????????
console.log('\n\n========== Challenge 4 ?????????????');
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

console.log(multiplyNums(9, 7, halved));



// ========== Challenge 5 ?????????????
console.log('\n\n========== Challenge 5 ?????????????');
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let tOrF = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      tOrF = true;
    }
  }
  return cb(tOrF);
}

function doesContain(truf) {
  if (truf) {
    console.log("We have it!");
  } else {
    console.log("We don't have it");
  }
  return;
}

contains('Pencil', items, doesContain);

/* STRETCH PROBLEM */
// ========== Stretch Challenge 
console.log('\n\n========== Stretch Challenge ');

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

console.log('\n\nEnd of callbacks.js');