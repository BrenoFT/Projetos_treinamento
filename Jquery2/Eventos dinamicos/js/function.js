$(function(){
    /*
    $('a').click(function(){
        alert("Ola mundo");
        
    })


    $('body').on('click','a',function(){
        alert("Olá mundo")
        return false;
    })
    setTimeout(function(){
        $('body').html('<a href="">Meu link</a>');
    },3000)*/

    var func = function(){
        $('input[type=text]').eq($(this).index()).css('background','green')
    }

    $('input[type=text]').keyup(func);
    
})