$(document).ready(function(){
    // console.log('연결')
    /* 
        .tour .list ul li에
        마우스를 마우스를 올린 li에만
        on클래스를 추가해야함
    */
   $('.tour .list ul li').on("mouseenter", function(){
        // console.log('오버했다!')
        $('.tour .list ul li').removeClass('on')
        $(this).addClass('on')
   })

        $('footer .right_area .family_site button.family_open').on('click', function(){
        console.log('클릭함')
        $('footer .right_area .family_site').addClass('open')   
   })
})