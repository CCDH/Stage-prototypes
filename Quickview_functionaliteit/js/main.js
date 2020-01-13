jQuery(document).ready(function($){
	//Maximale breedte
	//Maximale breedte van de quickview
	var sliderFinalWidth = 400,
		maxQuickWidth = 900;

	//Deze functie opent het quickview paneel
	$('.cd-trigger').on('click', function(event){
		var selectedImage = $(this).parent('.cd-item').children('img'),
			slectedImageUrl = selectedImage.attr('src');

		$('body').addClass('overlay-layer');
		animateQuickView(selectedImage, sliderFinalWidth, maxQuickWidth, 'open');

		//Hiermee update je de foto in het quickview paneel
		updateQuickView(slectedImageUrl);
	});

	//Deze functie zorgt ervoor dat je het quickview menu weer kunt sluiten
	$('body').on('click', function(event){
		if( $(event.target).is('.cd-close') || $(event.target).is('body.overlay-layer')) {
			closeQuickView( sliderFinalWidth, maxQuickWidth);
		}
	});
	$(document).keyup(function(event){
		//Deze functie bekijkt of je op de escape knop hebt gedruk
    	if(event.which=='27'){
			closeQuickView( sliderFinalWidth, maxQuickWidth);
		}
	});

	$('.cd-quick-view').on('click', '.cd-slider-navigation a', function(){
		updateSlider($(this));
	});

	//Deze functie zorgt ervoor dat de quickview in het midden van het scherm komt wanneer deze een ander formaat aanneemt.
	$(window).on('resize', function(){
		if($('.cd-quick-view').hasClass('is-visible')){
			window.requestAnimationFrame(resizeQuickView);
		}
	});

	function updateSlider(navigation) {
		var sliderConatiner = navigation.parents('.cd-slider-wrapper').find('.cd-slider'),
			activeSlider = sliderConatiner.children('.selected').removeClass('selected');
		if ( navigation.hasClass('cd-next') ) {
			( !activeSlider.is(':last-child') ) ? activeSlider.next().addClass('selected') : sliderConatiner.children('li').eq(0).addClass('selected');
		} else {
			( !activeSlider.is(':first-child') ) ? activeSlider.prev().addClass('selected') : sliderConatiner.children('li').last().addClass('selected');
		}
	}

	function updateQuickView(url) {
		$('.cd-quick-view .cd-slider li').removeClass('selected').find('img[src="'+ url +'"]').parent('li').addClass('selected');
	}

	function resizeQuickView() {
		var quickViewLeft = ($(window).width() - $('.cd-quick-view').width())/2,
			quickViewTop = ($(window).height() - $('.cd-quick-view').height())/2;
		$('.cd-quick-view').css({
		    "top": quickViewTop,
		    "left": quickViewLeft,
		});
	}

	function closeQuickView(finalWidth, maxQuickWidth) {
		var close = $('.cd-close'),
			activeSliderUrl = close.siblings('.cd-slider-wrapper').find('.selected img').attr('src'),
			selectedImage = $('.empty-box').find('img');
		//update van de afbeeldingen in de gallerij
		if( !$('.cd-quick-view').hasClass('velocity-animating') && $('.cd-quick-view').hasClass('add-content')) {
			selectedImage.attr('src', activeSliderUrl);
			animateQuickView(selectedImage, finalWidth, maxQuickWidth, 'close');
		} else {
			closeNoAnimation(selectedImage, finalWidth, maxQuickWidth);
		}
	}

	function animateQuickView(image, finalWidth, maxQuickWidth, animationType) {
		//hier slaat die de aangemaakte gegevens in op van het quickview paneel
		var parentListItem = image.parent('.cd-item'),
			topSelected = image.offset().top - $(window).scrollTop(),
			leftSelected = image.offset().left,
			widthSelected = image.width(),
			heightSelected = image.height(),
			windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			finalLeft = (windowWidth - finalWidth)/2,
			finalHeight = finalWidth * heightSelected/widthSelected,
			finalTop = (windowHeight - finalHeight)/2,
			quickViewWidth = ( windowWidth * .8 < maxQuickWidth ) ? windowWidth * .8 : maxQuickWidth ,
			quickViewLeft = (windowWidth - quickViewWidth)/2;

		if( animationType == 'open') {
			//dit zorgt ervoor dat de afbeelding niet meer zichtbaar is
			parentListItem.addClass('empty-box');
			//plaats de snelle weergave over de afbeeldingengalerij en geef deze de dimensie van de afbeeldingen
			$('.cd-quick-view').css({
			    "top": topSelected,
			    "left": leftSelected,
			    "width": widthSelected,
			}).velocity({
				//Hiermee kun je de animatie van de quickview bepalen
				//Gedurende deze animatie is alleen de afbeelding zichtbaar
			    'top': finalTop+ 'px',
			    'left': finalLeft+'px',
			    'width': finalWidth+'px',
			}, 1000, [ 400, 20 ], function(){
				//animatie van de quickview animatie. Hier geef je hem een maximale breedte
				$('.cd-quick-view').addClass('animate-width').velocity({
					'left': quickViewLeft+'px',
			    	'width': quickViewWidth+'px',
				}, 50, 'ease' ,function(){
					//laat de quickview content zien die in de html wordt aangemaakt
					$('.cd-quick-view').addClass('add-content');
				});
			}).addClass('is-visible');
		} else {
			//Wanneer de quickview gesloten wordt doet deze dezelfde animatie bij het terug inklappen
			$('.cd-quick-view').removeClass('add-content').velocity({
			    'top': finalTop+ 'px',
			    'left': finalLeft+'px',
			    'width': finalWidth+'px',
			}, 300, 'ease', function(){
				$('body').removeClass('overlay-layer');
				$('.cd-quick-view').removeClass('animate-width').velocity({
					"top": topSelected,
				    "left": leftSelected,
				    "width": widthSelected,
				}, 500, 'ease', function(){
					$('.cd-quick-view').removeClass('is-visible');
					parentListItem.removeClass('empty-box');
				});
			});
		}
	}
	function closeNoAnimation(image, finalWidth, maxQuickWidth) {
		var parentListItem = image.parent('.cd-item'),
			topSelected = image.offset().top - $(window).scrollTop(),
			leftSelected = image.offset().left,
			widthSelected = image.width();

		$('body').removeClass('overlay-layer');
		parentListItem.removeClass('empty-box');
		$('.cd-quick-view').velocity("stop").removeClass('add-content animate-width is-visible').css({
			"top": topSelected,
		    "left": leftSelected,
		    "width": widthSelected,
		});
	}
});
