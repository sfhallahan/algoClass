/* 
Your quirky boss collects rare, old coins...

They found out you're a programmer and asked you to solve something they've been wondering for a long time.

Write a function that, given:

an amount of money
an array of coin denominations
computes the number of ways to make the amount of money with coins of the available denominations.

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢,2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢

*/

function makeChange(amount, denominations, combination = []) {
  let ways = 0;

  if (amount < 0) {
    console.log("too many");
    return 0;
  }

  if (amount === 0) {
    console.log("found a way");

    return 1;
  }

  denominations.forEach(denom => {
    ways += makeChange(amount - denom, denominations);
  });

  return ways;
}

let denominations = [1, 2, 3];

// how to remove duplicates?
