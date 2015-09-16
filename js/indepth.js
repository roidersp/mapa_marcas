var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="adivina-quien";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;
var marcas={"adidas":true,"nike":true,"newbalance":true,"underarmour":true,"puma":true,"otros":true};

var ventana_alto = $(window).height();
var ventana_ancho = $(window).width();

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
	 
	/* $("#pais_cont").css({
		width: ventana_ancho+"px",
		height: ventana_alto+"px"
	});*/


	//$("#indepth_break_2").css("height",)
	if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    {   	
    }else{
    	
    	 if(ventana_ancho>600){
	    	 $('#indepth_cover').css("height",(ventana_alto-100)+"px");


	 	//$('#indepth_cover .indepth_cover_back_body').css("top",ventana_alto*.60);
 	}
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
    
    if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
    }
		loadDisqus($("#indepth_coments"),disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);
});

$(window).on("resize", function(){
	indepth_sizeAdjust(false);
    	 if(ventana_alto>600 || ventana_ancho>600){
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

var cont=$("#pais_cont");

$.getJSON( urlIndepth+"js/data.json", function( data ) {
	
	
	
	$.each(data, function( i, item ) {
		var option='<option value="'+i+'">'+item["nombre"]+'</option> ';
		$("#seleccionador_movil select").append(option);
		
	});
	
	
	
	if(ventana_alto>600){
		var pais=data['albania'];
		if(pais!=undefined){
			$("#pais_nombre").html(pais["nombre"]);
			var champs=pais["champ"];
			var euro=pais["euro"];
			if(champs!=undefined){
				console.log(champs);
				$.each(champs, function( i, item ) {
					var nombre=item["nombre"];
					var images="images/equipos_logos/"+normalize(nombre).replace(/\s/g,"-").toLowerCase()+".png";
					var div='<div class="pais_item_cont"><div class="pais_item" ><div class="pais_logo" style="background-image: url('+images+')"></div><div class="equipo_eq">'+nombre+'</div></div><div class="pais_item"><div class="pais_marca '+item["marca"].toLowerCase()+'"></div> </div></div>'
					cont.find(".pais_datos").append(div);
				});
			}
			
			if(euro!=undefined){
				console.log(euro);
				$.each(euro, function( i, item ) {
					var nombre=item["nombre"];
					var images="images/equipos_logos/"+normalize(nombre).replace(/\s/g,"-").replace(".","").toLowerCase()+".png";
					var div='<div class="pais_item_cont"><div class="pais_item" ><div class="pais_logo" style="background-image: url('+images+')"></div><div class="equipo_eq">'+nombre+'</div></div><div class="pais_item"><div class="pais_marca '+item["marca"].toLowerCase()+'"></div> </div></div>'
					cont.find(".pais_datos").append(div);
				});
			}
			cont.fadeIn();
			cont.css("display","table");
		}
	}
	
	$(document).on("change","#seleccionador_movil select",function(){
		var pais_id=$(this).val();
		var pais=data[pais_id];
		console.log(pais);
		if(pais!=undefined){
			$("#pais_nombre").html(pais["nombre"]);
			var champs=pais["champ"];
			var euro=pais["euro"];
			if(champs!=undefined){
				console.log(champs);
				$.each(champs, function( i, item ) {
					var nombre=item["nombre"];
					var images="images/equipos_logos/"+normalize(nombre).replace(/\s/g,"-").toLowerCase()+".png";
					var div='<div class="pais_item_cont"><div class="pais_item" ><div class="pais_logo" style="background-image: url('+images+')"></div><div class="equipo_eq">'+nombre+'</div></div><div class="pais_item"><div class="pais_marca '+item["marca"].toLowerCase()+'"></div> </div></div>'
					cont.find(".pais_datos").append(div);
				});
			}
			
			if(euro!=undefined){
				console.log(euro);
				$.each(euro, function( i, item ) {
					var nombre=item["nombre"];
					var images="images/equipos_logos/"+normalize(nombre).replace(/\s/g,"-").replace(".","").toLowerCase()+".png";
					var div='<div class="pais_item_cont"><div class="pais_item" ><div class="pais_logo" style="background-image: url('+images+')"></div><div class="equipo_eq">'+nombre+'</div></div><div class="pais_item"><div class="pais_marca '+item["marca"].toLowerCase()+'"></div> </div></div>'
					cont.find(".pais_datos").append(div);
				});
			}
			cont.fadeIn();
			cont.css("display","table");
		}
	});
	
	/*<div class="pais_item_cont">
								<div class="pais_item" >
									<div class="pais_logo" style="background-image: url(images/equipos_logos/ajax.png)">
									
									</div>
									<div class="equipo_eq">
										Real Madrid
									</div>
								</div>
								<div class="pais_item"><div class="pais_marca adidas"></div> </div>
							</div>
	*/
	$(document).on("click","#europa_paises .pais", function(){
		var pais_id=$(this).attr("id");
		var pais=data[pais_id];
		cont.find(".pais_datos").html("");
		if(pais!=undefined){
			$("#pais_nombre").html(pais["nombre"]);
			var champs=pais["champ"];
			var euro=pais["euro"];
			if(champs!=undefined){
				console.log(champs);
				$.each(champs, function( i, item ) {
					var nombre=item["nombre"];
					var images="images/equipos_logos/"+normalize(nombre).replace(/\s/g,"-").toLowerCase()+".png";
					var div='<div class="pais_item_cont"><div class="pais_item" ><div class="pais_logo" style="background-image: url('+images+')"></div><div class="equipo_eq">'+nombre+'</div></div><div class="pais_item"><div class="pais_marca '+item["marca"].toLowerCase()+'"></div> </div></div>'
					cont.find(".pais_datos").append(div);
				});
			}
			
			if(euro!=undefined){
				console.log(euro);
				$.each(euro, function( i, item ) {
					var nombre=item["nombre"];
					var images="images/equipos_logos/"+normalize(nombre).replace(/\s/g,"-").replace(".","").toLowerCase()+".png";
					var div='<div class="pais_item_cont"><div class="pais_item" ><div class="pais_logo" style="background-image: url('+images+')"></div><div class="equipo_eq">'+nombre+'</div></div><div class="pais_item"><div class="pais_marca '+item["marca"].toLowerCase()+'"></div> </div></div>'
					cont.find(".pais_datos").append(div);
				});
			}
			cont.fadeIn();
			cont.css("display","table");
		}
		
		
	});
	
});

$(document).on("click","#pais_close",function(){
	cont.fadeOut("slow");
});


$(document).on({
	mouseenter: function () {
		
        $(this).find(".st0").attr("class","st0 pais_hover");
    },
    mouseleave: function () {
       $(this).find(".st0").attr("class","st0");
    }
},"#europa_paises .pais");

var copa="champ";

$(document).on("click", "#selec_izq", function(){
	$(".selec_titulo").animate({
		"margin-left":"0px"
	},300);
	$(this).hide();
	$(".euro").hide();
	$(".champ").show();
	copa="champ";
	$("#selec_der").show();
	/*$(".marca_champ").show();
	$(".marca_euro").hide();*/
	$(".marcas_item").removeClass("apagado");
	marcas={"adidas":true,"nike":true,"newbalance":true,"underarmour":true,"puma":true,"otros":true};
});

$(document).on("click", "#selec_der", function(){
	$(".selec_titulo").animate({
		"margin-left":"-100%"
	},300);
	$(this).hide();
	$(".champ").hide();
	$(".euro").show();
	$("#selec_izq").show();
	copa="euro";
	$(".marcas_item").removeClass("apagado");
	marcas={"adidas":true,"nike":true,"newbalance":true,"underarmour":true,"puma":true,"otros":true};
	/*$(".marca_champ").hide();
	$(".marca_euro").show();*/
});

$(document).on("click",".marcas_item", function(){
	var marca_item=$(this).attr("marca");
	
	
	if(marcas[marca_item]){
		$(this).addClass("apagado");
		$("."+marca_item).hide();
		marcas[marca_item]=false;
	}else{
		$(this).removeClass("apagado");
		marcas[marca_item]=true;
		$("."+marca_item+"."+copa).show();
		marcas={"adidas":true,"nike":true,"newbalance":true,"underarmour":true,"puma":true,"otros":true};
	}
	
});

var normalize = (function() {
  var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇçğńň", 
      to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunnccgnn",
      mapping = {};
 
  for(var i = 0, j = from.length; i < j; i++ )
      mapping[ from.charAt( i ) ] = to.charAt( i );
 
  return function( str ) {
      var ret = [];
      for( var i = 0, j = str.length; i < j; i++ ) {
          var c = str.charAt( i );
          if( mapping.hasOwnProperty( str.charAt( i ) ) )
              ret.push( mapping[ c ] );
          else
              ret.push( c );
      }      
      return ret.join( '' );
  }
 
})();


