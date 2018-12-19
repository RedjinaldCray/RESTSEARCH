$(document).ready(function() {

	//$(".login").hide();
	$("#login").click(function() {
		$(".login").fadeIn(400);
		$('.message a').click(function(){
   			$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
		});

		$(".content-login").show();
			var block = document.getElementById("auth_win");
			block.style.display = "block";
	})
})