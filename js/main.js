// jsを記述する際はここに記載していく
$(".hamburger_menu").click(function () {
    $(this).toggleClass('active');
});

$('.hamburger_item a[href]').on('click', function(event) {
    $('.hamburger_menu').trigger('click');
});

