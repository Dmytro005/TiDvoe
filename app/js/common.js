$(function() {

	$("#clients-label").click(function(){
		$("#clients-content").slideToggle();

		$(".shadow").toggleClass("shadow-show");
		
		$("#clients-box").toggleClass("clients-box-opened");
		$("#clients-label").toggleClass("clients-label-opened");
		$("#clients-content").toggleClass("clients-content-opened");

	});

});
