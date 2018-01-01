$(function() {
	// setTimeout(func / code, delay)

	//Start loading page animations

	//Logo
	setTimeout( function(){
		$("#logo").addClass('logo-show');
	},500);

	// "Who we are"
	setTimeout( function(){
		$("h1").addClass('h1-show');
	},1000);

	// "About us text"
	setTimeout( function(){
		$(".about-us-text").addClass('about-us-text-show');
	},1600);

	setTimeout( function(){
		$("#contacts").addClass('contacts-show');
		$("#clients-box").addClass('clients-box-show');
		
		$("#projects-box").addClass('projects-box-show');
	},3600);

	//Cliens menu
	$("#clients").click(function(){
		$("#clients-content").slideToggle("slow");

		$(".shadow").toggleClass("shadow-show");
		$(".shadow").toggleClass("shadow-clients");
		
		$("#clients-box").toggleClass("clients-box-opened");
		$("#clients-label").toggleClass("clients-label-opened");
		$("#clients-content").toggleClass("clients-content-opened");

		//Toggle project box section to back
  	
	});

	//Projects bar
	$("#projects").click(function() {
		var closedWidth = $("#projects-box").width().toFixed(0);
		//Toggle shadow to front
		$(".shadow").toggleClass("shadow-show");

		//Bring Shadow to front
		$(".shadow").toggleClass("shadow-projects");
	  
	  	//Open
	  	if( closedWidth == 70){
	  		$("#projects-box").animate({width: 325},50, function() {
	  			$("#projects-content").toggleClass("projects-content-opened");
	  			$("#projects").toggleClass("projects-opened");
	  			console.log("Open");
	  		});
	  	}

	  	//Close
	  	else if( closedWidth == 325){
				$("#projects-box").animate({width: 70},50,function() {
				$("#projects-content").toggleClass("projects-content-opened");
				$("#projects").toggleClass("projects-opened");
				});
	  	}

		//Toogle color (JQuery can't animate color)
		$("#projects-box").toggleClass("projects-box-opened");

	});

});
