$(document).ready(function(){
	
	$('#tweet-controls').css('visibility', 'hidden');
	
	$(".tweet-compose").on('click', function(){
		$(".tweet-compose").css('height', '5em');		
		$('#tweet-controls').css('visibility', 'visible');
	});
	
	$(".tweet-compose").on('keyup', function(){
		$('#char-count').html(140 - $('.tweet-compose').val().length);
		if(Number($('#char-count').html()) <= 10) {
			$('#char-count').css({color: 'red'});
		}else{
			$('#char-count').css({color: '#999'});
		};
		if(Number($('#char-count').html()) < 0) {
			$('#tweet-submit').prop('disabled', true);
		};
		if(Number($('#char-count').html()) >= 0){
			$('#tweet-submit').prop('disabled', false);
			
		};
	});
});