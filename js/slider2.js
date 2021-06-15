var swiper = new Swiper('.tercero', {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.t3pag'
    },
    mousewheel: true,
    keyboard: true,
  });

  var swiper = new Swiper('.cuarto', {
    pagination: {
      el: '.pag4',
    },
  });

  var swiper = new Swiper('.quinto', {
    cssMode: true,
    navigation: {
      nextEl: '.quinto_next',
      prevEl: '.quinto_prev',
    },
    pagination: {
      el: '.t5pag'
    },
    mousewheel: true,
    keyboard: true,
  });

  var swiper = new Swiper('.quinto_mobile', {
    cssMode: true,
    navigation: {
      nextEl: '.quinto_mobile_next',
      prevEl: '.quinto_mobile_prev',
    },
    pagination: {
      el: '.t5pag_mobile'
    },
    mousewheel: true,
    keyboard: true,
  });

  var swiper = new Swiper('.bienvenido-swiper', {
    cssMode: true,
    navigation: {
      nextEl: '.bienvenido-button-next',
      prevEl: '.bienvenido-button-prev',
    },
    pagination: {
      el: '.bienvenido-pag'
    },
    mousewheel: true,
    keyboard: true,
  });

function currentDiv(n) {
  showDivs(slideIndex = n);
  }

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " w3-opacity-off";
}

function currentBlock(n) {
  showText(slideIndex = n);
  }

  
  function showText(n) {
    var i;
    var x = document.getElementsByClassName("changeText");
    var dots = document.getElementsByClassName("btn-toActive");
    var imagenes = document.getElementsByClassName("changeImage");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      imagenes[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    imagenes[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
  }