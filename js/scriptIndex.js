
$(function(){
  var pagetop = $('#page_top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});


  $(function(){
      $(window).scroll(function (){
          $('.fadein').each(function(){
              var targetElement = $(this).offset().top;
              var scroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (scroll > targetElement - windowHeight + 200){
                  $(this).css('opacity','1');
                  $(this).css('transform','translateY(0)');
              }
          });
      });
  });

  window.addEventListener('DOMContentLoaded', function () {
    // 画面の背景色を設定
    bg_init();
    var bgBlack = document.getElementById('collapsar');
    bgBlack.addEventListener('click', bg_change, false);
  }, false);


  function bg_init() {
  // 背景色黒フラグを取得
  var bkFlg = sessionStorage.getItem('bkFlg');
  // 前画面の背景色が黒であれば、自画面の背景色を黒に設定
  if (bkFlg == "true") {
      background_black0();
  // 前画面の背景色が白であれば、自画面の背景色を白に設定
  } else {
      background_white();
  }
  }


  function bg_change() {
  // 背景色黒フラグを取得
  var bkFlg = sessionStorage.getItem('bkFlg');
  if (bkFlg == "true") {
      background_white();
      bkFlg = "false";
  } else {
      background_black();
      bkFlg = "true";
  }
  // 背景色黒フラグを設定
  sessionStorage.setItem('bkFlg', bkFlg);
  }

function background_white() {
    document.body.style.color = '#000000';
    document.body.style.backgroundColor = '#FFFFFF';
    document.body.style.transition ='all 1s';

    document.getElementById('bs1').style.backgroundColor ='#000';
    document.getElementById('bs1').style.transition ='all 1s';

    document.getElementById('bs2').style.backgroundColor ='#000';
    document.getElementById('bs2').style.transition ='all 1s';

    document.getElementById('bs3').style.backgroundColor ='#000';
    document.getElementById('bs3').style.transition ='all 1s';

    document.getElementById('bs4').style.backgroundColor ='#000';
    document.getElementById('bs4').style.transition ='all 1s';

    document.getElementById('bs5').style.backgroundColor ='#000';
    document.getElementById('bs5').style.transition ='all 1s';

    document.getElementById('bs6').style.backgroundColor ='#000';
    document.getElementById('bs6').style.transition ='all 1s';

    document.getElementById('bs7').style.backgroundColor ='#000';
    document.getElementById('bs7').style.transition ='all 1s';

    document.getElementById('bld01').style.color ='#fff';
    document.getElementById('bld01').style.backgroundColor ='#000';
    document.getElementById('bld01').style.transition ='all 1s';

    document.getElementById('bld02').style.color ='#fff';
    document.getElementById('bld02').style.backgroundColor ='#000';
    document.getElementById('bld02').style.transition ='all 1s';

    document.getElementById('bld03').style.color ='#fff';
    document.getElementById('bld03').style.backgroundColor ='#000';
    document.getElementById('bld03').style.transition ='all 1s';

    document.getElementById('bld04').style.color ='#fff';
    document.getElementById('bld04').style.backgroundColor ='#000';
    document.getElementById('bld04').style.transition ='all 1s';

    document.getElementById('bld05').style.color ='#fff';
    document.getElementById('bld05').style.backgroundColor ='#000';
    document.getElementById('bld05').style.transition ='all 1s';

    document.getElementById('bld06').style.color ='#fff';
    document.getElementById('bld06').style.backgroundColor ='#000';
    document.getElementById('bld06').style.transition ='all 1s';

    document.getElementById('bld07').style.color ='#fff';
    document.getElementById('bld07').style.backgroundColor ='#000';
    document.getElementById('bld07').style.transition ='all 1s';

    document.getElementById('bld08').style.color ='#fff';
    document.getElementById('bld08').style.backgroundColor ='#000';
    document.getElementById('bld08').style.transition ='all 1s';

    document.getElementById('wakuAbout').style.border ='2px solid #000';
    document.getElementById('wakuAbout').style.color ='#000';
    document.getElementById('wakuAbout').style.transition ='all 1s';

    document.getElementById('wakuLogotype').style.border ='2px solid #000';
    document.getElementById('wakuLogotype').style.color ='#000';
    document.getElementById('wakuLogotype').style.transition ='all 1s';

    document.getElementById('icon1').style.color ='#000';
    document.getElementById('icon1').style.transition ='all 1s';

    document.getElementById('icon2').style.color ='#000';
    document.getElementById('icon2').style.transition ='all 1s';

    document.getElementById('icon3').style.color ='#000';
    document.getElementById('icon3').style.transition ='all 1s';

    document.getElementById('nicoIcon').style.fill ='#000';
    document.getElementById('nicoIcon').style.transition ='all 1s';

    document.getElementById('topIcon').style.color ='#000';
    document.getElementById('topIcon').style.transition ='all 1s';
}
function background_black() {
    document.body.style.color = '#FFFFFF';
    document.body.style.backgroundColor ='#000000';
    document.body.style.transition ='all 1s';

    document.getElementById('bs1').style.backgroundColor ='#fff';
    document.getElementById('bs1').style.transition ='all 1s';

    document.getElementById('bs2').style.backgroundColor ='#fff';
    document.getElementById('bs2').style.transition ='all 1s';

    document.getElementById('bs3').style.backgroundColor ='#fff';
    document.getElementById('bs3').style.transition ='all 1s';

    document.getElementById('bs4').style.backgroundColor ='#fff';
    document.getElementById('bs4').style.transition ='all 1s';

    document.getElementById('bs5').style.backgroundColor ='#fff';
    document.getElementById('bs5').style.transition ='all 1s';

    document.getElementById('bs6').style.backgroundColor ='#fff';
    document.getElementById('bs6').style.transition ='all 1s';

    document.getElementById('bs7').style.backgroundColor ='#fff';
    document.getElementById('bs7').style.transition ='all 1s';

    document.getElementById('bld01').style.color ='#000000';
    document.getElementById('bld01').style.backgroundColor ='#fff';
    document.getElementById('bld01').style.transition ='all 1s';

    document.getElementById('bld02').style.color ='#000000';
    document.getElementById('bld02').style.backgroundColor ='#fff';
    document.getElementById('bld02').style.transition ='all 1s';

    document.getElementById('bld03').style.color ='#000000';
    document.getElementById('bld03').style.backgroundColor ='#fff';
    document.getElementById('bld03').style.transition ='all 1s';

    document.getElementById('bld04').style.color ='#000000';
    document.getElementById('bld04').style.backgroundColor ='#fff';
    document.getElementById('bld04').style.transition ='all 1s';

    document.getElementById('bld05').style.color ='#000000';
    document.getElementById('bld05').style.backgroundColor ='#fff';
    document.getElementById('bld05').style.transition ='all 1s';

    document.getElementById('bld06').style.color ='#000000';
    document.getElementById('bld06').style.backgroundColor ='#fff';
    document.getElementById('bld06').style.transition ='all 1s';

    document.getElementById('bld07').style.color ='#000000';
    document.getElementById('bld07').style.backgroundColor ='#fff';
    document.getElementById('bld07').style.transition ='all 1s';

    document.getElementById('bld08').style.color ='#000000';
    document.getElementById('bld08').style.backgroundColor ='#fff';
    document.getElementById('bld08').style.transition ='all 1s';

    document.getElementById('wakuAbout').style.border ='2px solid #fff';
    document.getElementById('wakuAbout').style.color ='#fff';
    document.getElementById('wakuAbout').style.transition ='all 1s';

    document.getElementById('wakuLogotype').style.border ='2px solid #fff';
    document.getElementById('wakuLogotype').style.color ='#fff';
    document.getElementById('wakuLogotype').style.transition ='all 1s';

    document.getElementById('icon1').style.color ='#fff';
    document.getElementById('icon1').style.transition ='all 1s';

    document.getElementById('icon2').style.color ='#fff';
    document.getElementById('icon2').style.transition ='all 1s';

    document.getElementById('icon3').style.color ='#fff';
    document.getElementById('icon3').style.transition ='all 1s';

    document.getElementById('nicoIcon').style.fill ='#fff';
    document.getElementById('nicoIcon').style.transition ='all 1s';

    document.getElementById('topIcon').style.color ='#fff';
    document.getElementById('topIcon').style.transition ='all 1s';
}
function background_black0() {
    document.body.style.color = '#FFFFFF';
    document.body.style.backgroundColor ='#000000';

    document.getElementById('bs1').style.backgroundColor ='#fff';

    document.getElementById('bs2').style.backgroundColor ='#fff';

    document.getElementById('bs3').style.backgroundColor ='#fff';

    document.getElementById('bs4').style.backgroundColor ='#fff';

    document.getElementById('bs5').style.backgroundColor ='#fff';

    document.getElementById('bs6').style.backgroundColor ='#fff';

    document.getElementById('bs7').style.backgroundColor ='#fff';

    document.getElementById('bld01').style.color ='#000000';
    document.getElementById('bld01').style.backgroundColor ='#fff';

    document.getElementById('bld02').style.color ='#000000';
    document.getElementById('bld02').style.backgroundColor ='#fff';

    document.getElementById('bld03').style.color ='#000000';
    document.getElementById('bld03').style.backgroundColor ='#fff';

    document.getElementById('bld04').style.color ='#000000';
    document.getElementById('bld04').style.backgroundColor ='#fff';

    document.getElementById('bld05').style.color ='#000000';
    document.getElementById('bld05').style.backgroundColor ='#fff';

    document.getElementById('bld06').style.color ='#000000';
    document.getElementById('bld06').style.backgroundColor ='#fff';

    document.getElementById('bld07').style.color ='#000000';
    document.getElementById('bld07').style.backgroundColor ='#fff';

    document.getElementById('bld08').style.color ='#000000';
    document.getElementById('bld08').style.backgroundColor ='#fff';

    document.getElementById('wakuAbout').style.border ='2px solid #fff';
    document.getElementById('wakuAbout').style.color ='#fff';

    document.getElementById('wakuLogotype').style.border ='2px solid #fff';
    document.getElementById('wakuLogotype').style.color ='#fff';

    document.getElementById('icon1').style.color ='#fff';

    document.getElementById('icon2').style.color ='#fff';

    document.getElementById('icon3').style.color ='#fff';

    document.getElementById('nicoIcon').style.fill ='#fff';

    document.getElementById('topIcon').style.color ='#fff';
}

window.WebFontConfig = {
  google: { families: ['Sen:700'] },
  active: function() {
    sessionStorage.fonts = true;
  }
};
(function() {
  var wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
