(function($) {
    $(function() {
        $('.jcarousel').jcarousel({	
		'wrap': 'circular',
    	'animation': {
        'duration': 800,
        'easing':   'linear',
        'complete': function() {
        }
    }
	})
	.jcarouselAutoscroll({
        interval: 9000,
        target: '+=1',
        autostart: true,
    });
	
    var mycarousel = $('#mycarousel').jcarousel({
    'animation': {
        'duration': 1000,
        'easing':   'easeOutQuart',
        'complete': function() {
        }
    }
	});
	
	$('.jcarousel-prev').jcarouselControl({
        target: '-=1',
    	carousel: mycarousel
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1',
    	carousel: mycarousel
    });

	
	$('.jcarousel-project').jcarousel({
    'animation': {
        'duration': 1000,
        'easing':   'easeOutQuart',
        'complete': function() {
        }
    }
	});

        $('.jcarousel-control-prev')
            .on('active.jcarouselcontrol', function() {
                $(this).removeClass('inactive');
            })
            .on('inactive.jcarouselcontrol', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('active.jcarouselcontrol', function() {
                $(this).removeClass('inactive');
            })
            .on('inactive.jcarouselcontrol', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('active.jcarouselpagination', 'a', function() {
                $(this).addClass('active');
            })
            .on('inactive.jcarouselpagination', 'a', function() {
                $(this).removeClass('active');
            })
			
			.jcarouselPagination({
				//'carousel': $('.jcarousel-project')
			});
    });
	
})(jQuery);
