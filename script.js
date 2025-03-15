document.getElementById('side-menu-button').onclick = function() {
  document.getElementById('side-menu').style = 'transition: 0.5s; right: 0;';
};
document.getElementById('side-menu').onmouseleave = function() {
  document.getElementById('side-menu').style = 'transition: 0.5s; right: -20%;';
};
document.getElementById('cross-side-menu').onclick = function() {
  document.getElementById('side-menu').style = 'transition: 0.25s; right: -20%;';
}
document.getElementById('cart-button').onclick = function() {
  document.getElementById('cart-menu').style = 'transition: 0.5s; right: 0;';
};
document.getElementById('cart-menu').onmouseleave = function() {
  document.getElementById('cart-menu').style = 'transition: 0.5s; right: -100%;';
};
document.getElementById('cross-cart-menu').onclick = function() {
  document.getElementById('cart-menu').style = 'transition: 0.25s; right: -100%;';
};