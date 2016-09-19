"use strict";

jQuery(document).ready(function(){
	var overlay = jQuery('.overlay');

	jQuery('.to-sign-in').on('click', function(){
		overlay.fadeIn();
		jQuery('.fg-modal.sign-up').fadeOut();
		jQuery('.fg-modal.sign-in').fadeIn();
	});

	jQuery('.to-sign-up').on('click', function(){
		overlay.fadeIn();
		jQuery('.fg-modal.sign-in').fadeOut();
		jQuery('.fg-modal.sign-up').fadeIn();
	});

	jQuery('.to-option').on('click', function(){
		jQuery('.fg-modal').fadeOut();
		jQuery('.fg-modal.sign-in-option').fadeIn().addClass('show');
	});

	jQuery('.over-out').on('click', function(){
		if (!jQuery('.fg-modal.sign-in-option').hasClass('show')) {
			overlay.fadeOut();
			jQuery('.fg-modal').fadeOut();
		}
	});

	jQuery('.current-user-avatar img').on('click', function(){
		jQuery('.user-nav').slideToggle();
	})

	jQuery(window).click(function() {
		jQuery('.user-nav').fadeOut();
	});

	jQuery('.current-user-avatar img').click(function(event){
	    event.stopPropagation();
	});

	jQuery('.nav-icon').click(function(){
	    jQuery('.main-nav').slideToggle();
	});

	// match height
    var listWrapper = jQuery('.area-class .fg-row');
    listWrapper.each(function() {
    	var maxHeight = -1;
    	var item = jQuery(this).find('.block-class')
        maxHeight = maxHeight > item.outerHeight() ? maxHeight : item.outerHeight();
        item.each(function() {
	        jQuery(this).outerHeight(maxHeight);
	    });
    });
})