$(document).ready(function(){
            $(".menu-icon").click(function(){
                $(".navbar-collapse").toggleClass("collapse")
            });
        });

$(document).ready(function(){
      $('.my-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 200,
        infinite: true,
        autoplaySpeed: 1000,
        autoplay: true,
        responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
      });
    });

$(document).ready(function(){
      $('.testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 200,
        infinite: true,
        autoplaySpeed: 1000,
        autoplay: true,
        responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
      });
    });

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$(document).ready(function(){
$('.jsCounter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
});