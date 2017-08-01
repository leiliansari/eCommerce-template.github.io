$("document").ready(function(){


	$(".see-all").click(showAll);

	function showAll(){
		$("#all").slideToggle();
	}

	$(".hide-all").click(hideAll);

	function hideAll(){
		$("#all").hide();
	}

	$(".remove").click(remove);

	function remove(){
		$(this).parents(".poster").css("display","none");
		console.log("is this working?");
	}

	$(".add-to-cart").click(addToCart);


	function addToCart(){
		alert("Item Added!");
	}

})