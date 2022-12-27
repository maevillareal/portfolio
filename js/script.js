$(document).on('ready', function(){
	
	"use strict"; 
	
	$('#hamburger-two').on('click', function(){
		$(this).toggleClass('active');
		$('header').toggleClass('active');
	});

	$(function() {
		$('#toggle-widget .content').hide();
		$('#toggle-widget h2:first').addClass('active').next().slideDown('slow');
		$('#toggle-widget h2').on("click", function(){
		if($(this).next().is(':hidden')) {
		$('#toggle-widget h2').removeClass('active').next().slideUp('slow');
		$(this).toggleClass('active').next().slideDown('slow');
		}
		});
	});

	/*** QUICK POST SHARE ***/
	$('.quick-post-share > span').on('click', function (){
		$(this).parent().toggleClass('active');
	});

	/*** QUICK POST SHARE ***/
	$('.hide-active-header').on('click', function (){
		$('header.minimal-header.show-header').toggleClass('active');
	});



	$("header").on("click",function(e){
	    e.stopPropagation();
	});
	$(".minimal-menu nav > ul > li.menu-item-has-children > a").on("click",function(){
	    $(this).parent().siblings().children("ul").slideUp();
	    $(this).parent().siblings().removeClass("active");
	    $(this).parent().children("ul").slideToggle();
	    $(this).parent().toggleClass("active");
	    return false;
	}); 

	

});


$(window).load(function(){
	"use strict"; 

	$('.page-loading').fadeOut();
	
});