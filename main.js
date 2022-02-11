$(document).ready(function () {
    $('.slider').bxSlider({
        auto: true,
        controls: true,
        responsive :true,
        speed: 2500
    });
    $('.slider-compani').bxSlider({
        auto: true,
        controls: false,
        responsive :true,
        speed: 2500,
        AdaptiveHeight: true,
        useCSS:true,
        shrinkltems:true
    });
    $('.slider-compani-img').bxSlider({
        auto: true,
        controls: false,
        responsive :true,
        speed: 2500,
        AdaptiveHeight: true,
        useCSS:false
    });
});