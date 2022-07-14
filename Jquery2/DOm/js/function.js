$(function(){
    //função append() para adicionar conteudos elementos no final do elemento que selecionarmos
    //$('.box').eq(0).append('<h3>Meu elemento adicionado dinamicamente</h3>');

    //var el = $('<h3>Meu conteudo</h3>').appendTo($('.box')).css('color','red');

    //el.css('color','red')
    //$('.box').prepend('<h3>Ola mundo</h3>');

    //var t = "<p>meu conteudo após a div box</p>";

    //$('.box').after(t);

    //$('.box').after(t);

    //$(t).insertAfter($('.box')).css('color','red');
    //$(t).insertBefore($('.box')).css('color','red');
    setTimeout(function(){
    $('.box').eq(1).remove();
},3000)
})