var cargarPagina = function() {
	var text = $(".txt").text();
	var length = text.length;
	var timeOut;
	var character = 0;
	
	(function typeWriter() { 
    	timeOut = setTimeout(function() {
        	character++;
        	var type = text.substring(0, character);
        	$(".txt").text(type);
        	typeWriter();
        	if (character == length) {
            	clearTimeout(timeOut);
        	}
    	}, 100);
	}());

    $("#menu").click(menu);
    $(".remove").click(menuOcultar);
    $("#liUno").click(menuOcultar);
    $("#liDos").click(menuOcultar);
    $("#liTres").click(menuOcultar);
    $("#liCuatro").click(menuOcultar);
    $("#liCinco").click(menuOcultar);
    $("#js").click(javascript);
    $("#html").click(html);
    $("#mobile").click(mobile);
};

$(document).ready(cargarPagina);

var menu = function() {
    $(".desplegable").show("slow");
};

var menuOcultar = function() {
    $(".desplegable").hide("slow");
};

var javascript = function() {
    $("#htmlCss").hide("slow");
    $("#app").hide("slow");
    $("#javascript").show("slow");
};

var html = function() {
    $("#javascript").hide("slow");
    $("#app").hide("slow");
    $("#htmlCss").show("slow");
};

var mobile = function() {
    $("#javascript").hide("slow");
    $("#htmlCss").hide("slow");
    $("#app").show("slow");
};