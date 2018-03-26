/*
Write a function that takes a string and returns all permutations of the string. Ensure that there are no duplicates in the output.
*/

function swap(array, i, j) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
	return array;
}

function stringPerm(str) {
	let charArray = str.split("");
	let perms = [];

	function recurse(charArray, startIndex, endIndex) {
		if (startIndex === endIndex) {
			perms.push(charArray.join(""));
			return;
		}
		for (let i = startIndex; i <= endIndex; i++) {
			charArray = swap(charArray, startIndex, i);
			recurse(charArray, startIndex + 1, endIndex);
			charArray = swap(charArray, startIndex, i);
		}
	}

	recurse(charArray, 0, charArray.length - 1);
	return perms;
}
