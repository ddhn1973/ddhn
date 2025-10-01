$(document).ready(function(){

        $('header .gnb').on('mouseenter', function(){
        $(this).addClass('men')
        

        $('header .gnb .gnb_wrap ul.depth1 > li').on('click', function(){
            let open_true = $(this).hasClass('open')
        })
    })
})//끝
// 이벤트 대상 .... header .gnb .gnb_wrap ul 