$(document).ready(function() {
    $('.hamburger').on("click", function() {
        $(".header").toggleClass("mobile-header");
        var $header = $('.header');
        if ($header.attr('aria-expanded')) {
            $header.removeAttr('aria-expanded');
        } else {
            $header.attr('aria-expanded', true);
        }
      });

    $(".admission").accordion({
      heightStyle: "fill",
      collapsible: true,
      active: false,
      animate: false
    });

    /* Slick needs no get Reinitialized on window Resize after it was destroyed */
    $(window).on('load resize orientationchange', function() {
        $('.services__container').each(function(){
            var $carousel = $(this);
            /* Initializes a slick carousel only on mobile screens */
            // slick on mobile
            if ($(window).width() > 1260) {
                if ($carousel.hasClass('slick-initialized')) {
                    $carousel.slick('unslick');
                }
                $(".services__container__cards-container__card").on("mouseover", function() {
                    $(this).children('img').css("z-index", "-1");
                  });
              
                $(".services__container__cards-container__card").on("mouseleave", function() {
                    $(this).children('img').css("z-index", "0");
                });
            }
            else{
                if (!$carousel.hasClass('slick-initialized')) {
                    $carousel.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: true
                    });
                }
            }
        });
    });

    $('.slider-link__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
    });

    $('.select-wrapper').on('click', function() {
        $(this).children('.select').toggleClass('open');
    })

    $('.custom-option').on("click", function() {
       var inputData = $(this).data('value');
       console.log(inputData);
       $('.enquire-input').val(inputData);
       $('.select__trigger span').html(inputData);
    });
});