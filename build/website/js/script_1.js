 $(document).ready(function() {

  $(".fancybox").fancybox();

  $('.menu-icon').click(function(){
    $('nav').slideToggle('fast');
    $(this).toggleClass('opened');
  })
  $('.search_btn').click(function(){
    $('.search_form').toggleClass('visible');
  })
  $('.header_btns .cart').click(function(evt){
    if ($(window).width()>600) {
      evt.preventDefault();
      $('.header_cart').slideToggle();
    }
  })
  $('.catalog_open').click(function(){
    $('aside > ul').slideToggle();
  })
  $('select').niceSelect();

  function replaceSearch() {
    if ($(window).width() < 421) {
      $('.search_form').insertAfter($('header'));
    } else {
      $('.search_form').insertAfter($('header .mobile_tel'));
    }
  }

  replaceSearch();

  if ($(window).width()>1160) {
    var firstTableH = $('.item_tech table:first-of-type').innerHeight() - $('.item_tech table:first-of-type tr:first-child').innerHeight() - 4;
    $('.item_tech table:nth-of-type(2)').find('tr:nth-child(2) td:first-child').innerHeight(firstTableH);
  } else {
    $('.item_tech table:nth-of-type(2)').find('tr:nth-child(2) td:first-child').innerHeight(auto);
  }

  $(window).resize(function(){
    replaceSearch();
    if ($(window).width()>1160) {
      var firstTableH = $('.item_tech table:first-of-type').innerHeight() - $('.item_tech table:first-of-type tr:first-child').innerHeight() - 4;
      $('.item_tech table:nth-of-type(2)').find('tr:nth-child(2) td:first-child').innerHeight(firstTableH);
    } else {
      $('.item_tech table:nth-of-type(2)').find('tr:nth-child(2) td:first-child').innerHeight(auto);
    }
  })

  $('.collections_title').on('click', function(){
    $('.collections_wrapper').slideToggle();
  });

  // информация о товаре в каталоге раскрытие
  $('.catalog-item_info .title').on('click', function(){
    $(this).parent('.catalog-item_info').addClass('open');
  });
  // информация о товаре в каталоге закрытие
  $('.info_close').on('click', function(){
    $(this).parent('.catalog-item_info').removeClass('open');
  });

  $('.slider').lightSlider({
      item:1,
      loop:true,
      auto: true,
      pager: true,
      controls: true,
      speed: 600,
      pause: 7000,
      enableDrag: false,
      currentPagerPosition:'left'
  }); 

  $('.main_catalog').lightSlider({
      item: 4,
      loop:true,
      auto: false,
      pager: false,
      controls: true,
      enableDrag: false,
      currentPagerPosition:'left',
      responsive : [
          {
            breakpoint:800,
            settings: {
                item:3,
                slideMove:1,
                slideMargin:20,
                controls: true
              }
          },
          {
            breakpoint:680,
            settings: {
                item:2,
                slideMove:1,
                slideMargin:20,
                controls: true
              }
          },
          {
            breakpoint:340,
            settings: {
                item:1,
                slideMove:1,
                controls: true
              }
          }
      ]
  });  

  var objectslider = $('#object_gallery').lightSlider({
      gallery:true,
      item: 1,
      loop:true,
      thumbItem:5,
      controls: false,
      slideMargin:40,
      enableDrag: false,
      onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#object_gallery .lslide'
            });
        }  
  });  

  $('#goToPrevSlide').on('click', function () {
    objectslider.goToPrevSlide();
  });
  $('#goToNextSlide').on('click', function () {
    objectslider.goToNextSlide();
  });

  var itemslider = $('#item_gallery').lightSlider({
      gallery:true,
      item: 1,
      loop:true,
      thumbItem:3,
      controls: false,
      slideMargin:40,
      enableDrag: false,
      onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#item_gallery .lslide'
            });
        }  
  });  

  $('#goToPrev').on('click', function () {
    itemslider.goToPrevSlide();
  });
  $('#goToNext').on('click', function () {
    itemslider.goToNextSlide();
  });

  if ($(window).width()>800 && $("#similar").children('li').length < 5) {
    $('.similar_wrapper').find('.similar_btn').addClass('disabled');
  }

  var similarslider = $('#similar').lightSlider({
      item: 4,
      loop:true,
      controls: false,
      slideMargin:40,
      enableDrag: false,
      pager:  false,
      responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:20,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
  });  
  $('#PrevSlide').on('click', function () {
    similarslider.goToPrevSlide();
  });
  $('#NextSlide').on('click', function () {
    similarslider.goToNextSlide();
  });
    
  if ($(window).width()>1160 && $("#compare").children('li').length < 4) {
    $('.compare_scroll').find('.similar_btn').addClass('disabled');
  }
  

  var compareslider = $('#compare').lightSlider({
      item: 3,
      loop:false,
      controls: false,
      slideMargin: 60,
      enableDrag: false,
      pager: false,
      responsive : [
            {
                breakpoint:1160,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:20,
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
  });  


  $('#c_prev').on('click', function () {
    compareslider.goToPrevSlide();
  });
  $('#c_next').on('click', function () {
    compareslider.goToNextSlide();
  });

  $(window).resize(function(){
    if ($(window).width()>800 && $("#similar").children('li').length < 5) {
      $('.similar_wrapper').find('.similar_btn').addClass('disabled');
    } else {
      if ($(window).width()>480 && $("#similar").children('li').length < 3) {
         $('.similar_wrapper').find('.similar_btn').addClass('disabled');
      } else {
        $('.similar_wrapper').find('.similar_btn').removeClass('disabled');
      }
    }
    if ($(window).width()>800 && $(".variants_list").children('li').length < 4) {
      $('.item_variants-wrapper').find('button').addClass('disabled');
    } else {
      if ($(".variants_list").children('li').length < 3) {
         $('.item_variants-wrapper').find('button').addClass('disabled');
      } else {
        $('.item_variants-wrapper').find('button').removeClass('disabled');
      }
    }
    if ($(window).width()>1160 && $("#compare").children('li').length < 4) {
      $('.compare_scroll').find('.similar_btn').addClass('disabled');
    } else {
      if ($(window).width()>768 && $("#similar").children('li').length < 3) {
         $('.compare_scroll').find('.similar_btn').addClass('disabled');
      } else {
        $('.compare_scroll').find('.similar_btn').removeClass('disabled');
      }
    }

    var compareNameHeight = 0;
    $('.compare_item').each(function(){
      console.log($(this).find('.name').height());
      if ($(this).find('.name').innerHeight()>compareNameHeight) {
        compareNameHeight = $(this).find('.name').innerHeight();
      }
    })
    $('.compare_item').each(function(){
      $(this).find('.name').innerHeight(compareNameHeight);
    })
    $('.title .name').innerHeight(compareNameHeight);
    });

  $('.time_link').on('click',function(evt){
    evt.preventDefault();
    var height=$('.d-item_text').innerHeight();
    $(this).parents('.d-item').find('.d-item_time').innerHeight(height);
    $(this).parents('.d-item').find('.d-item_time').toggleClass('visible');
  })

  backButtonShowHide();
  backToTop();

});

$(window).on('load', function(){
  if ($(window).width()>800 && $(".variants_list").children('li').length < 4) {
    $('.item_variants-wrapper').find('button').addClass('disabled');
  }
  var variantslider = $('.variants_list').lightSlider({
      item: 3,
      loop:true,
      controls: false,
      slideMargin:40,
      enableDrag: false,
      pager:  false,
      responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:20,
                  }
            }
        ]
  });  

  $('#Prev').on('click', function () {
    variantslider.goToPrevSlide();
  });
  $('#Next').on('click', function () {
    variantslider.goToNextSlide();
  });

  var compareNameHeight = 0;
  $('.compare_item').each(function(){
    console.log($(this).find('.name').height());
    if ($(this).find('.name').innerHeight()>compareNameHeight) {
      compareNameHeight = $(this).find('.name').innerHeight();
    }
  })
  $('.compare_item').each(function(){
    $(this).find('.name').innerHeight(compareNameHeight);
  })
  $('.title .name').innerHeight(compareNameHeight);
})

function backButtonShowHide() {
    "use strict";
    $(window).scroll(function () {
        if ($(document).scrollTop() > 800) {
            $("#back_to_top").removeClass('off')
            $("#back_to_top").addClass('on')
        } else {
            $("#back_to_top").removeClass('on')
            $("#back_to_top").addClass('off')
        }
    });
};

function backToTop() {
    "use strict";
    $(document).on("click", "#back_to_top", function (e) {
        e.preventDefault(), $("body,html").animate({
            scrollTop: 0
        }, 1000);
    });
}; 
