function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}
function deleteCookie(name) {
  setCookie(name, "", {
    expires: -1
  })
}
$(document).ready(function(){
	
	$('body').prepend('<div id="navigation-eye"><div><p>Размер шрифта</p><span id="contentSlider"></span><div id="slider"></div>		</div><div><p>Интервал</p><span id="contentSlider-two"></span><div id="slider-two"></div>		</div><div><p>Изображения</p><div class="imgs-block"><p><span class="status" data-status="on">Включены</span></p><div><span data-status="on">Включены</span><span data-status="off">Отключены</span></div></div></div><div><p>Палитра цветов</p><div class="color-block"><p><span class="color" data-color="white">Белая</span></p><div><span data-color="white">Белая</span><span data-color="blue">Голубая</span><span data-color="beige">Бежевая</span><span data-color="braun">Коричневая</span><span data-color="black">Черная</span></div></div></div><div><p class="back">Основная версия</p><img src="./website/eye/img/normal.png" class="main-version" alt="Основная версия"></div><img src="./website/eye/img/hide.png" class="close-nav-eye" alt="Закрыть"></div><a href="#" class="nav-eye-btn">Показать меню настроек</a>');
	
});
$(document).ready(function(){
	var font_size = '';
	var letter_spacing = '';
	$('.imgs-block p,.color-block p').click(function(){
		if($(this).hasClass('open')){
			$(this).next('div').attr('style','');
			$(this).removeClass('open');
		}else{
			$(this).addClass('open');
			$(this).next('div').attr('style','display:block!important;');
		}
		return false;
	});
	$('.imgs-block div span').click(function(){
		$status = $(this).attr('data-status');
		$status_text = 'Включены';
		if($status == 'off'){
			$status_text = 'Отключены';
			$('body').addClass('img-hidden');
		}else{
			$('body').removeClass('img-hidden');
		}
		$('.imgs-block p span').attr('data-status',$status);
		$('.imgs-block p span').text($status_text);
		$('.imgs-block p').removeClass('open');
		$('.imgs-block div').attr('style','');
	});
	$('.color-block div span').click(function(){
		$color = $(this).attr('data-color');
		$color_text = 'Белая';
		switch($color){
			case 'white': $color_text = 'Белая';$('body').attr('data-color',$color); break;
			case 'blue': $color_text = 'Голубая';$('body').attr('data-color',$color); break;
			case 'beige': $color_text = 'Бежевая';$('body').attr('data-color',$color); break;
			case 'braun': $color_text = 'Коричневая';$('body').attr('data-color',$color); break;
			case 'black': $color_text = 'Черная';$('body').attr('data-color',$color); break;
		}
		$('.color-block p span').attr('data-color',$color);
		$('.color-block p span').text($color_text);
		$('.color-block p').removeClass('open');
		$('.color-block div').attr('style','');
	});
	$('#navigation-eye img.close-nav-eye').click(function(){
		$('body.eye-activate').attr('style','padding-top:0px!important');
		$('body.eye-activate #navigation-eye').attr('style','display:none!important;');
		$('body').removeClass('eye-activate');
	});
	$('a.nav-eye-btn').click(function(evt){
		$('body.eye-activate #navigation-eye').attr('style','display:block!important;');
		$('body.eye-activate').attr('style','padding-top:150px!important');
		$(this).attr('style','display:none!important;');
	});
	$('#navigation-eye p.back').click(function(){
		setCookie('eye_active', 'no','');
		$('body.eye-activate,body.eye-activate p,body.eye-activate span,body.eye-activate div,body.eye-activate ul,body.eye-activate aside,body.eye-activate a,body.eye-activate h1,body.eye-activate h2,body.eye-activate h3,body.eye-activate h4,body.eye-activate h5,body.eye-activate h6,body.eye-activate label,body.eye-activate table').not('#lightboxOverlay,#lightbox').attr('style','');
		$('body.eye-activate').removeClass('eye-activate');
		//lslider.refresh();
	});
	$('a.eye-activate-btn').click(function(){
		$('body').addClass('eye-activate');
		setCookie('eye_active', 'yes','');
		return false;
	});
	$eye_active = getCookie('eye_active');
	if($eye_active == 'yes'){
		$('a.eye-activate-btn').trigger('click');
		//console.log(getCookie('eye_active'));
	}
});