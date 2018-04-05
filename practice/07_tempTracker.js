/*
You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.

Write a class TempTracker with these methods:

insert()—records a new temperature
getMax()—returns the highest temp we've seen so far
getMin()—returns the lowest temp we've seen so far
getMean()—returns the mean ↴ of all temps we've seen so far
getMode()—returns a mode ↴ of all temps we've seen so far
Optimize for space and time. Favor speeding up the getter methods getMax(), getMin(), getMean(), and getMode() 
over speeding up the insert() method.

Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll 
all be in the range 0..1100..110.

If there is more than one mode, return any of the modes.
*/

class TempTracker {
  constructor() {
    this._temps = [];
    this._mean = null;
    this._mode = null;
    this._modeCount = new Map();
  }

  insert(newTemp) {
    this._temps.push(newTemp);
    this._temps.sort((a, b) => a - b);
    this._setMean();
    this._setMode(newTemp);
  }
  getMax() {
    if (this._temps.length === 0) throw new Error("cannot get max, no temps recorded yet");
    return this._temps[this._temps.length - 1];
  }

  getMin() {
    if (this._temps.length === 0) throw new Error("cannot get min, no temps recorded yet");
    return this._temps[0];
  }

  _setMean() {
    let sum = this._temps.reduce((acc, val) => acc + val, 0);
    this._mean = sum / this._temps.length;
    console.log("new mean is ", this._mean);
  }

  getMean() {
    if (this._temps.length === 0) {
      throw new Error("cannot get mean temp, no temps recorded yet");
    }
    return this._mean;
  }

  _setMode(newTemp) {
    if (this._modeCount.has(newTemp)) {
      this._modeCount.set(newTemp, this._modeCount.get(newTemp) + 1);
    } else {
      this._modeCount.set(newTemp, 1);
    }
    let newMode = newTemp;
    let maxCount = 1;
    for (let temp of this._modeCount) {
      console.log("logging temp for mode ", temp);
      if (temp[1] > maxCount) {
        maxCount = temp[1];
        newMode = temp[0];
      }
    }
    this._mode = newMode;
  }

  getMode() {
    if (this._temps.length === 0) throw new Error("cannot get mode, no temps recorded yet");
    return this._mode;
  }
}

let myTempTracker = new TempTracker();
myTempTracker.insert(3);
myTempTracker.insert(5);
myTempTracker.insert(12);
myTempTracker.insert(82);
myTempTracker.insert(110);

/*
Gotchas
We can get O(1)O(1) time for all methods.

We can get away with only using O(1)O(1) additional space. If you're storing each temperature as it comes in, be careful! You might be taking up O(n)O(n) space, where nn is the number of temperatures we insert!

Are you trying to be fancy about returning multiple modes if there's a tie? Good idea, but read the problem statement carefully! Check out that last sentence!

Failing to carefully read or listen to the problem statement is a very common mistake, and it always looks bad. Don't let it happen to you.

Breakdown
The first thing we want to optimize is our getter methods (per the instructions).

Our first thought might be to throw our temperatures into an array or linked list as they come in. With this method, getting the maxTemp and minTemp would take O(n)O(n) time. It would also cost us O(n)O(n) space. But we can do better.

What if we kept track of the maxTemp and minTemp as each new number was inserted?

That's easy enough:

  function TempTracker() {
    this.minTemp = null;
    this.maxTemp = null;
}

TempTracker.prototype.insert = function(temperature) {
    if (this.maxTemp === null || temperature > this.maxTemp) {
        this.maxTemp = temperature;
    }
    if (this.minTemp === null || temperature < this.minTemp) {
        this.minTemp = temperature;
    }
};

TempTracker.prototype.getMax = function() {
    return this.maxTemp;
};

TempTracker.prototype.getMin = function() {
    return this.minTemp;
};

This wins us O(1)O(1) time for getMax() and getMin(), while keeping O(1)O(1) time for insert() and removing the need to store all the values.

Can we do something similar for getMean()?

Unlike with minTemp and maxTemp, the new temp and the previous mean won't give us enough information to calculate the new mean. What other information will we need to track?

To calculate a mean we need to know:

how many values there are
the sum of all the values
So we can augment our class to keep track of the numberOfReadings and totalSum. Then we can compute the mean as values are inserted:

  function TempTracker() {

    // for mean
    this.numberOfReadings = 0;
    this.totalSum = 0;
    this.mean = null;

    // for min and max
    this.minTemp = null;
    this.maxTemp = null;
}

TempTracker.prototype.insert = function(temperature) {

    // for mean
    this.numberOfReadings++;
    this.totalSum += temperature;
    this.mean = this.totalSum / this.numberOfReadings;

    // for min and max
    if (this.maxTemp === null || temperature > this.maxTemp) {
        this.maxTemp = temperature;
    }
    if (this.minTemp === null || temperature < this.minTemp) {
        this.minTemp = temperature;
    }
};

TempTracker.prototype.getMax = function() {
    return this.maxTemp;
};

TempTracker.prototype.getMin = function() {
    return this.minTemp;
};

TempTracker.prototype.getMean = function() {
    return this.mean;
};

Can we do something similar for the mode? What other information will we need to track to compute the mode?

To calculate the mode, we need to know how many times each value has been inserted.

How can we track this? What data structures should we use?

Solution
We maintain the maxTemp, minTemp, mean, and mode as temperatures are inserted, so that each getter method simply returns a property.

To maintain the mean at each insert, we track the numberOfReadings and the totalSum of numbers inserted so far.

To maintain the mode at each insert, we track the total occurrences of each number, as well as the maxOccurrences we've seen so far.

  function TempTracker() {

    // for mode
    this.occurrences = [];  // array of 0s at indices 0..110
    for (var i = 0; i < 111; i++) {
        this.occurrences[i] = 0;
    }
    this.maxOccurrences = 0;
    this.mode = null;

    // for mean
    this.numberOfReadings = 0;
    this.totalSum = 0;
    this.mean = null;

    // for min and max
    this.minTemp = null;
    this.maxTemp = null;
}

TempTracker.prototype.insert = function(temperature) {

    // for mode
    this.occurrences[temperature]++;
    if (this.occurrences[temperature] > this.maxOccurrences) {
        this.mode = temperature;
        this.maxOccurrences = this.occurrences[temperature];
    }

    // for mean
    this.numberOfReadings++;
    this.totalSum += temperature;
    this.mean = this.totalSum / this.numberOfReadings;

    // for min and max
    if (this.maxTemp === null || temperature > this.maxTemp) {
        this.maxTemp = temperature;
    }
    if (this.minTemp === null || temperature < this.minTemp) {
        this.minTemp = temperature;
    }
};

TempTracker.prototype.getMax = function() {
    return this.maxTemp;
};

TempTracker.prototype.getMin = function() {
    return this.minTemp;
};

TempTracker.prototype.getMean = function() {
    return this.mean;
};

TempTracker.prototype.getMode = function() {
    return this.mode;
};

We don't really need the getter methods since they all return properties. We could directly access the properties!

  // method
tempTracker.getMean();

// property
tempTracker.mean;
JavaScript
We'll leave the getter methods in our solution because the question specifically asked for them.

But otherwise, we probably would use properties instead of methods. In JavaScript we usually don't make getters if we don't have to, to avoid unnecessary layers of abstraction. But in Java we would use getters because they give us flexibility—if we wanted to change how we calculate values (for example, we might want to calculate a value just-in-time ↴ ), it won't change how other people interact with our class—they wouldn't have to switch from using a property to using a getter method. Different languages, different conventions.

Complexity
O(1)O(1) time for each method, and O(1)O(1) space related to input! (Our occurrences array's size is bounded by our range of possible temps, in this case 0-110)

What We Learned
This question brings up a common design decision: whether to do work just-in-time or ahead-of-time.

Our first thought for this question might have been to use a just-in-time approach: have our insert() method simply put the temperature in an array, and then have our getters compute e.g. the mode just-in-time, at the moment the getter is called.

Instead, we used an ahead-of-time approach: have our insert method compute and store our mean, mode, max, and min ahead of time (that is, before they're asked for). So our getter just returns the pre-computed value in O(1)O(1) time.

In this case, the ahead-of-time approach doesn't just speed up our getters...it also reduces our space cost. If we tried to compute each metric just-in-time, we'd need to store all of the temperatures as they come in, taking O(n)O(n) space for nn insert()s.

As an added bonus, the ahead-of-time approach didn't increase our asymptotic time cost for inserts, even though we added more work. With some cleverness (channeling some greedy ↴ thinking to figure out what we needed to store in order to update the answer in O(1)O(1) time), we were able to keep it at O(1)O(1) time.

It doesn't always happen this way. Sometimes there are trade-offs between just-in-time and ahead-of-time. Sometimes to save time in our getters, we have to spend more time in our insert.

In those cases, whether we should prefer a just-in-time approach or an ahead-of-time approach is a nuanced question. Ultimately it comes down to your usage patterns. Do you expect to get more inserts than gets? Do slow inserts have a stronger negative effect on users than slow gets?

We have some more questions dealing with this stuff coming up later.

Whenever you're designing a data structure with inserts and getters, think about the advantages and disadvantages of a just-in-time approach vs an ahead-of-time approach.





*/
