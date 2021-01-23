$(document).ready(function () {
  // Создаем табы
  var tabsItem = $('.tabs__item');
  var contentItem = $('.content__item')

  tabsItem.on('click', function (event) {
    var activeContent = $(this).attr('data-target');
    tabsItem.removeClass('tabs__item--active')
    contentItem.removeClass('content__item--active')
    $(activeContent).toggleClass('content__item--active');
    $(this).toggleClass('tabs__item--active');
  });

  // Создаем слайдер 1

  var mySwiper = new Swiper('.testimonial__swiper-container', {
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 7000,
    },
    // Остановка при наведении мышкой
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });

        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
  })

  // Создаем слайдер 2
  var storiesSlider = new Swiper(".stories-slider", {
    // Optional parameters
    // loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-prev",
      prevEl: ".swiper-button-next",
    },
    // Делаем двойной слайдер
    slidesPerView: 2,
    slidesPerGroup: 2,

    // Листаем слайды кнопками
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  })

  var menuButton = document.querySelector(".header-button")
    menuButton.addEventListener('click', function () { 
    console.log('Кнопка работает');
    document.querySelector('.header-menu-mobile').classList.toggle('header-menu--visible');
    // document.querySelector('.header-login').classList.toggle('header-login--visible');
    document.querySelector('.header-mobile-menu').classList.toggle('header-mobile-menu--visible');
   });

   var menuButton = document.querySelector(".header-button-close")
    menuButton.addEventListener('click', function () { 
    console.log('Кнопка работает');
    document.querySelector('.header-menu-mobile').classList.toggle('header-menu--visible');
    // document.querySelector('.header-login').classList.toggle('header-login--visible');
    document.querySelector('.header-mobile-menu').classList.toggle('header-mobile-menu--visible');
   });

  // Модальное окно
  var modalButton = $('[data-toggle=modal]');
  var clouseModalButton = $(".modal__close");
  modalButton.on('click',  openModal);
  clouseModalButton.on('click', closeModal);
  
  // Открытие окна
  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  // Закрытие окна
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

});

