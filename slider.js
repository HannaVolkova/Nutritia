var bgArr = [
    "images/slide_01.jpg",
    "images/slide_02.jpg"
  ];
  var i = 0;
  
  setInterval(function() {
    $(".main_page").css("background-image", "url(" + bgArr[i] + ")");
    (i < bgArr.length - 1) ? i++ : i = 0
  }, 5000);