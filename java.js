$(document).ready(function(){

    var boton = $("#ocultarboton");
    boton.click(function(){
        $("#Foto1").fadeTo("fast",0)
    });

    var boton2 = $("#aparecerboton");
    boton2.click(function(){
        $("#Foto1").fadeTo("fast",1)
    });
 
    var texto = $("#Texto");
    texto.click(function(){
        $(this).text("Mensaje oculto")
    });

    var foto2 = $("#Foto2");
    foto2.mouseenter(function(){
        $(this).css("background-color", "pink");
    });
    foto2.mouseleave(function(){
        $(this).css("background-color", "white");
    });

});