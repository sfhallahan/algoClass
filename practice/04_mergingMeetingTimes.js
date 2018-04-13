/* Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day 
when everyone is available.

To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with
integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

For example:

  {startTime: 2, endTime: 3}  // meeting from 10:00 – 10:30 am
{startTime: 6, endTime: 9}  // meeting from 12:00 – 1:30 pm

Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

For example, given:

  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]

your function would return:

  [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
]

Do not assume the meetings are in order. The meeting times are coming from multiple teams.

Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. 
Here we've simplified our times down to the number of 30-minute slots past 9:00 am. 
But we want the function to work even for very large numbers, like Unix timestamps. In any case, the spirit 
of the challenge is to merge meetings where startTime and endTime don't have an upper bound.

*/

/* 
My reasoning (on the second attempt)
    one option would be to loop through the meetings and push them to a new array
    compare whatever value were iterating on to each in the new array, if there is overlap merge them
    if there isn't push the new meeting to the result array

    would be better if we could sort it by start time, that way you would only have to make one compare
    against the new array (the latest meeting)
*/

function byStartTime(a, b) {
  return a.startTime >= b.startTime ? 1 : -1;
}

function mergeRanges(meetings) {
  let meetingsCopy = JSON.parse(JSON.stringify(meetings));
  meetingsCopy.sort(byStartTime);

  let mergedMeetings = [];
  mergedMeetings.push(meetingsCopy[0]);

  for (let i = 1; i < meetingsCopy.length; i++) {
    let mostRecentMerged = mergedMeetings[mergedMeetings.length - 1];
    if (meetingsCopy[i].startTime <= mostRecentMerged.endTime) {
      mostRecentMerged.endTime = Math.max(meetingsCopy[i].endTime, mostRecentMerged.endTime);
    } else {
      mergedMeetings.push(meetingsCopy[i]);
    }
  }

  return mergedMeetings;
}

const meetings = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 }
];
