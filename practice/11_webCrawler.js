/*
I'm making a search engine called MillionGazillion™.

I wrote a crawler that visits web pages, stores a few keywords in a database, and follows links to other web pages. 
I noticed that my crawler was wasting a lot of time visiting the same pages over and over, so I made a set, visited, 
where I'm storing URLs I've already visited. Now the crawler only visits a URL if it hasn't already been visited.

Thing is, the crawler is running on my old desktop computer in my parents' basement (where I totally don't live anymore), 
and it keeps running out of memory because visited is getting so huge.

How can I trim down the amount of space taken up by visited?
*/

// Using a set..
// Goal optimize for space
// I have no idea

// What is common? SOmething like www is repeated... can use a trie (common set of prefixes...)
// Tree with children as

function Trie() {
  this.storage = {};
}

Trie.prototype.storeUrl = function(url) {
  let currentNode = this.storage;
  let isNewWord = false;
  console.log(url);
  for (let i = 0; i < url.length; i++) {
    let char = url[i];
    if (!currentNode.hasOwnProperty(char)) {
      currentNode[char] = {};
      isNewWord = true;
    }

    currentNode = currentNode[char];
  }

  if (!currentNode.hasOwnProperty("*")) {
    currentNode["*"] = {};
    isNewWord = true;
  }
  return isNewWord;
};

const myTrie = new Trie();
myTrie.storeUrl("www.sean.com");
myTrie.storeUrl("www.seanhallahan.com");
myTrie.storeUrl("ww.com");
myTrie.storeUrl("ww.com");
console.log(myTrie.storage);
