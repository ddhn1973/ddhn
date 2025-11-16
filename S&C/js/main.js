$(document).ready(function(){
gsap.registerPlugin(ScrollTrigger); //scrolltrigger를 호출 (js파일 내에서 1번만 부르면됨)    

let poStart = 0; // 상단에 고정할때의 위치
let poGap = 0; // 첫번째와 두번째의 여백
let poObj = '.accordion_wrap .accordion' // 고정요소
let poObjCont = '.cont' // 고정요소 내부의 내용

$(poObj).each(function(i, e) {
	// 핀
	ScrollTrigger.create({
		trigger: e,
		start:  'top +='+(poStart + i * poGap),
		endTrigger: poObj+'.last',
		end: 'top +=80',
		pin: true,
		pinSpacing: false,
		markers: false,
		anticipatePin: 1,
	});


	// 스케일,어둡게
	gsap.to($(e).find(poObjCont), {
		scale: 1,
		top: 0,
		ease: 'none',
		scrollTrigger: {
			trigger: e,
			start:  'top +='+(poStart + i * poGap),
			end: 'top -=700%',
			scrub: 1,
		},
	});	

		const event_swiper = new Swiper('.event .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			769: {    /* 640px 이상일때 적용 */
				slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 20,
			},
			1025: {    /* 640px 이상일때 적용 */
				slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 24,
			},
		},
		//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		// autoplay: {  /* 팝업 자동 실행 */
		// 	delay: 2500,
		// 	disableOnInteraction: true,
		// },
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.swiper-pagination', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
			type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		},
	});
	


	
});

	gsap.registerPlugin(ScrollTrigger);

	const lines = gsap.utils.toArray(".txt-front p");

	lines.forEach((line, i) => {
	gsap.to(line, {
		clipPath: "inset(0 0 0 0)", // 완전히 다 보이게
		ease: "none",
		scrollTrigger: {
		trigger: ".split",
		start: "top top",           // split 시작할 때부터
		end: "bottom bottom",       // 끝날 때까지 천천히
		scrub: true,
		}
	});
	});



	let slogan = $('.split .slogan_wrap') //글자를 감싸는 영역의 이름
	let slogan_obj = $('.slogan p span') //각 줄안에 나타날 글자
	let slogan_rate_s = 1 //처음에 애니메이션 시작할때 글씨가 하단에서 몇 %정도 올라왔을때 애니메이션 시작할 것인지 (1이 100%임)
	let slogan_rate_e = 0 //마지막에 애니메이션이 끝날때 마지막 글자가 하단에서 몇 %정도 올라왔을때 종료할 것인지
	let slogan_leng = slogan_obj.length
	let slogan_scroll
	let slogan_top
	let slogan_start
	let slogan_end
	let slogan_w
	let scrolling
	let win_h

	slogan_ani()
	$(window).scroll(function(){
	//스크롤 할때마다 1번씩
	slogan_ani()
	})
	$(window).resize(function(){
	//브라우저가 리사이즈 될때마다 1번씩 실행
	slogan_ani()
	})

	function slogan_ani(){
	win_h = $(window).height()
	scrolling = $(window).scrollTop()
	slogan_top = slogan.offset().top
	slogan_start = slogan_top - win_h + (win_h * slogan_rate_s)
	slogan_end = slogan_top + slogan.height() - win_h + (win_h * slogan_rate_e)
	slogan_scroll = (scrolling - slogan_start) / (slogan_end - slogan_start) * 100
	if(slogan_start > scrolling) {
	//console.log('시작 이전')
	slogan_obj.width(0)
	}else if(slogan_end > scrolling){
	//console.log('애니메이션중')
	for(i=0; i<slogan_leng; i++){
	slogan_w = (slogan_scroll - (100/slogan_leng)*i) * slogan_leng
	if(slogan_w > 100){
	slogan_w = 100
	}
	slogan_obj.eq(i).width(slogan_w + '%')
	}
	}else{
	//console.log('종료 이후')
	slogan_obj.width('100%')
	}
	}//slogan_ani



	let egg = $(".egg .egg_wrap");
	let txt = $(".and-text");
	let left = $(".left");
	let right = $(".right");
	let egg_rate_s = 0;   // 애니 시작 지점 (0=바로 시작, 1=스크롤 많이 내려야 시작)
	let egg_rate_e = 0.7;   // 애니 종료 지점 (0.3~1 사이로 조절)
	
	
	$(window).on("scroll", function () {
		let winH = $(window).height();
		let scr = $(window).scrollTop();
		let top = egg.offset().top;
	
		let progress = (scr - (top - winH * egg_rate_s)) / (winH * egg_rate_e);
	
		progress = Math.min(1, Math.max(0, progress));
	
		txt.css({
			opacity: progress,
			transform: `translate(-50%, -50%) scale(${0.2 + progress * 0.7})`
		});
	
		let maxMove = $(window).width() * 0.16; 
		let move = progress * maxMove;
		left.css("transform", `translateX(-${move}px)`);
		right.css("transform", `translateX(${move}px)`);
	});


	const menu_swiper = new Swiper('.menu .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			640: {    /* 640px 이상일때 적용 */
				slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 20,
			},
		},
		centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

		navigation: {
			nextEl: '.menu .btn_next',
			prevEl: '.menu .btn_prev',
		},
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.swiper-pagination', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
			type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		},
	});



	const youtube_long_swiper = new Swiper('.long .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 640px 이상일때 적용 */
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 20,
            },
            1025: {    /* 640px 이상일때 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, / 팝업을 화면에 가운데 정렬(가운데 1번이 옴) /
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // autoplay: {  / 팝업 자동 실행 /
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
        navigation: {
            nextEl: '.long .btn_next',
            prevEl: '.long .btn_prev',
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },
        on: {
            init: function() {
                $(".swiper-slide").css('z-index','0')
                $(".swiper-slide-next").css('z-index','9999')
            },
            slideNextTransitionEnd: function() {
                $(".swiper-slide").css('z-index','0')
                $(".swiper-slide-next").css('z-index','9999')
            }
        },
    });


})//맨끝