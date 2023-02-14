$(document).ready(function () {
  $('.corousel__inner').slick({
    speed: 1200,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false
        }
      },

    ]
  });
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  //Mod

  $('[data-mod=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.mod__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });



  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .mod__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  })


  function vallidateForms(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 3,
        },
        phone: "required",
        email: {
          required: true,
          email: true
        },
        messages: {
          name:{
            required: "Please specify your name",
            minlength: jQuery.validator.format("At least {0} characters required!")
          },
          email: {
            required: "We need your email address to contact you",
            email: "Your email address must be in the format of name@domain.com"
          }
        }
      }
    })
  }

  vallidateForms('#consultation-form')
  vallidateForms('#consultation form')
  vallidateForms('#order form')

});
