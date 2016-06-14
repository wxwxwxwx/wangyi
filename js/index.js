$(function(){
  $('html').addClass('ua-notIE6');
  $('.item').hover(function(){
    $(this).toggleClass('item-hover')
  })
  $('.item').on('click',function(){
    $('.item-active').removeClass('item-active')
    $(this).addClass('item-active')
  })
  $('#fullpage').fullpage({
    anchors:['a','b','c','d','e','f','g','h','i','j','k'],
    scrollBar:true,
    paddingBottom:1,
    scrollingSpeed:1000,
    onLeave:function(index,next,dir){

    $('.item').eq(index-1).removeClass('item-active')
    $('.item').eq(next-1).addClass('item-active')
  }
  });

})
