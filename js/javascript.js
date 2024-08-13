// document.addEventListener("DOMContentLoaded",function(){
//     // 이벤트 감지
//     var menuItems = document.querySelectorAll(".nav_A1");
//     for(var i of menuItems){
//         i.addEventListener("mouseenter",function(){
//             var subMenu = this.querySelector(".sub_menu");
//             subMenu.style.display = "block";
//         });
        
//         i.addEventListener("mouseleave",function(){
//             var subMenu = this.querySelector(".sub_menu");
//             subMenu.style.display = "none"
//         });
//     }
// });



// $(".nav > ul > li").mouseover(function(){
//     $(".nav > ul > li").find(".sub_menu").stop().slideDown();
// });

// $(".nav > ul > li").mouseout(function(){
//     $(".nav > ul > li").find(".sub_menu").stop().slideUp();
// });



var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
    navigation: {
      nextEl: ".mySwiper .swiper-button-next",
      prevEl: ".mySwiper .swiper-button-prev",
    },
  });

  var swiper = new Swiper(".mySwiper1", {
    slidesPerView : 3,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
      1401 : {
        slidesPerView : 2.5,
        spaceBetween: 40
      },
      1400 : {
        slidesPerView : 3,
        spaceBetween: 40
      }
    },
      navigation: {
        prevEl: ".s24_flex .swiper-button-prev",
        nextEl: ".s24_flex .swiper-button-next",
      },
    });
  
var swiper = new Swiper(".mySwiper2", {
  slidesPerView : '1.5',
  loop: true,
  spaceBetween: 40,
    navigation: {
      prevEl: ".tv_b_wrap .swiper-button-prev",
      nextEl: ".tv_b_wrap .swiper-button-next",
    },
  });
var swiper = new Swiper(".mySwiper3", {
  slidesPerView : '2.5',
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1401 : {
      slidesPerView : 2.5,
      spaceBetween: 40
    }
  },
    navigation: {
      prevEl: ".bespoke_b_wrap .swiper-button-prev",
      nextEl: ".bespoke_b_wrap .swiper-button-next",
    },
  });
  

 

  $(document).ready(function(){
    $(".news_tag_box").click(function(){
      $(this).addClass("orange");
      $(this).siblings().removeClass("orange");
    })
    $(".news_tag_wrap a").click(function(){
      let option = $(this).attr('data-opticon');
      if(option == 'all'){
        $('.news_box_ul .notice').hide()
        $('.news_box_ul .news').hide()
        $('.news_box_ul .all').show()
      }else if(option == 'notice'){
        $('.news_box_ul .news').hide()
        $('.news_box_ul .notice').show()
      }else if(option == 'news'){
        $('.news_box_ul .news').show()
        $('.news_box_ul .notice').hide()
      }
    });
 });

// 로그인 버튼 이벤트

$(document).ready(function(){
  $(".open_m_nav").click(function(){
    $(".m_right_slide").show();
    $(".open_m_nav").hide();
    $(".close_m_nav").show();
  });

  $(".close_m_nav").click(function(){
    $(".m_right_slide").hide();
    $(".close_m_nav").hide();
    $(".open_m_nav").show();
  });
});





// rollup 버튼
$(document).ready(function(){
  $('#rollup').click(function(){
    $('body,html').animate({scrollTop:0},'600')
  });


  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#rollup').addClass('show');
    } else {
      $('#rollup').removeClass('show');
    }
  });
});

// qmenu 버튼

$(document).ready(function(){
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.btn_qmenu').addClass('show');
    } else {
      $('.btn_qmenu').removeClass('show');
    }
  });
});



$(document).ready(function(){
  $('.btn_qmenu').click(function(){
    $('.overlay').addClass('active')
  });
  $('.close_btn').click(function(){
    $('.overlay').removeClass('active')
  });
});