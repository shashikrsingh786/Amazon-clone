var images = [
  "hero_image.jpg",
  "games.jpg",
  "beyonce.jpg",
  "gotg.jpg",
  "theater.jpg",
  "school.jpg",
 ]


// jquery 
$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
$("body").animate(
{
	marginTop : "0",
	opacity : "1",
} , 1000);

$(".hero-section p").animate(
{
	opacity : "1",
} , 4000);

var  heroImage = $(".hero-section");
var i = 0;
setInterval(function() {
  i = (i+1) % images.length;
  heroImage.fadeOut(5, function() {
    console.log(i);
    $(this).css("background-image", "url('" + images[i] + "')");

    $(this).fadeIn(500);
  });
},5000);


});


// javascript  
var header = document.querySelector('.hero-section');

var j = 0;
function changebgLeft() {

    j = (j-1 + images.length) % images.length;
    header.style.backgroundImage = "url('" + images[j] + "')";

}

function changebgRight() {

  j = (j+1) % images.length;
  header.style.backgroundImage = "url('" + images[j] + "')";

}
