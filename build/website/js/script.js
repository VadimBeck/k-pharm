$(document).ready(function() {
	$(".fancybox").fancybox({
    touch: false
  });

  // меню на мобильных
  $("#nav-toggle").on("click", function() {
    if ($(this).hasClass("is-active"))  {
      $(this).removeClass("is-active");
      $('body').removeClass("nav-exposed").addClass("nav-closed");
    } else {
      $(this).addClass("is-active");
      $('body').removeClass("nav-closed").addClass("nav-exposed");
    }
  })
  $("#mobile-nav .sub-menu__header").click(function(e) {
     e.preventDefault();
      $(this).parent(".level-2").css(
          'transform','translateX(264px)'
      )
  });
  $("#mobile-nav .has-aside-menu").click(function(e) {
      e.preventDefault();
      $(this).siblings('.level-2').css(
          'transform','translateX(-264px)'
      )
  });

  // выпадающее меню по килику на пункт Меню доставки
  $('body').on("click", '.dmenu_link', function(e) {
      e.preventDefault();
      if ($(this).hasClass("is-open")) {
        $(this).removeClass("is-open");
        $('.dropdown_menu').fadeOut();
        $("#body-overlay").removeClass("is-visible");
        $("body").removeClass("no-overflow");
      } else {
        $(this).addClass("is-open");
        $('.dropdown_menu').fadeIn();
        $("#body-overlay").addClass("is-visible");
      }
  });
  $('#body-overlay').on("click", function(e) {
    if (!$('.dropdown_menu').is(e.target) // если клик был не по нашему блоку
        && $('.dropdown_menu').has(e.target).length === 0) { // и не по его дочерним элементам
      $('.dropdown_menu').hide(); // скрываем его
      $("#body-overlay").removeClass("is-visible");
      $("body").removeClass("no-overflow");
    }
  });
  $(".dropdown_menu").on("click", function(e) {
      e.stopPropagation()
  });

  $(".dropdown_menu").on("click", function(e) {
      e.stopPropagation()
  });

  $(".item__tab_content").hide();
  $(".item__tab_content:first-of-type").show();

  // вкладки на странице авторизации
  $('.item__tab li').click(function(){
    $(".item__tab_content").hide();
    $('.item__tab li').removeClass('active');
    let tab = $(this).attr('data-tab');
    $(this).addClass('active');
    $(tab).show();
  });

  // $('.slider').lightSlider({
  //     item:1,
  //     loop:true,
  //     auto: true,
  //     pager: true,
  //     controls: false,
  //     speed: 600,
  //     pause: 7000,
  //     enableDrag: true,
  //     currentPagerPosition:'left',
  //     responsive : [
  //         {
  //           breakpoint:768,
  //           settings: {
  //               controls: false
  //             }
  //         }
  //     ]
  // }); 

  $('#similar').lightSlider({
      item: 4,
      loop:true,
      auto: false,
      pager: false,
      slideMargin: 0,
      controls: false,
      enableDrag: false,
      currentPagerPosition:'left',
      responsive : [
          {
            breakpoint:980,
            settings: {
                item:3,
                slideMove:1,
                controls: true
              }
          },
          {
            breakpoint:768,
            settings: {
                item:2,
                slideMove:1,
                controls: true
              }
          },
          {
            breakpoint: 480,
            settings: {
                item:1,
                slideMove:1,
                controls: true
              }
          }
      ]
  }); 

  // Добавление стрелочек для разворачивания в боковое меню каталога
  $('.menu_list ul ul li').has('ul').addClass('sub_menu');
  $('.sub_menu').prepend('<span class="sub_menu__arrow"></span>');
  $('.menu_list li.active > .sub_menu__arrow').addClass('slidedown');
  $('.sub_menu__arrow').click(function(){
      $(this).siblings('ul').slideToggle('normal');
      $(this).toggleClass('slidedown');
  });

});

