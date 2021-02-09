// DOM노드 찾기
var items = $('.main-menu__item');
var btn = $('.main-menu__button');
var panel = $('.board section');
var tab = $('.tab');

// 기능 구현
$(document).ready(function()
{
  items.hover(function(e){
    e.preventDefault();
    items.removeClass('menu-act');
    $(this).addClass('menu-act');
  },function(){
    $(this).removeClass('menu-act');
  });
});


// tab.click(function(e){
//   e.preventDefault();
//   panel.removeClass('tab-act')
//   $(this).parent().parent().addClass('tab-act')
// });

// 검색 슬라이드
$( document ).ready( function() {
  $( '.search-form__btn' ).click( function() {
    $( '.search-form' ).width( '180px' );
  } );
} );

// 검색폼 알럿
var str = $("#search-form__input").val();
$(document).ready(function () {
  $("#search-form__btn").click(function () {
    if (str.length == '0') {
      alert("검색어를 입력하세요");
    }
  });
});



// 슬라이드 구현
// $(".main-menu__button1").mouseenter(function() {
//   $(".sub-group1").stop().slideDown("fast", function() {

//   });
// });
// $(".main-menu__button1").mouseleave(function() {
//   $(".sub-group1").stop().slideUp("fast", function() {

//   });
// });
// $(".main-menu__button2").mouseenter(function() {
//   $(".sub-group2").stop().slideDown("fast", function() {

//   });
// });
// $(".main-menu__button2").mouseleave(function() {
//   $(".sub-group2").stop().slideUp("fast", function() {

//   });
// });
// $(".main-menu__button3").mouseenter(function() {
//   $(".sub-group3").stop().slideDown("fast", function() {

//   });
// });
// $(".main-menu__button3").mouseleave(function() {
//   $(".sub-group3").stop().slideUp("fast", function() {

//   });
// });
// $(".main-menu__button4").mouseenter(function() {
//   $(".sub-group4").stop().slideDown("fast", function() {

//   });
// });
// $(".main-menu__button4").mouseleave(function() {
//   $(".sub-group4").stop().slideUp("fast", function() {

//   });
// });
// $(".main-menu__button5").mouseenter(function() {
//   $(".sub-group5").stop().slideDown("fast", function() {

//   });
// });
// $(".main-menu__button5").mouseleave(function() {
//   $(".sub-group5").stop().slideUp("fast", function() {

//   });
// });
// $(".main-menu__button6").mouseenter(function() {
//   $(".sub-group6").stop().slideDown("fast", function() {

//   });
// });
// $(".main-menu__button6").mouseleave(function() {
//   $(".sub-group6").stop().slideUp("fast", function() {

//   });
// });

$(document).ready(function(){
  $(".md-close").click(function(){
    var state = $(".toggle").css('display');
    if (state == 'none') {
      $(".toggle").show();
    }
    else{
      $('.toggle').hide();
    }
  })
})
//메인 메뉴 구현
$(document).ready(function()
{
  btn.hover(function(e){
    e.preventDefault();
    items.removeClass('menu-act');
    $(this).parent().removeClass('no-act');
    $(this).parent().addClass('menu-block');
    $(this).parent().addClass('slide-start');
    $(this).parent().addClass('menu-act');
  },function(){
    $(this).parent().removeClass('menu-act');
    $(this).parent().removeClass('slide-start');
    $(this).parent().removeClass('menu-block');
    $(this).parent().addClass('no-act');
  });
});
$(document).ready(function()
{
  items.hover(function(e){
    e.preventDefault();
    items.removeClass('menu-hover');
    $(this).addClass('menu-hover');
  },function(){
    $(this).removeClass('menu-hover');
  });
});
$(document).ready(function()
{
  btn.on('click',function(e){
    e.preventDefault();
    items.removeClass('menu-act');
    $(this).parent().addClass('menu-act');
  });
});
