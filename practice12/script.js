const API_KEY = "5b5278212ca52a652052353057bf1c53"

$(function(){
  $("#btn").on("click", function(){
    //入力された都市名でAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $("#cityname").val() + "&units=metric&appid=" + API_KEY,
      dataType: "jsonp",
    }).done(function(data){
      //通信成功（WEB_APIを正常に呼び出せた場合）
      $("#place").text(data.name);
      $("#temp_max").text(data.main.temp_max);
      $("#temp_min").text(data.main.temp_min);
      $("#humidity").text(data.main.humidity);
      $("#speed").text(data.wind.speed);
      $("#weather").text(data.weather[0].main);
      $("img").attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $("img").attr("alt",data.weather[0].main);
    }).fail(function(data){
      //通信失敗
      alert("通信に失敗しました。");
    });
  });
});