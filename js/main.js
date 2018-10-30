// to open drawer when navicon clicked (navicon only appears in NARROW screen)

var menu = document.querySelector('#menu');
var main = document.querySelector('main');  //  {what is "main" (not a class or id)?}
var drawer = document.querySelector('#drawer');

menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');  // 'classList' returns element class name(s)
  e.stopPropagation();
});
main.addEventListener('click', function() {
  drawer.classList.remove('open');
});
