/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

function flatten(array) {
	let flattenedArray = [];
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			flattenedArray = flattenedArray.concat(flatten(array[i]));
		} else {
			flattenedArray.push(array[i]);
		}
	}

	return flattenedArray;
}

flatten([1, [2], [3, [[4]]]]);

function es6Flatten(array) {
	let flattenedArray = [];

	array.forEach(
		item =>
			Array.isArray(item)
				? (flattenedArray = [...flattenedArray, ...flatten(item)])
				: flattenedArray.push(item)
	);
	return flattenedArray;
}

es6Flatten([1, [2], [3, [[4]]]]);
