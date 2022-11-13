// jsを記述する際はここに記載していく
$(".hamburger_menu").click(function () {
    $(this).toggleClass('active');
});

$('.hamburger_item a[href]').on('click', function(event) {
    $('.hamburger_menu').trigger('click');
});



function fade_up(){
$('.fadeup_trigger').each(function(){
    let pos=$(this).offset().top-50;
    let scroll=$(window).scrollTop();
    let Wheight=$(window).height();

    if(scroll>=pos-Wheight){
        $(this).addClass("fadeup");
    }else{
        $(this).removeClass('fadeup');
    }

})
};

window.onload = function() {
   $('.fadeup_trigger').removeClass('fadeup');
  fade_up();
};
$(window).scroll(function (){
    fade_up();
  });

$('.nav_item a[href]').click(function(){
    $('.fadeup_trigger').removeClass('fadeup');
    fade_up()
});

$('.hamburger_item a[href]').click(function(){
    $('.fadeup_trigger').removeClass('fadeup');
    fade_up()
});
