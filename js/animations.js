$(document).ready(function(){
	
	$("#char-count").hide();
	
	$(".button").hide();
	
	$(".tweet-compose").on('click', function(){
		$(".tweet-compose").css('height', '5em');
		$("#char-count").show();
		$(".button").show();
	})
	
	$(".tweet-compose").keypress(function(){
		var charCount = $('#char-count').text();
		var num = parseInt(charCount);
		num--;
		var thing = num.toString();
		$("#char-count").text(thing);
		if (thing <= 10){
			$("#char-count").css('color', 'red')
		}else{
			$("#char-count").css('color', 'black')
		}
		if (thing < 0){
			$(".tweet-compose").css('opacity', '0.4').css('color', 'red'); $(".button").attr('disabled', 'disabled');
		}else {
			$(".tweet-compose").css('opavity', '1').css('color', 'black'); $(".button").removeAttr('disabled');
		}
	});
	
	
})