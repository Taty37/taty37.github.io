$(document).ready(function(){
	//wait unti(l ready
		console.log("ready")

		$(".hide").hide();
$(".readless").hide();

$(".readmore").click(function(){
//prevent page from performing the default action
		event.preventDefault();
	$(".hide").show();
	//$("#click").slidedown('slow');
	$(".readless").show();
	$(".readmore").hide();
});

$(".readless").click(function(){
		event.preventDefault();
	$(".hide").hide();
	//$(".hide").slideup();
	$(".readless").hide();
	$(".readmore").show();
});

		//dont attach event listener until page fully loads
	$("#new-booking").submit(createBooking)

})

function createBooking(event){
	event.preventDefault();
	console.log("form submit")
	// for five elements
	// for title input element
	// get user input
	var titleInput = $("#name").val();
	console.log("nameInput");
	
	// put in HTML element
}