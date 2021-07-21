$(document).on('mousemove', function(e) {
    var w = $(document).width(), h = $(document).height();
    var mouseX = e.pageX, mouseY = e.pageY;
    var a = mouseX/w, b = mouseY/h;
    // var b;
    // var e = 4;
    // if (a <= 0.5) {
    //     b = (a*2)**e/2;
    // } else {
    //     b = 1-(((1-a)*2)**e/2);
    // }
    var stress = a*60 - 30;
    var contrast = b*(-200) + 100;
    $('#demo').css('font-variation-settings', "'STRS'" + stress + ",'CONT'" + contrast);
    $('#values').html('stress = ' + Math.round(stress) + '<br>contrast = ' + Math.round(contrast));
    $('#mouseX').offset({ top: 0, left: mouseX });
    $('#mouseY').offset({ top: mouseY, left: 0 });
})