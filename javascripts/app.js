//app.js
$(document).ready(function(){
  var speed = 400;            //ms
  var autoswitch = true;      //auto slider options
  var autoswith_speed = 4500   //ms
  var autoswith_speed2 = 3800 //ms

  //add initial active class
  $('.slide').first().addClass('active');
  $('.slide2').first().addClass('active2');

  //hide all slides
  $('.slide').hide();
  $('.slide2').hide();

  //show first slide
  $('.active').show();
  $('.active2').show();

  //Handler
  $('#next').on('click', nextSlide);
  $('#prev').on('click', prevSlide);
  $('#next2').on('click', nextSlide2);
  $('#prev2').on('click', prevSlide2);

  var interval;
  function startSlide() {
    if(autoswitch == true){
      interval = setInterval(function(){
        nextSlide();
      }, autoswith_speed);
    }
  }

  //swith to next
  function nextSlide(){
    $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':last-child')){
      $('.slide').first().addClass('active');
    }else{
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }

  //swith to prev
  function prevSlide(){
    $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':first-child')){
      $('.slide').last().addClass('active');
    }else{
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }

  function stopSlide(){
    clearInterval(interval);
  }

  $('.active').on('mouseenter', stopSlide).on('mouseleave', startSlide);
  startSlide();

//===============Slide2===================//
var interval2;
function startSlide2() {
  if(autoswitch == true){
    interval2 = setInterval(function(){
      nextSlide2();
    }, autoswith_speed);
  }
}

//swith to next
function nextSlide2(){
  $('.active2').removeClass('active2').addClass('oldActive2');
  if($('.oldActive2').is(':last-child')){
    $('.slide2').first().addClass('active2');
  }else{
    $('.oldActive2').next().addClass('active2');
  }
  $('.oldActive2').removeClass('oldActive2');
  $('.slide2').fadeOut(speed);
  $('.active2').fadeIn(speed);
}

//swith to prev
function prevSlide2(){
  $('.active2').removeClass('active2').addClass('oldActive2');
  if($('.oldActive2').is(':first-child')){
    $('.slide2').last().addClass('active2');
  }else{
    $('.oldActive2').prev().addClass('active2');
  }
  $('.oldActive2').removeClass('oldActive2');
  $('.slide2').fadeOut(speed);
  $('.active2').fadeIn(speed);
}

function stopSlide2(){
  clearInterval(interval2);
}

$('.active2').on('mouseenter', stopSlide2).on('mouseleave', startSlide2);
startSlide2();

  ///////////////Doodle////////////////////
  //add initial active class
  $('.doodleSlide').first().addClass('activeDoodle');

  //hide all slides
  $('.doodleSlide').hide();

  //show first slide
  $('.activeDoodle').show();

  var interval2;
  function startSlide2() {
    if(autoswitch == true){
      interval2 = setInterval(function(){
        $('.activeDoodle').removeClass('activeDoodle').addClass('oldActiveDoodle');
        if($('.oldActiveDoodle').is(':last-child')){
          $('.doodleSlide').first().addClass('activeDoodle');
        }else{
          $('.oldActiveDoodle').next().addClass('activeDoodle');
        }
        $('.oldActiveDoodle').removeClass('oldActiveDoodle');
        $('.doodleSlide').fadeOut(speed);
        $('.activeDoodle').fadeIn(speed);
      }, autoswith_speed2);
    }
  }

  function stopSlide2(){
    clearInterval(interval2);
  }

  $('.activeDoodle').on('mouseenter', stopSlide2).on('mouseleave', startSlide2);
  startSlide2();
});
