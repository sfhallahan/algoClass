/* 
Your company delivers breakfast via autonomous quadcopter drones. And something mysterious has happened.

Each breakfast delivery is assigned a unique ID, a positive integer. 
When one of the company's 100 drones takes off with a delivery, the delivery's ID is added to an array, deliveryIdConfirmations. 
When the drone comes back and lands, the ID is again added to the same array.

After breakfast this morning there were only 99 drones on the tarmac. 
One of the drones never made it back from a delivery. 
We suspect a secret agent from Amazon placed an order and stole one of our patented drones. 
To track them down, we need to find their delivery ID.

Given the array of IDs, which contains many duplicate integers and one unique integer, find the unique integer.

The IDs are not guaranteed to be sorted or sequential. 
Orders aren't always fulfilled in the order they were received, and some deliveries get cancelled before takeoff.

*/

// given array of id's with duplicates and one unique, find the unique

// map => key is ID, and the value is the count, loop through the array and push to the Map

const myDrones = [1, 2, 3, 4, 5, 4, 3, 2, 1];

function findMissingDrone(array) {
	const droneCount = new Map();

	array.forEach(droneId => {
		droneCount.has(droneId) ? droneCount.delete(droneId) : droneCount.set(droneId, 1);
	});

	return droneCount.entries().next().value[0];
}

findMissingDrone(myDrones);
