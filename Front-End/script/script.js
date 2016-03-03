var rotation = 0;

$.fn.animateRotate = function(angle, duration, easing, complete) {
  return this.each(function() {
    var $elem = $(this);
    $({deg: rotation}).animate({deg: angle}, {
      duration: duration,
      easing: easing,
      step: function(degrees) {
        $elem.css({
           transform: 'rotate(' + degrees + 'deg)'
         });
      },
      complete: complete || $.noop
    });
  });
};

jQuery.fn.rotate = function(degrees) {
    $(this).animate({
      transform : 'rotate('+ degrees +'deg)'
    }, 400);
    return $(this);
};

function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
}


$(".dropbutton").click(function() {
	//Select Parentnya
	// var crntbutton =  getComputedStyle( $('.')[0], "")
  // var init = (getRotationDegrees($(this)));
  // console.log(init);
  var parentdiv = $(this).parent();

  // //Select deskripsi tambahannya
  var next = parentdiv.next();
  // init = init+180;

  // $(this).animateRotate(+180, 'medium');
  $(this).toggleClass('rotate');
  next.slideToggle('medium');
});

$('#testpop').popover('show');