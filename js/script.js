$(document).ready(function(){
	//wait unti(l ready
		console.log("ready")

		$(".hide").hide();
$(".readless").hide();

$(".readmore").click(function(event){
//prevent page from performing the default action
		event.preventDefault();
	$(".hide").show();
	//$("#click").slidedown('slow');
	$(".readless").show();
	$(".readmore").hide();
});

$(".readless").click(function(event){
		event.preventDefault();
	$(".hide").hide();
	//$(".hide").slideup();
	$(".readless").hide();
	$(".readmore").show();
});

$('.carousel').carousel({
  interval: 2000
})		

})

