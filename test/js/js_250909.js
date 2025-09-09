console.log('연결되었습니다')
$('.box').addClass('on')

$(document).ready(function(){
    $('box').addClass('on')
    console.log('11111111')

    $('.box').on('mouseenter', function(){
        console.log('연결했다!!')
        $('.box').addClass('on')
    })
    $('.box').on('mouseleave', function(){
        console.log('내려갔다!')
        $('.box').removeClass('on')
    })

})

console.log('2연결되어있음')