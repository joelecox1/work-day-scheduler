$(document).ready(function() {
  $(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();

    localStorage.setItem(time, value);
  })
}) 
