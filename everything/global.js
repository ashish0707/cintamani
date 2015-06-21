$(document).ready(function(){	
	$("a[rel^='image']").click(function(e)
	{
		e.preventDefault();
		$('#img-big').html('<img src="'+$(this).attr('href')+'" alt="'+$(this).attr('title')+'" />');
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$('.caption').html($(this).attr('title')).append('<a href="'+$(this).attr('data-bigimg')+'" class="zoomin"  target="_blank"> </a></div>');
	});

	$("a[rel^='video']").click(function(e)
	{
		e.preventDefault();
		$('#videoplays span').html($(this).attr('href'));
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
		$('.largevid-desc').html($(this).attr('data-title'));
		$('.largevidshow-desc').html($(this).attr('data-description'));
	});
	/*$('.scroll-pane').jScrollPane();*/
});