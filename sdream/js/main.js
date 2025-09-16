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
        console.log('여는버튼 클릭')
        $('footer .right_area .family_site').addClass('open')   
     })
     $('footer .right_area .family_site button.family_close').on('click', function(){
          console.log('닫는버튼 클릭')
          $('footer .right_area .family_site').removeClass('open')   
     })
     /* 
          footer .right_area .top를 클릭하면
          브라우저가 상단으로 스크롤이 됨
     */
     $('footer .right_area .top').on('click',function(){
          console.log('누름')
          let scolling = $(window).scrollTop()
          console.log(scolling)
          // $(window).scrollTop(100)
          $('html, body').animate({
               scrollTop : 0
          }, 500)
     })

})