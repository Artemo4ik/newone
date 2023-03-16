$(document).ready(function(){
    $('.bxslider').bxSlider({
        pager: false,
    });
});
$(document).ready(function(){
    $('.bxslider_team').bxSlider({
        pager: true,
    });
});
$(document).ready(function(){
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 200,
        itemMargin: 25,
        touch: true
    });
});
$(document).ready(function(){
    $('.accordion').accordion({
        defaultOpen:''
    });
});
$(document).ready(function($){
$('.primary-nav-trigger').on('click', function(){
    $('.menu-icon').toggleClass('is-clicked');
    $('.primary-nav').toggleClass('is-visible');
    $('body').toggleClass('overflow-hidden')
});
});
$(window).load(function(){
    $(".preload").fadeOut("slow");
});