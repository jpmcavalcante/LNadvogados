/* Pegando apenas os elementos especificos */
var btnMenu = document.querySelectorAll('.btn-pag');

/* Pegando Eventode Click e animando o Scroll */
$(btnMenu).click(function(e){
    e.preventDefault();
    var id = $(this).attr('href');
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset
    }, 1000);
});