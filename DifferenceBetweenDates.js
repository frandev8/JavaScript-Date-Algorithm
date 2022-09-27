// To Calculate the difference (timestamp) between two dates.


// In in this project let's check for how long my Nationality Identity Card will last before it expires.  


// Current date  
const today = new Date();

// Specific date it expires (track date)
const trackDay = new Date("December 29, 2029");

// Days left in milliseconds
const milliSecondsDayLeft = trackDay.getTime() - today.getTime();

// converting days left from milliseconds to days
const daysLeft = Math.floor(milliSecondsDayLeft / (1000*60*60*24)) + " days left.";

console.log(daysLeft);


