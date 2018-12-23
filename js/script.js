$(document).ready(function(){
	$(".navLi").on("click",function(e){
		$(this).closest("nav").find(".navLi").removeClass("colorBtn");
		$(this).addClass("colorBtn");
		$(".boxCont").addClass("none");
		var index=$(this).closest(".navLi").index();
		$(".boxCont:eq("+index+")").removeClass("none");
	});
});
