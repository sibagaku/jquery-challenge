$(function(){
  $("button").on("click", function() {
    $("ul").children().css("color", "red");
  });
});


$(function(){
  $(".box1").on("click", function(){
    $(this).slideUp();
  });
});

