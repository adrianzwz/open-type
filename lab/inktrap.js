// $('input[type="range"]').rangeslider({
//     polyfill: false
// });

$(function(){

    var $demo = $('#demo');
        $wUnit = $('#weight'),
        $wSlider = $wUnit.find('input'),
        $wValue = $wUnit.find('.value'),
        w = $wSlider.attr('value');

    $wSlider.rangeslider({
        polyfill: false
    });
    $wValue.text(w);
    $wSlider.val(w);

    $wSlider.on('input', function() {
        w = $(this).val();
        $wValue.text(w);
        $demo.css('font-variation-settings', '"wght"' + w);
    })

    //==============================

    var $sUnit = $('#size'),
        $sSlider = $sUnit.find('input'),
        $sValue = $sUnit.find('.value'),
        s = $sSlider.attr('value');

    $sSlider.rangeslider({
        polyfill: false
    });
    $sValue.text(s);
    $sSlider.val(s);

    $sSlider.on('input', function() {
        s = $(this).val();
        $sValue.text(s);
        $demo.css('font-size', s + "px");
    })

    //==============================

    var $bUnit = $('#blur'),
        $bSlider = $bUnit.find('input'),
        $bValue = $bUnit.find('.value'),
        b = $bSlider.attr('value');

    $bSlider.rangeslider({
        polyfill: false
    });
    $bValue.text(b);
    $bSlider.val(b);

    $bSlider.on('input', function() {
        b = $(this).val();
        $bValue.text(b);
        $demo.css('filter', "blur(" + b + "px)");
    })

});

console.log('load');