/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/

function reverse(str) {
	if (str.length === 1) return str;
	return reverse(str.substr(1)) + str.charAt(0);
}
