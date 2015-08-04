$(function(){
  $('.dropdown nav').css('max-weight', '999px').hide();
  $('.dropdown').click(function(){
    $(this).find('nav').toggle();
  });
});
