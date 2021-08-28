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

// if an event block is in the range of the current time it will be a neutral color

// if an event block is out of the range of the current time in the future it will turn into a light blue color

//when the input of an event block is saved it will then be saved into the local storage

//when and if the page refreshed the event block will still have the same text inputed unless it is resetted

//setting values to local storage
$("#text8").val(localStorage.text8);
$("#text9").val(localStorage.text9);
$("#text10").val(localStorage.text10);
$("#text11").val(localStorage.text11);
$("#text12").val(localStorage.text12);
$("#text13").val(localStorage.text13);
$("#text14").val(localStorage.text14);
$("#text15").val(localStorage.text15);
$("#text16").val(localStorage.text16);
$("#text17").val(localStorage.text17);

//saving input values

$("#submit1").on("click", function () {
  localStorage.text8 = $("#text8").val();
});

$("#submit2").on("click", function () {
  localStorage.text9 = $("#text9").val();
});

$("submit3").on("click", function () {
  localStorage.text10 = $("#text10").val();
});

$("submit4").on("click", function () {
  localStorage.text11 = $("#text11").val();
});

$("submit5").on("click", function () {
  localStorage.text12 = $("#text12").val();
});

$("submit6").on("click", function () {
  localStorage.text13 = $("#text13").val();
});

$("submit7").on("click", function () {
  localStorage.text14 = $("#text14").val();
});

$("submit8").on("click", function () {
  localStorage.text15 = $("#text15").val();
});

$("submit9").on("click", function () {
  localStorage.text16 = $("#text16").val();
});

$("submit10").on("click", function () {
  localStorage.text17 = $("#text17").val();
});

if (moment().hour() == 8 || moment().hour() == 9) {
  $("#text8").attr("style", "background color: red;");
}

if (moment().hour() > 8) {
  $("#text8").attr("style", "background-color: blue;");
}

if (moment().hour() < 8) {
  $("#text8").attr("style", "background-color: yellow;");
}

if (moment().hour() == 9) {
  $("#text9").attr("style", "background color: red;");
}

if (moment().hour() > 9) {
  $("#text9").attr("style", "background-color: blue;");
}

if (moment().hour() < 9) {
  $("#text9").attr("style", "background-color: yellow;");
}

if (moment().hour() == 10) {
  $("#text10").attr("style", "background color: red;");
}

if (moment().hour() > 10) {
  $("#text10").attr("style", "background-color: blue;");
}

if (moment().hour() < 10) {
  $("#text10").attr("style", "background-color: yellow;");
}

if (moment().hour() == 11) {
  $("#text11").attr("style", "background color: red;");
}

if (moment().hour() > 11) {
  $("#text11").attr("style", "background-color: blue;");
}

if (moment().hour() < 11) {
  $("#text11").attr("style", "background-color: yellow;");
}

if (moment().hour() == 12) {
  $("#text12").attr("style", "background color: red;");
}

if (moment().hour() > 12) {
  $("#text12").attr("style", "background-color: blue;");
}

if (moment().hour() < 12) {
  $("#text12").attr("style", "background-color: yellow;");
}
