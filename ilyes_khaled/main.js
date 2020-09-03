/**********************

main.js
=============

Author:  Adham Mahmoud
Template: Adham 0 Personal Portfolio
Version: 1.0

Author URI: adhamz.me
***************************/
(function () {
  'use strict'
  /* Fixed Header */
  $(window).scroll(function () {
    'use strict';
    var sticky = $('.navbar')
      , scroll = $(window).scrollTop();
    if (scroll >= 100) {
      sticky.addClass('fixed');
    }
    else {
      sticky.removeClass('fixed');
    }
  });

  /* Menu active When Click */
  var scrollEv = false;
  $('.navbar li a, .intro-content a').click(function (e) {
    scrollEv = true;
    $('.nav-item').removeClass('active');
    $('.navbar li a').removeClass('active');
    $(this).addClass('active');
    $('html , body').animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top - 100
    }, 700, function () {
      $(window).on("scroll", scrollEv = false);
    });
    e.preventDefault();
  });
 
  
  /* Menu active while scroll */
  $(window).scroll(function () {
    if (scrollEv != true) {
      $('section').each(function () {
        if ($(window).scrollTop() > $(this).offset().top - 150) {
          var SectionID = $(this).attr('id');
          $('.navbar li a').removeClass('active');
          $('[data-scroll="' + SectionID + '"]').addClass('active');
        }
      });
    }
  });






  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  // Some random colors
  const colors = ["#05dfd7", "#ff80b0", "#ff80b0", "#9399ff", "#05dfd7"];

  const numBalls = 40;
  const balls = [];

  for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random() * 2}em`;
    ball.style.height = ball.style.width;
    ball.style.borderRadius = "50%";
    ball.style.position = "absolute";

    balls.push(ball);
    document.getElementById("balls").append(ball);
  }

  // Keyframes
  balls.forEach((el, i, ra) => {
    let to = {
      x: Math.random() * (i % 2 === 0 ? -11 : 11),
      y: Math.random() * 12
    };

    let anim = el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` }
      ],
      {
        duration: (Math.random() + 1) * 2000, // random duration
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );
  });

/* Form */

$('#sendmessage').click(function(e) {
  e.preventDefault();
  var name = $('#name').val();
  var email = $('#email').val();
  var message = $('#message').val();
  $(this).hide();
  $('.load').fadeIn();
  $.ajax({
      type: 'POST',
      url: "https://www.adhamz.me/mail.php",
      data: {
          name: name,
          email: email,
          message: message
      },
      success: function(result) {
          $('.load').fadeOut();
		   $('#done').fadeIn();
          $('#sendmessage').fadeIn(2000)
      }
  })
});

var list = $(".item-grid .item");
      var numToShow = 6;
      var button = $("#moreitems");
      var numInList = list.length;
      list.hide();
      if (numInList > numToShow) {
        button.show();
      }
      list.slice(0, numToShow).show();
      if (list.filter(':visible').length >= numInList) {
        button.hide();
      }
      button.click(function(){
          var showing = list.filter(':visible').length;
          list.slice(showing - 1, showing + numToShow).fadeIn();
          var nowShowing = list.filter(':visible').length;
          if (nowShowing >= numInList) {
            button.hide();
          }
		  $('.item-grid').isotope({ filter: "*" });
      });
  /* Work Section Filtering */
  $('.item-grid').isotope({ filter: "*" });
  $('.filter-control li').on('click', function () {
    var filterValue = $(this).attr('data-filter');
	  if(filterValue != "*"){
    $('.item-grid').isotope({ filter: filterValue });
	  }
	  else{
		 numToShow = 6;
		list.hide();
      if (numInList > numToShow) {
        button.show();
      }
      list.slice(0, numToShow).show();
		   $('.item-grid').isotope({ filter: "*" });
	  }
  });
  $('.filter-control').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'li', function () {
      $buttonGroup.find('.current').removeClass('current');
      $(this).addClass('current');
    });
  });

  $("#preloader").fadeOut(2000);
    /* WoW Init */
  new WOW().init();

})()