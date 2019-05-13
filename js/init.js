(function($){
    $(function(){

        $('.sidenav').sidenav();
        $('.parallax').parallax();
        $('#textarea1').val('New Text');
        M.textareaAutoResize($('#textarea1'));
    });
})(jQuery);

$(document).ready(function(){
    $('.modal').modal();
  });