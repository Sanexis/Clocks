var hourHand = document.querySelector(".hour-hand");
var minuteHand = document.querySelector(".minute-hand");
var secondHand = document.querySelector(".second-hand");
setInterval(function() {
  var now = new Date();

  var seconds = now.getSeconds();
  var hours = now.getHours();
  var minutes = now.getMinutes();

  var hourAngle = (hours % 12) * 30 + minutes / 2 + seconds / 120;
  var minuteAngle = minutes * 6 + seconds / 10;
  var secondAngle = seconds * 6;
  
  hourHand.style.transform = "rotate(" + hourAngle + "deg)";
  minuteHand.style.transform = "rotate(" + minuteAngle + "deg";
  secondHand.style.transform = "rotate(" + secondAngle + "deg)";
}, 1000);