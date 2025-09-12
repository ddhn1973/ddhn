$(document).ready(function(){
    console.log('연결')
    
    const how_swiper = new Swiper('.how .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 4, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 24, /* 팝업과 팝업 사이 여백 */
        
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        // loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
        navigation: {
            nextEl: '.how .btn_wrap .btn_next',
            prevEl: '.how .btn_wrap .btn_prev',
        },
        
    });
})