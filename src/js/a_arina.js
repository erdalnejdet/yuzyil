$(document).ready(function(){
  $('li.has-child').click(function(){
    $(this).children('ul').slideToggle();
  });


});


document.addEventListener('DOMContentLoaded', function(){
  const burger = document.querySelector('.mobile-menu-burger');
  const menuContainer = document.querySelector('.mobile-menu-container');

  burger.addEventListener('click', function(){
    menuContainer.classList.toggle('active');
    burger.classList.toggle('active');
  });
});


var main = new Swiper(".main-header-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  autoplay: {
      delay: 8000,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});


window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 0) {
    header.classList.add('header-white-bg');
  } else {
    header.classList.remove('header-white-bg');
  }
});




var swiper = new Swiper(".references-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop:false,


  pagination: {
      el: ".references-slider-pagination",
      clickable: true,
  },
  breakpoints: {
      467: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      640: {
          slidesPerView:11,
          spaceBetween: 10,
      },
      768: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      1024: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
 
  },
});


var swiper = new Swiper(".box-slider", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop:false,


  pagination: {
      el: ".box-slider-pagination",
      clickable: true,
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 10,
  },
      467: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      640: {
          slidesPerView:1,
          spaceBetween: 10,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 10,
      },
      1024: {
          slidesPerView: 4,
          spaceBetween: 10,
      },
 
  },
});


var swiper = new Swiper(".team-slider", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop:false,


  pagination: {
      el: ".team-slider-pagination",
      clickable: true,
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 10,
  },
      467: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      640: {
          slidesPerView:1,
          spaceBetween: 10,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 10,
      },
      1024: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
 
  },
});



var swiper = new Swiper(".comments-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop:true,


  pagination: {
      el: ".comments-slider-pagination",
      clickable: true,
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 10,
  },
      467: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      640: {
          slidesPerView:1,
          spaceBetween: 10,
      },
      768: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 10,
      },
 
  },
});


var swiper = new Swiper(".before-slider", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop:true,


  pagination: {
      
      clickable: true,
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 10,
  },
      467: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      640: {
          slidesPerView:1,
          spaceBetween: 10,
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 10,
      },
      1024: {
          slidesPerView: 4,
          spaceBetween: 10,
      },
 
  },
});




$(document).ready(function() {
  $(".faq-question").click(function() {
      // Diğer faq-question öğelerinden "active" sınıfını ve "faq-answer" elementlerini kaldırın
      $(".faq-question.active").not(this).removeClass("active").next('.faq-answer').slideUp();
      
      // Tıklanan faq-question elementinin altındaki faq-answer elementini bulun
      var answer = $(this).next('.faq-answer');
      
      // Sadece tıklanan faq-question elementinin altındaki faq-answer elementini açın veya kapatın
      answer.slideToggle();
      
      // Sadece tıklanan faq-question elementine "active" sınıfını ekleyin ve kaldırın
      $(this).toggleClass("active");
  });
});



// Tüm trigger ve closeButtons öğelerini seçin
var triggers = document.querySelectorAll(".trigger");
var closeButtons = document.querySelectorAll(".close-button");

function toggleModal(event) {
    // data-target özelliği ile hedef modalın id'sini alın
    var targetModalId = event.currentTarget.getAttribute("data-target");
    var targetModal = document.getElementById(targetModalId);

    if (targetModal) {
        targetModal.classList.toggle("show-modal");
    }
}

function windowOnClick(event) {
    if (event.target.classList.contains("modal")) {
        event.target.classList.remove("show-modal");
    }
}

// Her bir trigger için event dinleyicisini ekleyin
triggers.forEach(function (trigger) {
    trigger.addEventListener("click", toggleModal);
});

// Her bir closeButton için event dinleyicisini ekleyin
closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener("click", function (event) {
    console.log("tıklandı");
      var targetModalId = event.currentTarget.getAttribute("data-target");
      var targetModal = document.getElementById(targetModalId);

      if (targetModal) {
          targetModal.classList.remove("show-modal");
      }
  });
});

// Tüm modaller için windowOnClick event dinleyicisini ekleyin
var modals = document.querySelectorAll(".modal");
modals.forEach(function (modal) {
    modal.addEventListener("click", windowOnClick);
});




$("#main-form").submit(function (e) {
  e.preventDefault();
  var $ts = $(this);
  var formData = $("#main-form").serialize();
  
  // Form alanlarını kontrol edin
  if (
    $("#name").val() &&
    $("#email").val() &&
    $("#phone").val() &&
    $("#country").val() &&
    $("#url").val()
  ) {
    $.ajax({
      type: "POST",
      url: "https://www.yuzyilhospital.com/landing/obezite/ajax",
      data: formData,
      beforeSend: function () {
        $("button").prop("disabled", true);
        $("button").html("Please Wait");
        console.log("1");
      },
      success: function (response) {
        if (response == "Message sent!") {
          $("button").prop("disabled", true);
          $("button").html("Message sent!");
          alert("Message sent successfully.");
          console.log("2");
        } else {
          $("button").prop("disabled", false);

          alert("Message not sent, please try again.");
          console.log("3");
        }
      },
    });
  } else {
    // Eksik alanları kontrol edin ve bir uyarı gösterin
    alert("Lütfen tüm alanları doldurun!");
  }
});


$("#contact").submit(function (e) {
  e.preventDefault();
  var $ts = $(this);
  var formData = $("#contact").serialize();
  

  
    $("#name").val() &&
    $("#email").val() &&
    $("#phones").val() &&
    $("#message").val() &&
    $("#url").val()
   {
    $.ajax({
      type: "POST",
      url: "https://www.yuzyilhospital.com/landing/obezite/ajax2",
      data: formData,
      beforeSend: function () {
        $("#contact_button").prop("disabled", true);
        $("#contact_button").html("Please Wait");
        console.log("1");
      },
      success: function (response) {
        if (response == "Message sent!") {
          $("#contact_button").prop("disabled", true);
          $("#contact_button").html("Message sent!");
          alert("Message sent successfully.");
          console.log("2");
        } else {
          $("#contact_button").prop("disabled", false);

          alert("Message not sent, please try again.");
          console.log("3");
        }
      },
    });
  } 
});




$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
      $('.dark-logo').fadeTo(0, 1);
      $('.light-logo').fadeTo(0, 0);
      $("header").addClass("light-header");
  } else {
      $('.dark-logo').fadeTo(0, 0);
      $('.light-logo').fadeTo(0, 1);
      $("header").removeClass("light-header");
  }
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
      hasScrolled();
      didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta)
      return;

  if (st > lastScrollTop && st > navbarHeight) {
      $('header').removeClass('nav-down').addClass('nav-up');
  } else {
      if (st + $(window).height() < $(document).height()) {
          $('header').removeClass('nav-up').addClass('nav-down');
      }
  }

  lastScrollTop = st;
}
