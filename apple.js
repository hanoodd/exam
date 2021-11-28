var front = document.querySelector(".front");
var container = document.querySelector(".container")
var video = document.querySelector(".back video")

front.addEventListener("click", function(){
  container.classList.add("anim");

  setTimeout(function(){
    video.play()
  }, 8000);

})

var front2 = document.querySelector(".front2");
var container2 = document.querySelector(".container2")
var video2 = document.querySelector(".back2 video")

front2.addEventListener("click", function(){
  container2.classList.add("anim");

  setTimeout(function(){
    video.play()
  }, 8000);

})

var front3 = document.querySelector(".front3");
var container3 = document.querySelector(".container3")
var video3 = document.querySelector(".back3 video")

front3.addEventListener("click", function(){
  container3.classList.add("anim");

  setTimeout(function(){
    video.play()
  }, 8000);

})

var front4 = document.querySelector(".front4");
var container4 = document.querySelector(".container4")
var video4 = document.querySelector(".back4 video")

front4.addEventListener("click", function(){
  container4.classList.add("anim");

  setTimeout(function(){
    video.play()
  }, 8000);

})
