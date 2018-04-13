/*

I want to learn some big words so people think I'm smart.

I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. 
I put each word I didn't know at increasing indices in a huge array I created in memory. 
When I reached the end of the dictionary, I started from the beginning 
and did the same thing until I reached the page I started at.

Now I have an array of words that are mostly alphabetical, except they start 
somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. 
In other words, this is an alphabetically ordered array that has been "rotated." For example:

  var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

Write a function for finding the index of the "rotation point," which is where I started working from the beginning 
of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.
*/

// brute force - iterate through comparing adjacent values, if a > b index of B is rotation point

// take samples at intervals, if the value between those intervals changes, recurse using that subset O(logn) time

function findRotationPoint(words, startIndex = 0, endIndex = words.length - 1) {
  console.log(`checking values from ${startIndex} to ${endIndex}`);

  if (array.length < 2) throw new Error("array must have more than one value");

  if (endIndex - startIndex < 2) {
    if (words[startIndex] > words[endIndex]) {
      return endIndex;
    } else {
      return "Array is not rotated";
    }
  }

  let half = Math.round((startIndex + endIndex) / 2);

  if (words[startIndex] > words[half]) {
    return findRotationPoint(words, startIndex, half);
  } else if (words[half] > words[endIndex]) {
    return findRotationPoint(words, half, endIndex);
  } else {
    return "Array is not rotated";
  }
}

let words = [
  "ptolemaic",
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "zebra",
  "asymptote", // <-- rotates here!
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage"
];
let wordsTwo = [
  // not rotated
  "asymptote",
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage",
  "ptolemaic",
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "zebra"
];

findRotationPoint(words);
