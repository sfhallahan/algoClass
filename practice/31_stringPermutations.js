/*Write a recursive function for generating all permutations of an input string. Return them as a set.

Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.

To start, assume every character in the input string is unique.

Your function can have loops—it just needs to also be recursive */

function stringPerms(string) {
	const setOfPerms = new Set();
	const stringArray = [];
	for (let i = 0; i < string.length; i++) {
		stringArray[i] = string.charAt(i);
	}
	function recurse(stringSoFar, remainingVals) {
		if (remainingVals.length === 0) {
			setOfPerms.add(stringSoFar);
		} else {
			remainingVals.forEach((val, i) => {
				let newRemainingVals = removeValueAtIndex(remainingVals, i);
				recurse(stringSoFar + val, newRemainingVals);
			});
		}
		return;
	}

	recurse("", stringArray);

	return setOfPerms;
}

function removeValueAtIndex(array, index) {
	if (array.length <= index) return [];

	if (index === 0) {
		return array.slice(1);
	} else if (index === array.length - 1) {
		return array.slice(0, array.length - 1);
	} else {
		return array.slice(0, index).concat(array.slice(index + 1));
	}
}

console.log(stringPerms("SEAN"));
