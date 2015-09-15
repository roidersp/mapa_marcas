var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="adivina-quien";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;
var marcas={"adidas":true,"nike":true,"new-balance":true,"underarmour":true,"puma":true,"otros":true};

var ventana_alto = $(window).height();
var ventana_ancho = $(window).width();




$(document).on("click","path",function(){
	alert("test");
});

$(document).on("click", "#indepth_share_twiiter", function(){
	var text = encodeURIComponent("¡"+tecnico+" es mi técnico del Tri! Lo descubrí jugando Adivina Quién");
	var url = encodeURIComponent("http://juanfutbol.com/indepth/adivina-quien");
	window.open("https://twitter.com/share?text="+text+"&url="+url+"&via=juanfutbol","","width=500, height=300");
	}
);

$(document).on("click", "#indepth_share_fb", function(){
	var text = encodeURIComponent("¡"+tecnico+" será técnico del Tri! Lo descubrí jugando Adivina Quién");
	var url = encodeURIComponent("http://juanfutbol.com/indepth/adivina-quien?text="+text);
	window.open("https://www.facebook.com/sharer/sharer.php?u="+url,"","width=500, height=300");

});




var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}




var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

  var detect_mobile=function(){
	 var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
 };
 
	var mobile=false;
	
	 if (isMobile.Android())
	 {
	 mobile=true;
	 }
	 else if (isMobile.BlackBerry())
	 {
	 mobile=true;
	 }
	 else if (isMobile.iOS())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Opera())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Windows())
	 {
	 mobile=true;
	 }
	 else
	 {
	 mobile=false;
 }
	 return mobile;
 }
 
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};







$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	
	 ventana_alto = window.innerHeight;
	 ventana_ancho = $(window).width();
	 
	 console.log(ventana_alto);
	 
	 $("#pais_cont").css({
		width: ventana_ancho+"px",
		height: ventana_alto+"px"
	});


	//$("#indepth_break_2").css("height",)
	if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    {   	
    	 $('#indepth_cover_view').css("position","absolute");
    }else{
    	$('#indepth_cover').css("height",(ventana_alto-100)+"px");
    	 if(ventana_alto>600){
	 	$('.indepth_break').css("height",ventana_alto+"px");


	 	//$('#indepth_cover .indepth_cover_back_body').css("top",ventana_alto*.60);
 	}
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
    
    if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
	    console.log("ipad")
    }
		loadDisqus($("#indepth_coments"),disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);
});

$(window).on("resize", function(){
	indepth_sizeAdjust(false);
    	$('#indepth_cover').css("height",(ventana_alto-100)+"px");
    	 if(ventana_alto>600){
	 	$('.indepth_break').css("height",ventana_alto+"px");
	 	//$('#indepth_cover .indepth_cover_back_body').css("top",ventana_alto*.60);
 	}
	 if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
    }
	 if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    { 
    }else{
    	var ventana_alto = $(window).height();
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
})





$(document).on({
	mouseenter: function () {
		console.log( $(this).find(".st0"));
		
        $(this).find(".st0").attr("class","st0 pais_hover");
    },
    mouseleave: function () {
       $(this).find(".st0").attr("class","st0");
    }
},"#europa_paises .pais");


$(document).on("click", "#selec_izq", function(){
	$(".selec_titulo").animate({
		"margin-left":"0px"
	},300);
	$(this).hide();
	$("#selec_der").show();
});

$(document).on("click", "#selec_der", function(){
	$(".selec_titulo").animate({
		"margin-left":"-100%"
	},300);
	$(this).hide();
	$("#selec_izq").show();
});

$(document).on("click",".marcas_item", function(){
	var marca_item=$(this).attr("marca");
	
	console.log(marcas[marca_item]);
	
	if(marcas[marca_item]){
		$(this).addClass("apagado");
		$("."+marca_item).hide();
		marcas[marca_item]=false;
	}else{
		$(this).removeClass("apagado");
		marcas[marca_item]=true;
		$("."+marca_item).show();
	}
	
});




