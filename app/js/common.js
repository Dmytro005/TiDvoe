$(function() {

	$("#clients").click(function(){
		$("#clients-content").slideToggle();

		$(".shadow").toggleClass("shadow-show");
		
		$("#clients-box").toggleClass("clients-box-opened");
		$("#clients-label").toggleClass("clients-label-opened");
		$("#clients-content").toggleClass("clients-content-opened");

		//Toggle project box section to back
  	if ($("#projects-box").css("zIndex") == 3) { $("#projects-box").css("zIndex","1") }
  	else if ($("#projects-box").css("zIndex") == 1) { $("#projects-box").css("zIndex","3")}
	});

	$("#projects").click(function() {
		//Toggle shadow to front

		$(".shadow").toggleClass("shadow-show");

		//Bring Shadow to front
  	if ($(".shadow").css("zIndex") == 1) { $(".shadow").css("zIndex","2") }
  	else if ($(".shadow").css("zIndex") == 2) {$(".shadow").css("zIndex","1") }

  	if( $("#projects-box").width().toFixed(0) == 85){
  		$("#projects-box").animate({width: 325},50, function() {
  			$("#projects-content").toggleClass("projects-content-opened");
  		});
  	}
  	else if($("#projects-box").width().toFixed(0) == 325){
			$("#projects-content").toggleClass("projects-content-opened");
			$("#projects-box").animate({width: 85},50,function() {
			});
  	}
		

		$("#projects-box").toggleClass("projects-box-opened");


		// if (zIndex == 1) { 
		// 		$(".shadow").css("zIndex","2") 
		// 	}
  // 	else if (zIndex == 2) {
  // 			$(".shadow").css("zIndex","1") 
  // 		}



	});

});
