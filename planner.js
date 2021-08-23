const moment = require("moment.js");
var time = document.querySelector('.time');
// when the planner opens the current day and time will be displayed at the top of the page
moment().format();
moment.duration().days();
moment.duration().asDays();
//when the user scrolls down event block will appear from a 8 hour shift

// if an event block has already passed the current time it will change the block to a red color\

// if an event block is in the range of the current time it will be a neutral color

// if an event block is out of the range of the current time in the future it will turn into a light blue color

//when the input of an event block is saved it will then be saved into the local storage

//when and if the page refreshed the event block will still have the same text inputed unless it is resetted