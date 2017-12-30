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

  	if ($(".shadow").css("zIndex") == 1) { $(".shadow").css("zIndex","2") }
  	else if ($(".shadow").css("zIndex") == 2) {$(".shadow").css("zIndex","1") }

		$("#projects-box").toggleClass("projects-box-opened");
		$("#projects-content").toggleClass("projects-content-opened");
		
		// if (zIndex == 1) { 
		// 		$(".shadow").css("zIndex","2") 
		// 	}
  // 	else if (zIndex == 2) {
  // 			$(".shadow").css("zIndex","1") 
  // 		}



	});

});
