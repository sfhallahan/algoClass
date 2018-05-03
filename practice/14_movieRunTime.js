/*

You've built an inflight entertainment system with on-demand movie streaming.

Users on longer flights like to start a second movie right when their first one ends, 
but they complain that the plane usually lands before they can see the ending. So you're building a 
feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths 
(in minutes) and returns a boolean indicating whether there are two numbers in movieLengths 
whose sum equals flightLength.

When building your function:

Assume your users will watch exactly two movies
Don't make your users watch the same movie twice
Optimize for runtime over memory
*/

// read the problem statement wrong... this is the solution for 2 movies under the flight time not exact
// READ THE QUESTION CAREFULLY MORON
function twoMovies(flightLength, movieLengths) {
  let shortestMovie = movieLengths[0];
  let canWatchTwoMovies = false;

  for (let i = 1; i < movieLengths.length; i++) {
    let totalRuntime = shortestMovie + movieLengths[i];
    if (totalRuntime < flightLength) {
      canWatchTwoMovies = true;
      break;
    }
    shortestMovie = Math.min(shortestMovie, movieLengths[i]);
  }

  return canWatchTwoMovies;
}

// worst case we could iterate over both and see if the combination
// of any two equals the total
function exactlyTwoMoviesQuadratic(flightLength, movieLengths) {
  for (let i = 0; i < movieLengths.length - 1; i++) {
    for (let j = i + 1; j < movieLengths.length; j++) {
      let totalLength = movieLengths[i] + movieLengths[j];
      if (totalLength === flightLength) return true;
    }
  }
  return false;
}

function exactlyTwoMovies(flightLength, movieLengths) {
  // loop through once to store the store the time remaining for each movie in a set
  // loop through again doing a look up in the set O(1) time for
}

movieLengths = [90, 120, 123, 45, 115, 35];
