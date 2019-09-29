



$(function(){

	$(".btn-action-holder").hide();
	$(".img-card")
	  .mouseover(function() {
	    $(this).find('.btn-action-holder').show()
	  })
	  .mouseout(function() {
	    $(this).find('.btn-action-holder').hide()
	  });

	  $('.star-row div').click(function(){  
	  	$(this).prevAll('div.col-md-1').empty().append('<span class="fa fa-star checked"></span>');
	  	$(this).empty().append('<span class="fa fa-star checked"></span>');
	  });
	
});