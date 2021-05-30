//==============================
//SCROLLBAR PLUGIN
//by Adrian Zhang
//------------------------------
//supports editable content
//==============================

(function ($) {
	$.fn.scrollbar = function (options) {	//Add the function
		//options
		var settings = $.extend({
			//defaults
			scrollbarWidth: 20,
			dynamicContent: true,
			buttonThreshold: 100,
			buttonScrollSpeed: 3,
			snapThresholdTop: 50,
			snapThresholdBottom: 50
		}, options);

		return this.each(function () {		//Loop over each element

//==============================
//CREATE SCRUCTURE

			var $parent = $(this);
			
			$parent.addClass('sb-parent');
			$parent.children().wrapAll('<div class="sb-wrapper">').wrapAll('<div class="sb-content">');
			
			var $wrapper = $parent.children('.sb-wrapper'),
				$content = $wrapper.children('.sb-content');
			
			$parent.append(
				$('<div class="sb-container">').append(
					$('<div class="sb-up sb-button">')
				).append(
					$('<div class="sb-track">').append(
						$('<div class="sb-scrollbar">')
					)
				).append(
					$('<div class="sb-down sb-button">')
				)
			);
			var $container = $parent.children('.sb-container'),
				$track = $container.children('.sb-track'),
				$sb = $track.children('.sb-scrollbar'),
				$buttons = $container.children('.sb-button');

//==============================
//PARAMETERS

			var sbWidth 			= settings.scrollbarWidth,
				dynamicContent 		= settings.dynamicContent,
				buttonThreshold 	= settings.buttonThreshold,
				scrollSpeed 		= settings.buttonScrollSpeed,
				snapThresholdTop 	= settings.snapThresholdTop,
				snapThresholdBottom = settings.snapThresholdBottom;

//==============================
//APPLY sbWidth

			$container.outerWidth(sbWidth);
			$wrapper.css('padding-right', sbWidth + 'px');
			$buttons.css({
				//'width': sbWidth + 'px',
				'height': sbWidth + 'px'
			});
			$track.css({
				'top': sbWidth + 'px',
				'bottom': sbWidth + 'px',
				//'width': sbWidth + 'px'
			});

//==============================
//INIT VARIABLES

			var wrapperH	= $wrapper.height(),
				wrapperW	= $wrapper.outerWidth(),
				contentH	= $content.height(),
				contentW	= $content.width(),
				trackH		= $track.height(),
				sbH			= $sb.height(),
				sbTop		= $sb.position().top,
				prevTop		= $wrapper.scrollTop();

//==============================
//HIDE DEFAULT SCROLLBAR

			function hideDefault() {
				wrapperW = $wrapper.outerWidth();
				if (wrapperW == 0) return;
				contentW = $content.width();
				var defW = wrapperW - contentW - sbWidth;
				$wrapper.css('right', -defW + 'px');
			}
			
			hideDefault();
			setInterval(hideDefault, 1000);

//==============================
//SB RESIZE FUNCTION

			function sbResize() {
				//update content size & sb size
				contentH = $content.height();
				sbH = trackH * (wrapperH / contentH);
				if (sbH > trackH) sbH = trackH;
				$sb.height(sbH);
			}
			
			sbResize();

//==============================
//TOP & BOTTOM SNAP (BETA)

			function snap() {
				var initTop = $wrapper.scrollTop();
				if (initTop < prevTop && initTop < snapThresholdTop) {
					$wrapper.scrollTop(0);
					initTop = 0;
				} else if (initTop > prevTop && initTop > (contentH - wrapperH - snapThresholdBottom)) {
					$wrapper.scrollTop(contentH - wrapperH);
					initTop = contentH - wrapperH;
				}
				prevTop = initTop;
			}
			
//==============================
//PASSIVE BEHAVIOUR

			$wrapper.on('scroll keydown keyup', function (e) {
				//console.log(e.type);
				var top = $wrapper.scrollTop();
				//if (dynamicContent) { sbResize(); };
				sbTop = (top / (contentH - wrapperH)) * (trackH - sbH);
				$sb.css('top', sbTop);

				//SNAP BEHAVIOUR
				if (e.type === 'keydown') {
					$wrapper.on('scroll', function handler() {
						snap();
						$wrapper.off('scroll', handler);
					});
				}
			});

//==============================
//BUTTONS

			$buttons.on('mousedown', function () {
				var $button = $(this),
					state = 0, //mousedown
					initScroll,
					contScroll;
				
				function buttonScroll() {
					var top = $wrapper.scrollTop();
					if ($button.hasClass('sb-down')) {
						$wrapper.scrollTop(top + scrollSpeed);
					} else {
						$wrapper.scrollTop(top - scrollSpeed);
					}
				}
				
				$button.addClass('is-active');
				initScroll = setInterval(buttonScroll, 5);
				setTimeout(function () {
					clearInterval(initScroll);
					if (state == 0) {
						contScroll = setInterval(buttonScroll, 5);
					}
				}, buttonThreshold);
				$button.on('mouseup mouseleave', function handler() {
					state = 1;
					$button.removeClass('is-active');
					clearInterval(contScroll);
					$(this).off('mouseup mouseleave', handler);
				});
			});

//==============================
//SCROLLBAR

			$sb.on('mousedown', function (e) {
				var initY = sbTop,
					mousedownY = e.clientY;

				$(document).on('mousemove', sbScroll);
				$(document).on('mouseup', function(){
					$(this).off('mousemove', sbScroll);
				});

				function sbScroll(e) {
					var newY = initY + e.clientY - mousedownY,
						maxY = trackH - sbH,
						maxTop = contentH - wrapperH,
						newTop = Math.round((newY / maxY) * maxTop);
					$wrapper.scrollTop(newTop);
				}
			});

//==============================
//SCROLLBAR TRACK

			$track.on('mousedown', function(e){
				if (e.target !== this) return;
				//uses global position
				var initY = $sb.offset().top;
				var mousedownY = e.clientY;
				var top = $wrapper.scrollTop();
				if (mousedownY > initY) {
					$wrapper.scrollTop(top + wrapperH);
				} else {
					$wrapper.scrollTop(top - wrapperH);
				}
			});

//==============================
//MUTATION OBSERVER

			// select the target node
			var target = $parent[0];
			//var target = $(document)[0];
			// create an observer instance
			var observer = new MutationObserver (function (mutations) {
				//mutations.forEach (function (mutation) {
				//	console.log (mutation.type);
				//});
				//console.log ('mutation!!!');
				sbResize();
				var top = $wrapper.scrollTop();
				sbTop = (top / (contentH - wrapperH)) * (trackH - sbH);
				$sb.css('top', sbTop);
			});
			// configuration of the observer:
			var config = { attributes: true, childList: true, characterData: true, subtree: true };
			// pass in the target node, as well as the observer options
			if (dynamicContent) observer.observe (target, config);


		});

		return this;
	};
})(jQuery);