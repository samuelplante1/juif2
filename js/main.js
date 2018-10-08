//----------------------------------------------------------------------------------------------------------------------
//FONCTIONS CONTENU HTML
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//lien 'ajouter au panier'
$(".containeritems:not(.cart) ul li .imgcontain").append('<a class="btn" href="#">Ajouter au panier</a>');

//----------------------------------------------------------------------------------------------------------------------
//Vérification champs avec formule originale
function formiscomplet(element) {
  let email = element.siblings("input[type=email]").val();
  let password = element.siblings("input[type=password]").val();
  return /^\S{4,}@\S{4,}\.\S{2,}$/.test(email) && /^\S{8,}$/.test(password);
}

//----------------------------------------------------------------------------------------------------------------------
//+/- dans le panier
$("#cart ul li:not(.checkout)").append('<p class="stretch"></p><button class="btn minus">-</button><p class="qty">1</p><button class="btn plus">+</button><button class="btn">Supprimer</button>');
$(".minus").click( function () {
	let nombre = $(this).next().text();
	nombre == 1 ? nombre : nombre--;
 $(this).next().text(nombre);
});
$(".plus").click( function () {
	let nombre = $(this).prev().text();
	nombre == 15 ? alert("Veuillez contacter pour faire des commandes en vrac") : nombre++;
 $(this).prev().text(nombre);
});

$(".product ul li:nth-child(2)").append('<div class="prodcontrol"></p><button class="btn minus">-</button><p class="qty">1</p><button class="btn plus">+</button><button class="btn">Ajouter au panier</button>');

//----------------------------------------------------------------------------------------------------------------------
//Confirmation formulaire
function success() {
  $(".containeritems ul li").append('<h4 class="primary">Le formulaire a bien été envoyé et recu!</h4>');
};
function fail() {
  $(".containeritems ul li").append("<h4 class='danger'>Erreur lors de l'envoi, veuillez réessayer</h4>'");
};

//----------------------------------------------------------------------------------------------------------------------
//ANIMATIONS HOVER
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//texte de la navigation droite
const $primary = "#27aeae"
$("nav ul li.r").hover(function() {
  $(this).stop( true, true ).animate({
  color: $primary
  }, 300, "swing");
}, function() {
  $(this).stop( true, true ).animate({
    color: "#000000"
  }, 300, "swing");
});

//----------------------------------------------------------------------------------------------------------------------
//background de la navigation centrale
$("nav ul li:not(.r):not(.active) a:not(.logo)").css("backgroundColor", "#eeeeee");
$("nav ul li:not(.r):not(.active) a:not(.logo)").hover(function() {
  $(this).stop( true, true ).animate({
  backgroundColor: "#dddddd"
  }, 300, "swing");
}, function() {
  $(this).stop( true, true ).animate({
    backgroundColor: "#eeeeee"
  }, 300, "swing");
});

//----------------------------------------------------------------------------------------------------------------------
//Grossisement de l'image
$(".containeritems:not(.cart) ul li .imgcontain, #catwrap .imgcontain").wrap( function() {
  $(this).wrap("<a class='container' href='" + $(this).attr("href") + "'></a>")
});
$(".containeritems:not(.cart) ul li .imgcontain a.btn, #catwrap .container .imgcontain p").wrap("<div class='darken'></div>");
$(".containeritems:not(.cart) ul li .imgcontain, #catwrap .imgcontain").hover(function() {
  $(this).stop( true, true ).animate({
    width: "+=20px",
    height: "+=20px",
    margin: "-=10px"
  }, 300, "swing").children(":first").stop( true, true ).animate({
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  }, 300, "swing").children(":first").stop( true, true ).animate({
    marginBottom: "20px"
  }, 300, "swing");
}, function() {
  $(this).stop( true, true ).animate({
    width: "-=20px",
    height: "-=20px",
    margin: "+=10px"
  }, 300, "swing").children(":first").stop( true, true ).animate({
    backgroundColor: "rgba(0, 0, 0, 0)"
  }, 300, "swing").children(":first").stop( true, true ).animate({
    marginBottom: "-80px"
  }, 500, "swing");
});

//----------------------------------------------------------------------------------------------------------------------
//background de lien style boutons
$(".btn").css("backgroundColor", "#000000");
$(".btn").hover(function() {
  $(this).stop( true, true ).animate({
  backgroundColor: $primary
  }, 300, "swing");
}, function() {
  $(this).stop( true, true ).animate({
    backgroundColor: "#000000"
  }, 300, "swing");
});

//----------------------------------------------------------------------------------------------------------------------
//background de boutons formulaires
//rouge si formulaire n'est pas complet, primaryColor si le formulaire est complet
$("form button").css("backgroundColor", "#000000");
$("form button").hover(function() {
  if (formiscomplet($(this))) {
    $(this).stop( true, true ).animate({
      backgroundColor: $primary
    }, 300, "swing");
  } else {
    $(this).stop( true, true ).animate({
      backgroundColor: "#ae2727"
    }, 300, "swing");
  }
}, function() {
  $(this).stop( true, true ).animate({
    backgroundColor: "#000000"
  }, 300, "swing");
});

//----------------------------------------------------------------------------------------------------------------------
//AUTRES ANIMATIONS
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//Animation et showing de paragraphe au clic d'un titre (info.html)
$("li.info p:not(.shown)").css("display", "none");
$("li.info h4").click(function() {
  if ($(this).next().css("display") == "none")
  {
    $(this).next().slideDown();
  } else {
    $(this).next().slideUp();
  }
});

//----------------------------------------------------------------------------------------------------------------------
//Animation des titres
$("h1, h2, h3, h4, h5, h6").css("width", "0%")
$("h1, h2, h3, h4, h5, h6").animate({
  width: "100%"
});

//----------------------------------------------------------------------------------------------------------------------
//Animation du menu mobile
function extendsmallnavigation() {
  if($("ul.hidesmall").css("display") == "none") {
    $("ul.hidesmall").slideDown();
  } else {
    $("ul.hidesmall").slideUp();
  }
}

//----------------------------------------------------------------------------------------------------------------------
//FadeIn de la page
$("*:not(.darken)").css("opacity", 0);
$("*:not(.darken)").animate({
  opacity: 1
}, 1500);
