/*
You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.

To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map ↴ ,
where the keys are words and the values are the number of times the words occurred.

We'll use a JavaScript Map instead of an object because it's more explicit—we're mapping words to counts. 
And it'll be easier and cleaner when we want to iterate over our data.

Think about capitalized words. For example, look at these sentences:

"After beating the eggs, Dana read the next step Add milk and eggs, then add flour and sugar."
What do we want to do with "After", "Dana", and "add"? In this example, your final map should include one "Add" or "add" with a value of 2. '
Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".

Assume the input will only contain words and standard punctuation.

You could make a reasonable argument to use regex in your solution. 
We won't, mainly because performance is difficult to measure and can get pretty bad.
*/

class wordCloudData {
	constructor() {
		this.wordMap = new Map();
	}

	addNewStringToData(sentence) {
		let wordStartIndex = 0;

		for (let i = 0; i < sentence.length; i++) {
			if (this.isPunctuation(sentence.charAt(i))) {
				let newWord = sentence.slice(wordStartIndex, i).toLowerCase();
				if (this.wordMap.has(newWord)) {
					this.wordMap.set(newWord, this.wordMap.get(newWord) + 1);
				} else {
					this.wordMap.set(newWord, 1);
				}
				while (this.isPunctuation(sentence.charAt(i)) && i < sentence.length) {
					i++;
				}
				wordStartIndex = i - 1;
			}
		}

		return this.wordMap;
	}

	isPunctuation(character) {
		return ".,? ".indexOf(character) >= 0;
	}
}

let myString =
	"After beating the eggs, Dana read the next step Add milk and eggs, then add flour and sugar.";

const myWordCloud = new wordCloudData();

myWordCloud.addNewStringToData(myString);

console.log(myWordCloud.wordMap);
