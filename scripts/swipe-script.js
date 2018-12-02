jQuery(document).ready(function () {
    $(".start").click(function () {
        var scroll_el = $(this).attr("href"); // получаем ссылку
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 60 }, 1500); // анимируем скроолинг к элементу scroll_el
            }

        return false; // выключаем стандартное действие 
    });
});