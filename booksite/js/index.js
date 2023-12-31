$('.back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0}, 800); // 800 - Скорость анимации
});

$(window).scroll(function() { // Отслеживаем начало прокрутки
    let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

    if(scrolled > 1) { // Если высота прокрутки больше 1 - показываем кнопку
        $('.back-to-top').addClass('active');
    } else {
        $('.back-to-top').removeClass('active');
    }
});
// preload
document.body.onload = function(){
    setTimeout(function(){
        let pr = document.getElementById("a100js");
        if(!pr.classList.contains("done")){
            pr.classList.add("done");;
        }
    }, 1000)
}