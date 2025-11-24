$(document).ready(function () {
    const visual_swiper = new Swiper('.visual .swiper', {

        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },

        loop: true,

        /* ★ 페이드 효과 적용 */
        effect: "fade",
        fadeEffect: {
            crossFade: true, // 자연스럽게 겹치면서 사라짐
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction', // 숫자 페이징(1/3 이런거)
        },

        navigation: {
            nextEl: '.btn_next',
            prevEl: 'btn_prev',
        },

    });
}); // 맨끝
