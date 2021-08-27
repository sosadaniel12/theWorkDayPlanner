// when the planner opens the current day and time will be displayed at the top of the page

var datetime = null,
  date = null;

var update = function () {
  date = moment(new Date());
  datetime.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};

$(document).ready(function () {
  datetime = $("#currentDay");
  update();
  setInterval(update, 1000);
});

// if an event block has already passed the current time it will change the block to a red color\
$("#workTime").val();

$(document).each(function () {
  workTime = $("#workTime");
});

function pastTime() {
  if (workTime < datetime) {
  }
}
// if an event block is in the range of the current time it will be a neutral color

// if an event block is out of the range of the current time in the future it will turn into a light blue color

//when the input of an event block is saved it will then be saved into the local storage

//when and if the page refreshed the event block will still have the same text inputed unless it is resetted
