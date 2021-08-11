$(function(){

    var $demo = $('#demo');

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


});