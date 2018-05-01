/*You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of 
the insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned 
stock of cakes—the vault of the Queen of England.

While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.

Each type of cake has a weight and a value, stored in an object with two properties:

weight: the weight of the cake in kilograms
value: the monetary value of the cake in British shillings
For example:

  // weighs 7 kilograms and has a value of 160 shillings
{weight: 7, value: 160}

// weighs 3 kilograms and has a value of 90 shillings
{weight: 3, value: 90}

You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.

Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, 
and returns the maximum monetary value the duffel bag can hold.

For example:

  var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var capacity = 20;

maxDuffelBagValue(cakeTypes, capacity);
// returns 555 (6 of the middle type of cake and 1 of the last type of cake)

Weights and values may be any non-negative integer. Yes, it's weird to think about cakes that weigh nothing or duffel bags that can't hold anything. But we're not just super mastermind criminals—we're also meticulous about keeping our algorithms flexible and comprehensive.
*/

var cakeTypes = [{ weight: 7, value: 160 }, { weight: 3, value: 90 }, { weight: 2, value: 15 }];

var capacity = 20;
/* not good enough. We might run into problems if the weight of the cake with the highest value/weight ratio doesn’t fit evenly into the capacity. */
function maxDuffelBagValue(cakeTypes, capacity) {
	// sort bag by the highest value/weight ratio
	// fill with as many of that type
	//

	const sortedCakes = [...cakeTypes];
	sortedCakes.sort((a, b) => {
		let aRatio = a.value / a.weight;
		let bRatio = b.value / b.weight;
		return aRatio - bRatio;
	});
	console.log(sortedCakes);

	let totalValue = 0;
	let capacityRemaining = capacity;
	let cakeIndex = sortedCakes.length - 1;

	while (cakeIndex >= 0 && capacityRemaining > 0) {
		console.log(`cake index ${cakeIndex}, capacity remaining ${capacityRemaining}`);
		// try the cake with the highest remaining  value/weight ratio
		if (capacityRemaining - sortedCakes[cakeIndex].weight >= 0) {
			totalValue += sortedCakes[cakeIndex].value;
			capacityRemaining = capacityRemaining - sortedCakes[cakeIndex].weight;
		} else {
			cakeIndex--;
		}
	}
	return totalValue;
}

maxDuffelBagValue(cakeTypes, capacity);

// attempt 2 with answers as prompts

function maxDuffelBagValue(cakeTypes, capacity) {
	let highestValueAtCapacity = [];
	for (let i = 0; i <= capacity; i++) {
		highestValueAtCapacity[i] = 0;
	}
	console.log(`created array, ${highestValueAtCapacity}`);

	for (let currentCapacity = 1; currentCapacity <= capacity; j++) {
		let maxValueAtCurrentCapacity = highestValueAtCapacity[currentCapacity - 1];

		cakeTypes.forEach(cake => {
			if (cake.weight <= currentCapacity) {
				maxValueAtCurrentCapacity = Math.max(
					maxValueAtCurrentCapacity,
					cake.value + highestValueAtCapacity[currentCapacity - cake.weight]
				);
			}
		});
		console.log(`highest value for capacity ${j} is ${maxValueAtCurrentCapacity}`);
		highestValueAtCapacity[currentCapacity] = maxValueAtCurrentCapacity;
	}

	return highestValueAtCapacity[capacity];
}

var cakeTypes = [{ weight: 7, value: 160 }, { weight: 3, value: 90 }, { weight: 2, value: 15 }];

var capacity = 20;

maxDuffelBagValue(cakeTypes, capacity);
