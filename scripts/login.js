jQuery(document).ready(function(){
	PopUpHide();
})

function PopUpShow(){
	$(".popUp").slideToggle(500);
}

function PopUpHide(){
	$(".popUp").hide();
}