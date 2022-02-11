$(document).ready(function(){

  $('.bxslider').bxSlider({
  auto: true,
  controls: true,
  responsive :true,
  speed: 2500
  });

    $('.bxslider1').bxSlider({
  auto: true,
  controls: false,
  responsive :true,
  speed: 2500
  });
  });


let player = document.getElementById("player");

player.addEventListener("click", function(){
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
});

let player1 = document.getElementById("player1");

player1.addEventListener("click", function(){
    if (player1.paused) {
        player1.play();
    } else {
        player1.pause();
    }
});



 

 
