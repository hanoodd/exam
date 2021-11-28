var video = document.querySelector(".bideo video");
var button = document.querySelector(".button img");
var input = document.getElementById(".search-txt input");

button.addEventListener('click', function(){
  video.play();
  button.style.display = 'none';
});
