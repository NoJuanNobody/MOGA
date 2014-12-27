$(document).ready(function(){


$('.intro').hide().fadeIn(5000);

$(window).scroll(function(){
//when the page scroll is engaged, change the opacity of the nav bar
if ($('.navbar').offset().top > 10){
	 console.log('scrolling');
	 $('.navbar-custom').animate({opacity: 1}, 500);
}	else{
		console.log('top');
		$('.navbar').animate({opacity: .5}, 10);
				}
			});


});