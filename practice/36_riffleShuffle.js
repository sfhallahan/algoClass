/*
I figured out how to get rich: online poker.

I suspect the online poker game I'm playing shuffles cards by doing a single riffle. ↴

To prove this, let's write a function to tell us if a full deck of cards shuffledDeck is a single riffle of two other halves half1 and half2.

We'll represent a stack of cards as an array of integers in the range 1.52 (since there are 52 distinct cards in a deck).
Why do I care? A single riffle is not a completely random shuffle. 
If I'm right, I can make more informed bets and get rich and finally prove to my ex that I am not a "loser with an unhealthy cake obsession" 
(even though it's too late now because she let me go and she's never getting me back).
*/

// walking down shuffled deck
// should match either top of 1 or two whichever one becomes the active deck
// increment active deck and shuffledeck pointers until they dont match
// switch active deck to opposite

// 3 pointers
// Shuffled deck
// half 1
// half 2

function checkRiffle(shuffledDeck, half1, half2) {
	let shuffleDeckPointer,
		half1Pointer,
		half2Pointer = 0;
	let activeDeck = half1;
	let activePointer = half1Pointer;

	while (
		shuffleDeckPointer < shuffleDeck.length &&
		half1Pointer < half1.length &&
		half2Pointer < half2.length
	) {
		if (shuffledDeck[shuffledDeckPointer] === activeDeck[activePointer]) {
			activePointer++;
			shufflePointer++;
		} else {
			// swap active deck and pointer and check
			//if false return false
		}
	}
}
