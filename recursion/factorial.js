/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/

function factorial(input) {
	// base case input < 2

	if (input < 2) {
		return 1;
	}
	return input * factorial(input - 1);
}

factorial(10);
