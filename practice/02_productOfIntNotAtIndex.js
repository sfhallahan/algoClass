/*You have an array of integers, and for each index you want to find the product of every integer except the integer at that 
index.

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [84, 12, 28, 21]

by calculating:

  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Do not use division in your solution. */

// Not efficient O(n^2) time. How can we do it faster?
function getProductsOfAllIntsExceptAtIndex(intArray) {
	if (intArray.length < 2) throw "Array must have at least 2 values";

	return intArray.map((value, index) => {
		let arrWithoutValue = [...intArray];
		arrWithoutValue.splice(index, 1);
		return arrWithoutValue.reduce((acc, value) => {
			return acc * value;
		}, 1);
	});
}

function getProductsOfAllIntsExceptAtIndexGreedy(intArray) {
	let productOfValuesAfter = [];
	let productOfValuesBefore = [];
	let outputArr = [];

	for (let i = 0; i < intArray.length; i++) {
		productOfValuesAfter.push(1);
		productOfValuesBefore.push(1);
	}

	for (let i = 0; i < intArray.length - 1; i++) {
		productOfValuesBefore[i + 1] = intArray[i] * productOfValuesBefore[i];
	}
	console.log(productOfValuesBefore);

	for (let i = intArray.length - 1; i > 0; i--) {
		productOfValuesAfter[i - 1] = intArray[i] * productOfValuesAfter[i];
	}
	console.log(productOfValuesAfter);

	for (let i = 0; i < intArray.length; i++) {
		outputArr[i] = productOfValuesBefore[i] * productOfValuesAfter[i];
	}

	return outputArr;
}

getProductsOfAllIntsExceptAtIndexGreedy([1, 7, 3, 4]);
