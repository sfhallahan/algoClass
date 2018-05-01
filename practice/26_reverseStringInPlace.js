/*
Write a function that takes an array of characters and reverses the letters in-place.

Why an array of characters instead of a string?

The goal of this question is to practice manipulating strings in place. 
Since we're modifying the input, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.
*/

let myArr = ["s", "e", "a", "n"];

function reverseLettersInPlace(array) {
	if (array.length === 1) return array;
	const mid = Math.floor(array.length / 2);

	function swap(array, i1, i2) {
		let temp = array[i1];
		array[i1] = array[i2];
		array[i2] = temp;
		return array;
	}

	for (let i = 0; i < mid; i++) {
		swap(array, i, array.length - 1 - i);
	}
	return array;
}

reverseLettersInPlace(myArr);
