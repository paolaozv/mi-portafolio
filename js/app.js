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

    $(".smoove").smoove({
        offset  : "15%",
        moveY   : "40px",
    });

    $("#menu").click(menu);
    $(".remove").click(menuOcultar);
    $("#liUno").click(menuOcultar);
    $("#liDos").click(menuOcultar);
    $("#liTres").click(menuOcultar);
    $("#liCuatro").click(menuOcultar);
    $("#liCinco").click(menuOcultar);
    $("#js").click(javascript);
    $("#html").click(html);
    $("#down").click(down);
};

$(document).ready(cargarPagina);

var menuOcultar = function() {
    $(".desplegable").hide("slow");
};

var menu = function() {
    $(".desplegable").show("slow");
};


var javascript = function() {
    $("#htmlCss").hide("slow");
    $("#javascript").show("slow");
    $("#projects").removeClass("height");
};

var html = function() {
    $("#javascript").hide("slow");
    $("#htmlCss").show("slow");
    $("#projects").addClass("height");
};

var down = function(e) {
    e.preventDefault();
    $("html, body").animate({ 
        scrollTop: $($(this).attr("href")).offset().top}, 500, "linear");
};