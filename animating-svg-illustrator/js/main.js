// Overwriting defaults
var svg = new Walkway({
  selector: '#Livello_1',
  duration: '2000',
  // can pass in a function or a string like 'easeOutQuint'
  easing: function (t) {
    return t * t;
  }
});

svg.draw(function() {
  console.log('Animation finished');
});
//svg.draw();


//$(function(){
//
//  //$('.dropdown nav').css('max-weight', '999px').hide();
//  //$('.dropdown').click(function(){
//  //  $(this).find('nav').toggle();
//  //});
//});
