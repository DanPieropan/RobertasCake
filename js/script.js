/*Menu code*/
function myFunction() {
    var x = document.getElementById("myNavigation");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}

/*Fotos Kontrolle: SlideShow code*/
function currentFoto(n) {
  var i;
  var slideIndex = 0;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  document.getElementsByClassName("Slides")[n-1].style.display = "block";
}

/*Contact code*/
jQuery(document).ready(function(){
  jQuery("#boxMail").click(function(){
    window.location = 'mailto: example@gmail.com' + '?subject=I have a question';
  });
});

jQuery(document).ready(function(){
  jQuery("#boxFacebook").click(function(){
    window.open("http://www.facebook.com");
  });
});

jQuery(document).ready(function(){
  jQuery("#boxInstagram").click(function(){
    window.open("http://www.instagram.com");
  });
});

window.addEvent('domready',function(){
var startItem = 0; //or   0   or any
var thumbs_mask7 = $('thumbs_mask7').setStyle('left',(startItem*60-568)+'px').set('opacity',0.8);
var fxOptions7 = {property:'left',duration:1000, transition:Fx.Transitions.Back.easeOut, wait:false};
var thumbsFx = new Fx.Tween(thumbs_mask7,fxOptions7);
var nS7 = new noobSlide({
  box: $('box7'),
  items: [0,1,2,3,4,5,6,7],
  /*Set-up images window dimension*/
  size: 450,
  handles: $$('#thumbs_handles7 span'),
  fxOptions: fxOptions7,
  onWalk: function(currentItem){
    thumbsFx.start(currentItem*60-568);
  },
  startItem: startItem
});
return false;
});

function reloadJs(src) {
    src = jQuery('script[src$="' + src + '"]').attr("src");
    jQuery('script[src$="' + src + '"]').remove();
    jQuery('<script/>').attr('src', src).appendTo('body');
}

var imgLoad="";
var imgLoadThums="";

jQuery(document).ready(function(){
jQuery("#cakeClassic").click(function(){
  for(i=1; i <= 9; i++) {
    imgLoad += "<span><img src=images/ProductsImg/ClassicCakes/img" + i + ".jpg alt=Photo /></span>";
    imgLoadThums += "<div><img src=images/ProductsImg/ClassicCakes/img" + i + ".jpg alt=Photo Thumb /></div>";
 }
  jQuery("#box7").html(imgLoad);
  jQuery(".thumbs").html(imgLoadThums);
  jQuery("#galleryTitle").html("Classic´s Cakes");
  jQuery(".cakeHide").fadeIn(1000, function(){
     jQuery(".cakeHide").css("display", "block");
     return false;
  });
});
return false;
});

jQuery(document).ready(function(){
jQuery("#cakeDesign").click(function(){
  for(i=1; i <= 9; i++) {
    imgLoad += "<span><img src=images/ProductsImg/CakeDesign/img" + i + ".jpg alt=Photo /></span>";
    imgLoadThums += "<div><img src=images/ProductsImg/CakeDesign/img" + i + ".jpg alt=Photo Thumb /></div>";
 }
  jQuery("#box7").html(imgLoad);
  jQuery(".thumbs").html(imgLoadThums);
  jQuery("#galleryTitle").html("Cake Design");
  jQuery(".cakeHide").fadeIn(1000, function(){
     jQuery(".cakeHide").css("display", "block");
     return false;
  });
});
return false;
});

jQuery(document).ready(function(){
jQuery("#macarons").click(function(){
  for(i=1; i <= 9; i++) {
    imgLoad += "<span><img src=images/ProductsImg/Macarons/img" + i + ".jpg alt=Photo /></span>";
    imgLoadThums += "<div><img src=images/ProductsImg/Macarons/img" + i + ".jpg alt=Photo Thumb /></div>";
 }

  jQuery("#box7").html(imgLoad);
  jQuery(".thumbs").html(imgLoadThums);
  jQuery("#galleryTitle").html("Macarons");
  jQuery(".cakeHide").fadeIn(1000, function(){
     jQuery(".cakeHide").css("display", "block");
     return false;
  });
});
return false;
});

jQuery(document).ready(function(){
jQuery("#petitfours").click(function(){
  for(i=1; i <= 9; i++) {
    imgLoad += "<span><img src=images/ProductsImg/PetitFour/img" + i + ".jpg alt=Photo /></span>";
    imgLoadThums += "<div><img src=images/ProductsImg/PetitFour/img" + i + ".jpg alt=Photo Thumb /></div>";
 }
  jQuery("#box7").html(imgLoad);
  jQuery(".thumbs").html(imgLoadThums);
  jQuery("#galleryTitle").html("Petit Fours");
  jQuery(".cakeHide").fadeIn(1000, function(){
     jQuery(".cakeHide").css("display", "block");
     return false;
  });
});
return false;
});

jQuery(document).ready(function(){
  jQuery("#BackToProducts").click(function(){
    jQuery('.cakeHide').fadeOut(1000, function(){
      jQuery('.cakeHide').css("display", "none");
      reloadJs('script.js');
      return false;
    });

  });
  return false;
});
