$(function (){
/*
    $('.box1').fadeOut(2000,function(){
        $('.box2').fadeIn(1000,function(){
            console.log("Terminamos");
        })
    });*/

    $('.box1').click(function(){
        $('.box2').slideToggle(2000,function(){
            location.href="http://www.google.com";
        });
    })

})