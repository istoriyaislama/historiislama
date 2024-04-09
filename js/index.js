//Button Up
$('.back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0}, 1000); // 800 - Скорость анимации
});

$(window).scroll(function() { // Отслеживаем начало прокрутки
    let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

    if(scrolled > 3) { // Если высота прокрутки больше 3 - показываем кнопку
        $('.back-to-top').addClass('active');
    } else {
        $('.back-to-top').removeClass('active');
    }
});

//Text edit
function c(){
    let text = "Сказал Ас-Суюты: <br><br> قراءة التاريخ أفضل من التجارب <br><br>«Чтение истории — лучший из опытов».<br><br>Тарихуль-хуляфа"
    document.getElementById("textp").innerHTML = text;
}
function z(){
    let text = "Имам аш-Шафи'и (да помилует его Аллах), говорил:<br><br>  من قرأ التاريخ زاد عقله <br><br>– “Тот, кто читает историю, совершенствует свой разум”.<br><br>Аль И’ляну бит Тавбих 13.";
    document.getElementById("textp").innerHTML = text;
}

//img
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });


