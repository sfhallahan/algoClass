/*
Sorting:  You should know the details of at least one n*log(n) sorting algorithm.

- Merge Sort 
    1) Divide input array into 'n' single element subarrays
        - an array of 1 element is technically 'sorted'
        - this is your base case for recursion
    2) Repeatedly merge subarrays and sort on each merge
*/

function merge(L, R) {
	let lPointer = 0;
	let rPointer = 0;
	let outputArray = [];

	while (lPointer + rPointer < L.length + R.length) {
		if (rPointer < R.length && (lPointer === L.length || L[lPointer] > R[rPointer])) {
			outputArray.push(R[rPointer]);
			rPointer++;
		} else {
			outputArray.push(L[lPointer]);
			lPointer++;
		}
	}
	return outputArray;
}

function mergeSort(list) {
	if (list.length < 2) {
		return list;
	}

	let mid = Math.round(list.length / 2); // rounds up
	let leftArray = list.slice(0, mid);
	let rightArray = list.slice(mid);
	console.log(`split into left: ${leftArray} and right: ${rightArray}`);

	leftArray = mergeSort(leftArray);
	rightArray = mergeSort(rightArray);

	return merge(leftArray, rightArray);
}

const test = [34, 32, 423, 342, 324, 23, 33, 2, 565, 5, 433, 2, 11];
