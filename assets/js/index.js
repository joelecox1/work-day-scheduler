$(document).ready(function() {
  $(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();

    localStorage.setItem(time, value);
  });
});

function time() {
  var currentHour = moment().hours();

  $(".time-block").each(function() {
    var rowHour = parseInt($(this).attr("id"));

    if (rowHour < currentHour) {
      $(this).addClass("past");
    } else if (rowHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    };
  });
};

time();

var interval = setInterval(time, 15000);
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

$("#currentDay").text(moment().format("dddd, MMMM Do"));