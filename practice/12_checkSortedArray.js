/*
Suppose we had an array ↴ of n integers sorted in ascending order. How quickly could we check if a given 
integer is in the array?
*/

/*
    write a function that searches the array
    brute force, iterate through
    since its sorted we can divide and conquer search O(logn) time
*/

function valuesIsInArray(array, value) {
  // base cases
  // found the value
  // array length 1 and no value
  // pick index at middle of the array
  // if value at that index is greater than search value recurse with the range from 0 to index as new array
  // if less do the opposite
}
