/*
Given an array of integers, find the highest product you can get from three of the integers.

The input arrayOfInts will always have at least three integers.

*/

function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) throw new Error("must have an input array of atleast length 3");

  let highProdOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  let highProdOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowProdOf2 = arrayOfInts[0] * arrayOfInts[1];
  let min = Math.min(arrayOfInts[0], arrayOfInts[1]);
  let max = Math.max(arrayOfInts[0], arrayOfInts[1]);

  for (let i = 2; i < arrayOfInts.length; i++) {
    let currentVal = arrayOfInts[i];
    highProdOf3 = Math.max(highProdOf3, highProdOf2 * currentVal, lowProdOf2 * currentVal);
    highProdOf2 = Math.max(highProdOf2, min * currentVal, max * currentVal);
    lowProdOf2 = Math.min(lowProdOf2, min * currentVal, max * currentVal);
    min = Math.min(min, currentVal);
    max = Math.max(max, currentVal);

    console.log("min is: ", min);
    console.log("highest Prod of 2 ", highProdOf2);
    console.log("lowest prod of 2 ", lowProdOf2);
    console.log("max is: ", max);
    console.log("highest product of three ", highProdOf3);
  }
  return highProdOf3;
}

const arrayOfInts = [1, 10, -5, 1, -100];
console.log(highestProductOf3(arrayOfInts));
