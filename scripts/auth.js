$(document).ready(function() {

	//$(".login").hide();
	$("#login").click(function() {
		$(".login").fadeIn(400);
	})

	$('.message a').click(function(){
   			$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
		});

	$(document).keydown(function(eventObject){
                if (eventObject.which == 27)
                    $('.login').fadeOut(400);
            });


	$(document).mouseup(function(outclick) {
		var conteiner = $(".login")
		if (conteiner.has(outclick.target).length ===0) {
			conteiner.fadeOut(400);
		}
	})
})