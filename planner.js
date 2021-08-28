// when the planner opens the current day and time will be displayed at the top of the page

var update = function () {
  date = moment(new Date());
  datetime.text(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};
//when the reset button is clicked it will clear the form and make it blank again
$(document).ready(function () {
  datetime = $("#currentDay");
  update();
  setInterval(update, 1000);
});

$("#buttonReset").click(function () {
  $("input").val("");
  localStorage.clear();
});
//when the submit button is clicked
//if the current time is equal to 8 it will change color green
//if the current time is less than 8 it will change color to red
//if the current time is greater than 8 it will change the color to blue
$("#submit1").on("click", function () {
  localStorage.text8 = $("#text8").val();
});
if (moment().hour() == 8) {
  $("#text8").attr("style", "background-color: lightgreen", "color: black");
}
if (moment().hour() < 8) {
  $("#text8").attr("style", "background-color: lightblue", "color: black");
}
if (moment().hour() > 8) {
  $("#text8").attr(
    "style",
    "background-color: rgb(255, 74, 74)",
    "color: black"
  );
}

//when the submit button is clicked
//if the current time is equal to 9 it will change color green
//if the current time is less than 9 it will change color to red
//if the current time is greater than 9 it will change the color to blue
$("#submit2").on("click", function () {
  localStorage.text9 = $("#text9").val();
});
if (moment().hour() == 9) {
  $("#text9").attr("style", "background-color: lightgreen");
}
if (moment().hour() < 9) {
  $("#text9").attr("style", "background-color: lightblue");
}
if (moment().hour() > 9) {
  $("#text9").attr("style", "background-color: rgb(255, 74, 74)");
}

//when the submit button is clicked
//if the current time is equal to 10 it will change color green
//if the current time is less than 10 it will change color to red
//if the current time is greater than 10 it will change the color to blue
$("#submit3").on("click", function () {
  localStorage.text10 = $("#text10").val();
});
if (moment().hour() == 10) {
  $("#text10").attr("style", "background-color: lightgreen");
}
if (moment().hour() < 10) {
  $("#text10").attr("style", "background-color: lightblue");
}
if (moment().hour() > 10) {
  $("#text10").attr("style", "background-color: rgb(255, 74, 74)");
}

//when the submit button is clicked
//if the current time is equal to 11 it will change color green
//if the current time is less than 11 it will change color to red
//if the current time is greater than 11 it will change the color to blue
$("#submit4").on("click", function () {
  localStorage.text11 = $("#text11").val();
});
if (moment().hour() == 11) {
  $("#text11").attr("style", "background-color: lightgreen");
}
if (moment().hour() < 11) {
  $("#text11").attr("style", "background-color: lightblue");
}
if (moment().hour() > 11) {
  $("#text11").attr("style", "background-color: rgb(255, 74, 74)");
}

//when the submit button is clicked
//if the current time is equal to 12 it will change color green
//if the current time is less than 12 it will change color to red
//if the current time is greater than 12 it will change the color to blue
$("#submit5").on("click", function () {
  localStorage.text12 = $("#text12").val();
});
if (moment().hour() == 12) {
  $("#text12").attr("style", "background-color: lightgreen");
}
if (moment().hour() < 12) {
  $("#text12").attr("style", "background-color: lightblue");
}
if (moment().hour() > 12) {
  $("#text12").attr("style", "background-color: rgb(255, 74, 74)");
}

//when the submit button is clicked
//if the current time is equal to 13 it will change color green
//if the current time is less than 13 it will change color to red
//if the current time is greater than 13 it will change the color to blue
$("#submit6").on("click", function () {
  localStorage.text13 = $("#text13").val();
});
if (moment().hour() == 13) {
  $("#text13").attr("style", "background-color: lightgreen");
}
if (moment().hour() < 13) {
  $("#text13").attr("style", "background-color: lightblue");
}
if (moment().hour() > 13) {
  $("#text13").attr("style", "background-color: rgb(255, 74, 74)");
}

//when the submit button is clicked
//if the current time is equal to 14 it will change color green
//if the current time is less than 14 it will change color to red
//if the current time is greater than 14 it will change the color to blue
$("#submit7").on("click", function () {
  localStorage.text14 = $("#text14").val();
});
if (moment().hour() == 14) {
  $("#text14").attr("style", "background-color: lightgreen");
}
if (moment().hour() < 14) {
  $("#text14").attr("style", "background-color: lightblue");
}
if (moment().hour() > 14) {
  $("#text14").attr("style", "background-color: rgb(255, 74, 74)");
}

//when the submit button is clicked
//if the current time is equal to 15 it will change color green
//if the current time is less than 15 it will change color to red
//if the current time is greater than 15 it will change the color to blue
$("#submit8").on("click", function () {
  localStorage.text15 = $("#text15").val();
});
if (moment().hour() == 15) {
  $("#text15").attr("style", "background-color: lightgreen");
}
if (moment().hour() < 15) {
  $("#text15").attr("style", "background-color: lightblue");
}
if (moment().hour() > 15) {
  $("#text15").attr("style", "background-color: rgb(255, 74, 74)");
}

//when the submit button is clicked
//if the current time is equal to 16 it will change color green
//if the current time is less than 16 it will change color to red
//if the current time is greater than 16 it will change the color to blue
$("#submit9").on("click", function () {
  localStorage.text16 = $("#text16").val();
});
if (moment().hour() == 16) {
  $("#text16").attr("style", "background-color: lightgreen");
}
if (moment().hour() < 16) {
  $("#text16").attr("style", "background-color: lightblue");
}
if (moment().hour() > 16) {
  $("#text16").attr("style", "background-color: rgb(255, 74, 74)");
}

//when the submit button is clicked
//if the current time is equal to 17 it will change color green
//if the current time is less than 17 it will change color to red
//if the current time is greater than 17 it will change the color to blue
$("#submit10").on("click", function () {
  localStorage.text17 = $("#text17").val();
});
if (moment().hour() == 17) {
  $("#text17").attr("style", "background-color: lightgreen");
}
if (moment().hour() < 17) {
  $("#text17").attr("style", "background-color: lightblue");
}
if (moment().hour() > 17) {
  $("#text17").attr("style", "background-color: rgb(255, 74, 74)");
}

//Putting the values into the local storage
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
