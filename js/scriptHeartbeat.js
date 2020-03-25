
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

    document.getElementById('bld01').style.color ='#fff';
    document.getElementById('bld01').style.backgroundColor ='#000';
    document.getElementById('bld01').style.transition ='all 1s';

    document.getElementById('bld02').style.color ='#fff';
    document.getElementById('bld02').style.backgroundColor ='#000';
    document.getElementById('bld02').style.transition ='all 1s';

    document.getElementById('wakuAbout').style.border ='2px solid #000';
    document.getElementById('wakuAbout').style.color ='#000';
    document.getElementById('wakuAbout').style.transition ='all 1s';

    document.getElementById('wakuLogotype').style.border ='2px solid #000';
    document.getElementById('wakuLogotype').style.color ='#000';
    document.getElementById('wakuLogotype').style.transition ='all 1s';

    document.getElementById('wakuLyric').style.border ='2px solid #000';
    document.getElementById('wakuLyric').style.color ='#000';
    document.getElementById('wakuLyric').style.transition ='all 1s';

    document.getElementById('icon1').style.color ='#000';
    document.getElementById('icon1').style.transition ='all 1s';

    document.getElementById('icon2').style.color ='#000';
    document.getElementById('icon2').style.transition ='all 1s';

    document.getElementById('nicoIcon').style.fill ='#000';
    document.getElementById('nicoIcon').style.transition ='all 1s';

    document.getElementById('topIcon').style.color ='#000';
    document.getElementById('topIcon').style.transition ='all 1s';
}
function background_black() {
    document.body.style.color = '#FFFFFF';
    document.body.style.backgroundColor ='#000000';
    document.body.style.transition ='all 1s';
    document.getElementById('bld01').style.color ='#000000';
    document.getElementById('bld01').style.backgroundColor ='#fff';
    document.getElementById('bld01').style.transition ='all 1s';

    document.getElementById('bld02').style.color ='#000000';
    document.getElementById('bld02').style.backgroundColor ='#fff';
    document.getElementById('bld02').style.transition ='all 1s';

    document.getElementById('wakuAbout').style.border ='2px solid #fff';
    document.getElementById('wakuAbout').style.color ='#fff';
    document.getElementById('wakuAbout').style.transition ='all 1s';

    document.getElementById('wakuLogotype').style.border ='2px solid #fff';
    document.getElementById('wakuLogotype').style.color ='#fff';
    document.getElementById('wakuLogotype').style.transition ='all 1s';

    document.getElementById('wakuLyric').style.border ='2px solid #fff';
    document.getElementById('wakuLyric').style.color ='#fff';
    document.getElementById('wakuLyric').style.transition ='all 1s';

    document.getElementById('icon1').style.color ='#fff';
    document.getElementById('icon1').style.transition ='all 1s';

    document.getElementById('icon2').style.color ='#fff';
    document.getElementById('icon2').style.transition ='all 1s';

    document.getElementById('nicoIcon').style.fill ='#fff';
    document.getElementById('nicoIcon').style.transition ='all 1s';

    document.getElementById('topIcon').style.color ='#fff';
    document.getElementById('topIcon').style.transition ='all 1s';
}
function background_black0() {
    document.body.style.color = '#FFFFFF';
    document.body.style.backgroundColor ='#000000';
    document.getElementById('bld01').style.color ='#000000';
    document.getElementById('bld01').style.backgroundColor ='#fff';

    document.getElementById('bld02').style.color ='#000000';
    document.getElementById('bld02').style.backgroundColor ='#fff';

    document.getElementById('wakuAbout').style.border ='2px solid #fff';
    document.getElementById('wakuAbout').style.color ='#fff';

    document.getElementById('wakuLogotype').style.border ='2px solid #fff';
    document.getElementById('wakuLogotype').style.color ='#fff';

    document.getElementById('wakuLyric').style.border ='2px solid #fff';
    document.getElementById('wakuLyric').style.color ='#fff';

    document.getElementById('icon1').style.color ='#fff';

    document.getElementById('icon2').style.color ='#fff';

    document.getElementById('nicoIcon').style.fill ='#fff';

    document.getElementById('topIcon').style.color ='#fff';
}


  (function(d) {
    var config = {
      kitId: 'hdr2muv',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

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
