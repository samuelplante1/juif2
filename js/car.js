//----------------------------------------------------------------------------------------------------------------------
//CARROUSSEL
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
var carousel = $('#carousel'),
    slideWidth = 100 / $("#carousel .slide").size(),
    threshold = slideWidth / 2,
    dragStart,
    dragEnd;

$("#carousel").css("width", $("#carousel .slide").size() + "00%");
$("#carousel .slide").size() > 1 ? $("#carousel").css("left", "-100%"): i = 0;
$('#next').click(function(){ shiftSlide(-1) });
$('#prev').click(function(){ shiftSlide(1) });

carousel.on('mousedown', function(){
  if (carousel.hasClass('transition')) return;
  dragStart = event.pageX;
  $(this).on('mousemove', function(){
    dragEnd = event.pageX;
    $(this).css('transform','translateX('+ dragPos() +'px)')
  })
  $(document).on('mouseup', function(){
    if (dragPos() > threshold) { return shiftSlide(1) }
    if (dragPos() < -threshold) { return shiftSlide(-1) }
    shiftSlide(0);
  })
});

function dragPos() {
  return dragEnd - dragStart;
}

function shiftSlide(direction) {
  if (carousel.hasClass('transition')) return;
  dragEnd = dragStart;
  $(document).off('mouseup')
  carousel.off('mousemove')
          .addClass('transition')
          .css('transform','translateX(' + (direction * slideWidth) + '%)');
  setTimeout(function(){
    if (direction === 1) {
      $('.slide:first').before($('.slide:last'));
    } else if (direction === -1) {
      $('.slide:last').after($('.slide:first'));
    }
    carousel.removeClass('transition')
		carousel.css('transform','translateX(0px)');
  },1000)
}

var timer = setInterval(next, 6000);
function next() {
  $('#next').click();
}
$(".wrap").hover(function() {
  clearInterval(timer)
}, function(){
  timer = setInterval(next, 6000);
});
