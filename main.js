//====================================================================================================
//INITIALIZE COLLECTION

Object.keys(FontCollectionData).forEach (function (family) {
	//console.log(FontCollectionData[family].displayStyle);
	$('#typeface-list').append(
		$('<div class="typeface-item" data-font="'+family+'">').append(
			$('<div class="info clearfix">').append(
				$('<div class="info-name">').text(FontCollectionData[family].name)
			).append(
				$('<div class="info-style">').text(FontCollectionData[family].style)
			).append(
				$('<div class="info-link">').append('<a href="'+FontCollectionData[family].linkURL+'" target="_blank" >-> '+FontCollectionData[family].link+'</a>')
			)
		).append(
			$('<div class="typeface-item-typeface" style="font-family:' + FontCollectionData[family].name + '; ' + FontCollectionData[family].displayStyle + '">').append(
				$('<span class="baseline" style="font-size:'+FontCollectionData[family].sizeAdjust+'em;">').text(FontCollectionData[family].name)
			)
		)
	).append(
		$('<div class="short-divider">')
	);
});

//====================================================================================================
//FONT OPTIONS

//----------------------------------------------------------------------------------------------------
//fontSizeOptions     		  [0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10] [11]

var fontSizeOptions = [0, 12, 18, 24, 36, 48, 60, 72, 90, 120, 180, 240]

//----------------------------------------------------------------------------------------------------
//COLLECTION FONT SIZE

var collectionI = 4;
var collectionSize = fontSizeOptions[collectionI];
$('#collection-size-option').children('.value').text(collectionSize+"px");
$("#typeface-list").get(0).style.setProperty("--collection-size", collectionSize+"px");
//button
$('#collection-size-option').on('click','.button',function(){
	if($(this).hasClass('plus-button')){
		if (collectionI < 9) collectionI += 1;
	} else {
		if (collectionI > 0) collectionI -= 1;
	};
	collectionSize = fontSizeOptions[collectionI];
	$("#typeface-list").get(0).style.setProperty("--collection-size", collectionSize+"px");
	$(this).siblings('.value').text(collectionSize+"px");
});

//----------------------------------------------------------------------------------------------------
//fontOptions

var globalFontStyleOptions = [ ["na", "na"], ["Thin", "Thin Italic"], ["Extralight", "Extralight Italic"], ["Light", "Light Italic"], ["Regular", "Italic"], ["Medium", "Medium Italic"], ["Semibold", "Semibold Italic"], ["Bold", "Bold Italic"], ["Extrabold", "Extrabold Italic"], ["Black", "Black Italic"] ];

//----------------------------------------------------------------------------------------------------
//SAMPLE PLUGIN

(function($) {
	$.fn.sampleOptions = function() {  	//Add the function
		return this.each(function() { 	//Loop over each element
			
		//----------------------------------------------------------------------------------------------------
		//INIT VARIABLES
			
			var $thisWindow 		= $(this),
				
				//FAMILY
				family 				= $thisWindow.attr('data-font'),
				familyName 			= FontCollectionData[family].name,
				
				//SAMPLE
				sampleString		= FontCollectionData[family].sampleString,
				
				//PROPS
				weights				= FontCollectionData[family].fontProps.weights,
				hasItalic			= FontCollectionData[family].fontProps.hasItalic,
				isVariable			= FontCollectionData[family].fontProps.isVariable,
				axis				= FontCollectionData[family].fontProps.axis,
				
				//SAMPLE STYLE
				sizeI 				= FontCollectionData[family].sampleStyle.sizeI,
				size 				= fontSizeOptions[sizeI],
				
				weightI 			= FontCollectionData[family].sampleStyle.weightI,
				italicI				= FontCollectionData[family].sampleStyle.italicI,
				
				tracking			= FontCollectionData[family].sampleStyle.tracking,
				leading				= FontCollectionData[family].sampleStyle.leading,
				align				= FontCollectionData[family].sampleStyle.align,
				varValues			= FontCollectionData[family].sampleStyle.variable,
				openType			= FontCollectionData[family].sampleStyle.openType;
			
		//----------------------------------------------------------------------------------------------------
		//CONSTRUCTION
			
			$thisWindow.find('.toolbar').append(
				function() {
					if ( !isVariable ) {
						return $('<div class="sample-style-option">').append(
							$('<div class="button">').append(
								$('<div class="value">')
							).append(
								$('<div class="arrow">&lt;-</div>')
							)
						).append(
							$('<div class="options">')
						)
					} else {
						return $('<div class="sample-variable-option">').append(
							$('<div class="button">').append('<div class="var-title">Variable</div>').append('<div class="arrow">&lt;-</div>')
						)
					}
				}
			).append(
				function() {
					if ( hasItalic ) {
						return $('<div class="sample-italic-option button">I</div>')
					}
				}
			).append(
				$('<div class="sample-format-option">').append(
					$('<div class="sample-size-option clearfix">').append('<div class="sample-option-icon sample-size-icon"><span>T</span>T</div>').append('<div class="vertical-divider">').append('<div class="button minus-button">-</div>').append('<div class="value">').append('<div class="button plus-button">+</div>')
				).append(
					$('<div class="sample-tracking-option clearfix">').append('<div class="sample-option-icon sample-tracking-icon"><span>&lt;-</span><span>-&gt;</span></div>').append('<div class="vertical-divider">').append('<div class="button minus-button">-</div>').append('<div class="value">').append('<div class="button plus-button">+</div>')
				).append(
					$('<div class="sample-leading-option clearfix">').append('<div class="sample-option-icon sample-leading-icon"><span>&lt;-</span><span>-&gt;</span></div>').append('<div class="vertical-divider">').append('<div class="button minus-button">-</div>').append('<div class="value">').append('<div class="button plus-button">+</div>')
				)
			).append(
				function() {
					if( Object.keys(openType).length != 0 ) {
						return $('<div class="sample-opentype-option">').append('<div class="opentype-option-button button">OT</div>')
					}
				}
			).append(
				$('<div class="sample-paragraph-option">').append(
					$('<div class="sample-allcaps-option button">AA</div>')
				).append(
					$('<div class="sample-hyphen-option button">H-</div>')
				)
			).append(
				$('<div class="sample-align-option button">').append('<div class="bar-1"></div><div class="bar-2"></div><div class="bar-3"></div><div class="bar-4"></div>')
			);
			if ( !isVariable ) {
				for (let i = 0; i < weights.length; ++i) {
					$thisWindow.find('.sample-style-option').find('.options').append('<div class="option" data-w="'+weights[i]+'" data-i="'+italicI+'">').append('<div class="short-divider">')
				}
			}
			if ( isVariable ) {
				Object.keys(axis).forEach( function (axisKey) {
					var axisNameName 	= axis[axisKey].axisName,
						axisMax			= axis[axisKey].axisMax,
						axisMin			= axis[axisKey].axisMin,
						axisStep		= axis[axisKey].axisStep;
					$thisWindow.find('.sample-variable-option').append('<div class="divider">').append(
						$('<div class="var-unit" data-v="'+axisKey+'">').append(
							$('<div class="var-info clearfix">').append('<div class="var-name">').append('<div class="var-value">')
						).append(
							$('<div class="var-slider">').append('<input type="range" min="'+axisMin+'" max="'+axisMax+'" step="'+axisStep+'" value="">')
						)
					);
				});
			}
			//OPENTYPE ICONS
			Object.keys(openType).forEach( function(key){
				$thisWindow.find('.sample-opentype-option').append('<div class="opentype-option button" data-ot="'+key+'">')
			});
			$thisWindow.find('.opentype-option').each(function(){
				var dataOT = $(this).attr('data-ot');
//				$(this).append($('.icons *[data-ot="'+dataOT+'"]'));
				$('.icons *[data-ot="'+dataOT+'"]').clone().appendTo($(this));
			});

		//----------------------------------------------------------------------------------------------------
		//INIT VARIABLES
			
			var fontStyleOptions 	= globalFontStyleOptions;

			var $header				= $thisWindow.find('.header'),
				$toolbar 			= $thisWindow.find('.toolbar'),
				$sampleParent		= $thisWindow.find('.sample'),
				$sample				= $thisWindow.find('.sample-string'),

				//STYLES (WEIGHT & ITALIC)
				$styleOption 		= $toolbar.find('.sample-style-option'),
				$styleValue 		= $styleOption.find('.value'),
				$styleButton 		= $styleOption.find('.button'),
				$styleOptionList 	= $styleOption.find('.options'),
				$italicButton 		= $toolbar.find('.sample-italic-option'),

				//VARIABLE
				$variableOption		= $toolbar.find('.sample-variable-option'),
				$variableButton		= $variableOption.find('.button'),
				$variableUnits		= $variableOption.find('.var-unit'),
				$variableSliders	= $variableOption.find('input[type="range"]'),

				//SIZE
				$sizeOption 		= $toolbar.find('.sample-size-option'),
				$sizeValue 			= $sizeOption.find('.value'),
				$sizeButtons 		= $sizeOption.find('.button'),

				//TRACKING
				$trackingOption		= $toolbar.find('.sample-tracking-option'),
				$trackingValue		= $trackingOption.find('.value'),
				$trackingButtons	= $trackingOption.find('.button'),

				//LEADING
				$leadingOption		= $toolbar.find('.sample-leading-option'),
				$leadingValue		= $leadingOption.find('.value'),
				$leadingButtons		= $leadingOption.find('.button'),
				
				//OPENTYPE
				$openTypeOption		= $toolbar.find('.sample-opentype-option'),
				$openTypeButtons	= $openTypeOption.find('.opentype-option'),

				//ALLCAPS
				$allcapsButton		= $toolbar.find('.sample-allcaps-option'),
				$hyphenButton		= $toolbar.find('.sample-hyphen-option'),

				//ALIGN
				$alignButton		= $toolbar.find('.sample-align-option');

		//----------------------------------------------------------------------------------------------------
		//INIT

			$header.text(familyName);

			$sampleParent.scrollbar({
				scrollbarWidth: 16,
				snapThresholdTop: 61,
				snapThresholdBottom: 13
			});

			$sample.css('font-family', familyName);
			$sample.text(sampleString);
			
			$styleValue.text(fontStyleOptions[weightI][italicI]);

		//----------------------------------------------------------------------------------------------------
		//WEIGHT & ITALIC

			//INIT
			$sample.css('font-weight', weightI * 100);

			//update style names
			function styleNames() {
				$styleOptionList.children('.option').each(function() {
					var dataW = $(this).attr('data-w'),
						dataI = $(this).attr('data-i'),
						optionName = fontStyleOptions[dataW][dataI];
					$(this).text(optionName);
				});
				$styleValue.text( fontStyleOptions[weightI][italicI] );
			}
			styleNames();

			//APPLY OPTION
			$styleOptionList.on('click', '.option', function(){
				weightI = $(this).attr('data-w');
				italicI = $(this).attr('data-i');
				$sample.css('font-weight', weightI * 100);
				$styleValue.text( fontStyleOptions[weightI][italicI] );
				//update data
				FontCollectionData[family].sampleStyle.weightI = weightI;
				FontCollectionData[family].sampleStyle.italicI = italicI;
			});

			//WEIGHT OPTIONS BEHAVIOUR
			$styleButton.on('click', function(e){
				if ( !$styleOption.hasClass('is-active') ) {
					$styleOption.addClass('is-active');
					$(document).on('mousedown pointerDown', function handler(e){
						if( !$.contains( $styleOption[0], e.target ) ) {
							$styleOption.removeClass('is-active');
							$(document).off('mousedown pointerDown', handler);
						}
						$styleButton.one('click', function(){
							$(document).off('mousedown pointerDown', handler);
						});
					});
				} else {
					$styleOption.removeClass('is-active');
				}
			});

		//----------------------------------------------------------------------------------------------------
		//ITALIC
			
			if (hasItalic) {
				if (italicI == 1) {
					$sample.css("font-style", "italic");
					$italicButton.addClass('is-active');
				}
				$italicButton.on('click', function(){
					if (italicI == 1) {
						$italicButton.removeClass('is-active');
						$sample.css("font-style", "normal");
						italicI = 0;
						$styleOptionList.children('.option').attr('data-i', 0);
						styleNames();
					} else {
						$italicButton.addClass('is-active');
						$sample.css("font-style", "italic");
						italicI = 1;
						$styleOptionList.children('.option').attr('data-i', 1);
						styleNames();
					}
					FontCollectionData[family].sampleStyle.italicI = italicI;
				});
			}

		//----------------------------------------------------------------------------------------------------
		//VARIABLE

			if (isVariable) {
				var cssValue = '';
				
				Object.keys( varValues ).forEach( function(axisKey){
					var thisValue = varValues[axisKey];
					cssValue += '"'+axisKey+'"'+thisValue+',';
				});
				cssValue = cssValue.slice(0,-1);
				//console.log(cssValue);

				$sample.css('font-variation-settings', cssValue);
				
				$variableUnits.each(function(i){
					var $this = $(this),
						$name = $this.find('.var-name'),
						$value = $this.find('.var-value'),
						$slider = $this.find('input[type="range"]'),
						thisAxis = $this.attr('data-v'),
						axisName = axis[thisAxis].axisName,
						value = varValues[thisAxis];
					//varValues.push([axis,value]);
					//$sample.css('font-variation-settings', '"'+axis+'"'+value);
					
					$slider.val(value);
					$slider.rangeslider({
						polyfill: false
					});
					$name.text(axisName);
					$value.text(value);
					$slider.on('input', function(){
						value = $slider.val();
						$value.text(value);
						//$sample.css('font-variation-settings', '"'+axis+'"'+value);
						//varValues[i][1] = value;
						varValues[thisAxis] = value;
						cssValue = '';
						Object.keys( varValues ).forEach( function(axisKey){
							var thisValue = varValues[axisKey];
							cssValue += '"'+axisKey+'"'+thisValue+',';
						});
						cssValue = cssValue.slice(0,-1);
						$sample.css('font-variation-settings', cssValue);
					});
				});

				//BUTTON BEHAVIOUR
				$variableButton.on('click', function(e){
					if ( !$variableOption.hasClass('is-active') ) {
						$variableOption.addClass('is-active');
						$(document).on('mousedown pointerDown', function handler(e){
							if( !$.contains( $variableOption[0], e.target ) ) {
								$variableOption.removeClass('is-active');
								$(document).off('mousedown pointerDown', handler);
							}
							$variableButton.one('click', function(){
								$(document).off('mousedown pointerDown', handler);
							});
						});
					} else {
						$variableOption.removeClass('is-active');
					}
				});
			}

		//----------------------------------------------------------------------------------------------------
		//SIZE

			$sample.css("font-size", size+"px");
			$sizeValue.text(size+"px");
			$sizeButtons.on('click', function(){
				var $button = $(this);
				if ($button.hasClass('plus-button')) {
					if (sizeI < 11) sizeI += 1;
				} else if ($button.hasClass('minus-button')) {
					if (sizeI > 1) sizeI -= 1;
				}
				size = fontSizeOptions[sizeI];
				$sample.css("font-size",size+"px");
				$sizeValue.text(size+"px");
				//update data
				FontCollectionData[family].sampleStyle.sizeI = sizeI;
			});

		//----------------------------------------------------------------------------------------------------
		//TRACKING

			$sample.css("letter-spacing", tracking / 1000 + "em");
			$trackingValue.text(tracking);
			$trackingButtons.on('click', function(){
				var $button = $(this);
				if ($button.hasClass('plus-button')) {
					if (tracking < 100) tracking += 10;
				} else if ($button.hasClass('minus-button')) {
					if (tracking > -100) tracking -= 10;
				}
				$sample.css("letter-spacing", tracking / 1000 + "em");
				$trackingValue.text(tracking);
				//update data
				FontCollectionData[family].sampleStyle.tracking = tracking;
			});


		//----------------------------------------------------------------------------------------------------
		//LEADING

			$sample.css("line-height", leading);
			$leadingValue.text(leading);
			$leadingButtons.on('click', function(){
				var $button = $(this);
				if ($button.hasClass('plus-button')) {
					if (leading < 2) leading += 0.05;
				} else if ($button.hasClass('minus-button')) {
					if (leading > 0.8) leading -= 0.05;
				}
				leading = Math.round(leading * 100) / 100;
				$sample.css("line-height", leading);
				$leadingValue.text(leading);
				//update data
				FontCollectionData[family].sampleStyle.leading = leading;
			});
			
		//----------------------------------------------------------------------------------------------------
		//OPENTYPE
			
			if ( Object.keys(openType).length != 0 ) {
				
				//init
				var otValue = '';
				Object.keys(openType).forEach(function(key){
					otValue += '"'+key+'"'+openType[key]+',';
				});
				otValue = otValue.slice(0,-1);
				$sample.css('font-feature-settings', otValue);
				console.log(otValue);
			
				$openTypeButtons.each( function(){
					var data = $(this).attr('data-ot');
					if( openType[data] == 1  ) {
						$(this).addClass('is-active');
					}
				});

				$openTypeButtons.on('click', function(){
					otValue = '';
					var $thisButton = $(this),
						data = $thisButton.attr('data-ot');
					if ( openType[data] == 0 ) {
						openType[data] = 1;
						$thisButton.addClass('is-active');
					} else {
						openType[data] = 0;
						$thisButton.removeClass('is-active');
					}
					Object.keys(openType).forEach(function(key){
						otValue += '"'+key+'"'+openType[key]+',';
					});
					otValue = otValue.slice(0,-1);
					$sample.css('font-feature-settings', otValue);
					console.log(otValue);
				});
				
			}

		//----------------------------------------------------------------------------------------------------
		//ALLCAPS

			$allcapsButton.on('click', function(){
				if ( $(this).hasClass('is-active') ) {
					$(this).removeClass('is-active');
					$sample.css('text-transform', 'none');
				} else {
					$(this).addClass('is-active');
					$sample.css('text-transform', 'uppercase');
				}
			});
			
		//----------------------------------------------------------------------------------------------------
		//HYPHENATION
			
			$hyphenButton.on('click', function(){
				if ( $(this).hasClass('is-active') ) {
					$(this).removeClass('is-active');
					$sample.css('hyphens', 'none');
				} else {
					$(this).addClass('is-active');
					$sample.css('hyphens', 'auto');
				}
			});

		//----------------------------------------------------------------------------------------------------
		//ALIGN
			switch (align) {
				case 'left':
					$alignButton.addClass('opt-left');
					$sample.css('text-align', 'left');
					break;
				case 'center':
					$alignButton.addClass('opt-center');
					$sample.css('text-align', 'center');
					break;
				case 'right':
					$alignButton.addClass('opt-right');
					$sample.css('text-align', 'right');
					break;
			}

			$alignButton.on('click', function(){
				$(this).removeClass('opt-'+align);
				switch (align) {
					case 'left':
						align = 'center';
						break;
					case 'center':
						align = 'right';
						break;
					case 'right':
						align = 'left';
						break;
				}
				$(this).addClass('opt-'+align);
				$sample.css('text-align', align);
			});

		});

		return this;
	};
})(jQuery);

$('.typeface-window').sampleOptions();

//====================================================================================================
//RANDOM POSITION PLUGIN

(function($) {
	$.fn.windowRandPos = function() {  	//Add the function
		return this.each(function() { 	//Loop over each element
			var $this = $(this);
			$this.css({
				left: function() {
					return Math.round(($(document).width() - $this.width()) * (Math.random()*0.9+0.05))
				},
				top: function() {
					return Math.round(($(document).height() - $this.height()) * (Math.random()*0.9+0.05))
				}
			});
		});

		return this;
	};
})(jQuery);

$('.window').windowRandPos();

//====================================================================================================
//UI DRAGGABLE

var $draggable = $('.window').draggabilly({
	containment: '#container',
	handle: '.header',
	grid: [1,1]
});
//$(document).on( 'staticClick', '.window', function( event, pointer ) {
//		$(this).children(':not(.header, .close-button, .minify-button)').toggle();
//		$(this).toggleClass('minified');
//});

//====================================================================================================
//Z-INDEX CONTROL///////////////IN PROGRESS

(function($) {
	$.fn.toFront = function() {  	//Add the function
		return this.each(function() { 	//Loop over each element
			var $this = $(this);
			if ( $this.css('z-index') != 1000 ) {
				$('.window').each(function(){
					var z = $(this).css('z-index');
					--z;
					$(this).css('z-index', z);
				});
				$this.css('z-index', '1000');
			}
		});

		return this;
	};
})(jQuery);

$(document).on( 'staticClick dragStart mousedown', '.window', function(e) {
	if( !$(e.target).is('.close-button, .minify-button') ) {
		$(this).toFront();
	}
});

//====================================================================================================
//INIT NEW SAMPLE WINDOW

$('#collection').on('click', '.typeface-item', function(e){
	if ( !$(e.target).is('a') ) {
		var family = $(this).attr('data-font'),
			$thisWindow;
		//console.log(family);
		if( !$('.window[data-font="'+family+'"]').length ) {
			$('#container').append(
				$('<div class="window typeface-window" data-font="'+family+'">').append(
					$('<div class="header">')
				).append(
					$('<div class="minify-button button">')
				).append(
					$('<div class="close-button button">')
				).append(
					$('<div class="toolbar">')
				).append(
					$('<div class="sample window-section">').append(
						$('<div class="sample-string" contenteditable="true" spellcheck="false">')
					)
				).append(
					$('<div class="sample-link">').append('<a href="'+FontCollectionData[family].linkURL+'" target="_blank" >-> '+FontCollectionData[family].link+'</a>')
				)
			);
			$thisWindow = $('.window[data-font="'+family+'"]')
			$thisWindow.windowRandPos().toFront().sampleOptions();
			$draggable.push( $thisWindow.draggabilly({
				containment: '#container',
				handle: '.header',
				grid: [1,1]
			}) );
		} else {
			$('.window[data-font="'+family+'"]').toFront().show();
		}
	}
});

//====================================================================================================
//SCROLLBAR

$('#typeface-list').scrollbar({
	scrollbarWidth: 16,
});

//====================================================================================================
//CLOSE & MINIFY WINDOW
$(document).on('click', '.close-button', function(){
	$(this).parent('.window').hide();
});
$(document).on('click', '.minify-button', function(){
	$(this).parent('.window').children(':not(.header, .close-button, .minify-button)').toggle();
	$(this).parent('.window').toggleClass('minified');
});

//====================================================================================================
//INPUT BOX BEHAVIOUR

$(document).on('focus','#input-box.blank',function(){
	$(this).text('');
	$(this).removeClass('blank');
	$(this).addClass('edited');
});
$(document).on('blur','#input-box',function(){
	if($(this).text().length == 0){
		$(this).removeClass('edited');
		$(this).addClass('blank');
		$(this).text('Type here...');
		$('.typeface-item').each(function(item){
			var key = $(this).attr('data-font');
			//console.log(key);
			var name = FontCollectionData[key].name;
			//console.log(name);
			$(this).find('.typeface-item-typeface span').text(name);
		});
	};
	$('#input-box *').remove();
});
//APPLY INPUT
$(document).on('keyup','#input-box',function(){
	var input = $(this).text()
	$('.typeface-item-typeface span').text(input);
});

//====================================================================================================
//COLOR BUTTON
var degrees = -45;
var colorMode = 0;
//0=light, 1=dark, 2=color
var colorDefault = [['#000', '#fff'], ['#eee', '#000']];
var colorPairs = [['#f68', '#53a'], ['#f96', '#777'], ['#fd6', '#d88'], ['#efa', '#6da'], ['#6f9', '#68d'], ['#6ef', '#ffa'], ['#69f', '#fb9'], ['#a6f','#ff9'], ['#f8e', '#fda']];
var root = $( ":root" ).get(0);
$('#color-button').on('click', function(){
	degrees += 360;
	$(this).css({'transform' : 'rotate('+degrees+'deg)'});

	if (colorMode == 0) {
		colorMode = 1;
		root.style.setProperty("--main-color", colorDefault[1][0]);
		root.style.setProperty("--bg-color", colorDefault[1][1]);
	} else if (colorMode == 1) {
		colorMode = 2;
		var randColor = Math.floor( Math.random() * colorPairs.length );
		root.style.setProperty("--main-color", colorPairs[randColor][0]);
		root.style.setProperty("--bg-color", colorPairs[randColor][1]);
	} else if (colorMode == 2) {
		colorMode = 0;
		root.style.setProperty("--main-color", colorDefault[0][0]);
		root.style.setProperty("--bg-color", colorDefault[0][1]);
	}
});