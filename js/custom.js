jQuery(function ($) {
	$(document).ready(function () {
		$("#sidebarCollapse").on("click", function () {
			$("#sidebar").toggleClass("active");
		});
		
	});


	$(".sidebar-dropdown > a").click(function() {
		$(".sidebar-submenu").slideUp(200);
		if (
			$(this)
			.parent()
			.hasClass("active")
			) {
			$(".sidebar-dropdown").removeClass("active");
		$(this)
		.parent()
		.removeClass("active");
	} else {
		$(".sidebar-dropdown").removeClass("active");
		$(this)
		.next(".sidebar-submenu")
		.slideDown(200);
		$(this)
		.parent()
		.addClass("active");
	}
	});

	var delay = 500;
	$(".progress-bar").each(function(i) {
	  $(this).delay(delay * i).animate({
	    width: $(this).attr('aria-valuenow') + '%'
	  }, delay);

	  $(this).prop('Counter', 0).animate({
	    Counter: $(this).text()
	  }, {
	    duration: delay,
	    // easing: 'swing',
	    step: function(now) {
	      $(this).text(Math.ceil(now) + '%');
	    }
	  });
	});

});