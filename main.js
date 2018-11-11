// STICKY NAV
document.addEventListener('scroll', function() {
  // amount of px scrolled on Y axis at all times
  let scrollAmount = window.pageYOffset;
  // ternary condition to add remove sticky class
  scrollAmount > 0 ? addStickyNav() : removeStickyNav();
});

const addStickyNav = () => {
  document.querySelector('nav').classList.add('stickynav');
};

const removeStickyNav = () => {
  document.querySelector('nav').classList.remove('stickynav');
};

// SOCIAL SLIDER
const slides = document.getElementsByClassName('slide');
let index = 0;

function goLeft() {
  if (index == 0) index = slides.length - 4;
  else index--;

  slides[0].style.marginLeft = '-' + index * 480 + 'px';
}

function goRight() {
  if (index == slides.length - 4) index = 0;
  else index++;

  slides[0].style.marginLeft = '-' + index * 480 + 'px';
}

// AUTO SCROLL FOR SOCIAL SLIDER
setInterval(goRight, 3000);

// ANIMATE ON SCROLL
///////////////////////////////////////
AOS.init({
  // duration: 1500,
});
