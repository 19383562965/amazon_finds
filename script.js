document.getElementById('side-menu-button').onclick = function() {
  document.getElementById('side-menu').style = 'transition: 0.5s; right: 0;';
};
document.getElementById('side-menu').onmouseleave = function() {
  document.getElementById('side-menu').style = 'transition: 0.5s; right: -100%;';
};
document.getElementById('cross-side-menu').onclick = function() {
  document.getElementById('side-menu').style = 'transition: 0.25s; right: -100%;';
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
/*search*/
document.getElementById('section-cross').onclick = function() {
  document.getElementById('section-cross').style.display = 'none'
  let search = document.getElementById('search');
  let newproducts = document.getElementById('section-new-div');
  let decorations = document.getElementById('section-decorations-div');
  let furniture = document.getElementById('section-furniture-div');
  let electronics = document.getElementById('section-electronics-div');
  let safety = document.getElementById('section-safety-div');

  let newproducts2 = document.getElementById('section-new');
  let decorations2 = document.getElementById('section-decorations');
  let furniture2 = document.getElementById('section-furniture');
  let electronics2 = document.getElementById('section-electronics');
  let safety2 = document.getElementById('section-safety');
  let notfound2 = document.getElementById('section-not-found');
  let theend2 = document.getElementById('section-the-end');

  newproducts.style.display = 'flex'
    decorations.style.display = 'flex'
    furniture.style.display = 'flex'
    electronics.style.display = 'flex'
    safety.style.display = 'flex'
    newproducts2.style.display = 'inline-block'
    decorations2.style.display = 'inline-block'
    furniture2.style.display = 'inline-block'
    electronics2.style.display = 'inline-block'
    safety2.style.display = 'inline-block'
    notfound2.style.display = 'inline-block'
    theend2.style.display = 'inline-block'
}


document.getElementById('search').onkeydown =
document.getElementById('search').onkeyup =
document.getElementById('button-to-search').onclick = function() {
  let cross = document.getElementById('section-cross');
  let search = document.getElementById('search');
  let newproducts = document.getElementById('section-new-div');
  let decorations = document.getElementById('section-decorations-div');
  let furniture = document.getElementById('section-furniture-div');
  let electronics = document.getElementById('section-electronics-div');
  let safety = document.getElementById('section-safety-div');

  let newproducts2 = document.getElementById('section-new');
  let decorations2 = document.getElementById('section-decorations');
  let furniture2 = document.getElementById('section-furniture');
  let electronics2 = document.getElementById('section-electronics');
  let safety2 = document.getElementById('section-safety');
  let notfound2 = document.getElementById('section-not-found');
  let theend2 = document.getElementById('section-the-end');
  
  if (search.value === '') {
    newproducts.style.display = 'flex'
    decorations.style.display = 'flex'
    furniture.style.display = 'flex'
    electronics.style.display = 'flex'
    safety.style.display = 'flex'
    newproducts2.style.display = 'inline-block'
    decorations2.style.display = 'inline-block'
    furniture2.style.display = 'inline-block'
    electronics2.style.display = 'inline-block'
    safety2.style.display = 'inline-block'
    notfound2.style.display = 'none'
    theend2.style.display = 'none'
    cross.style.display = 'none'
  }
  else if (search.value === 'new') {
    newproducts.style.display = 'flex'
    decorations.style.display = 'none'
    furniture.style.display = 'none'
    electronics.style.display = 'none'
    safety.style.display = 'none'
    newproducts2.style.display = 'inline-block'
    decorations2.style.display = 'none'
    furniture2.style.display = 'none'
    electronics2.style.display = 'none'
    safety2.style.display = 'none'
    notfound2.style.display = 'none'
    theend2.style.display = 'none'
        cross.style.display = 'inline-block'
  }
  else if (search.value === 'decoration') {
    newproducts.style.display = 'none'
    decorations.style.display = 'flex'
    furniture.style.display = 'none'
    electronics.style.display = 'none'
    safety.style.display = 'none'
    newproducts2.style.display = 'none'
    decorations2.style.display = 'inline-block'
    furniture2.style.display = 'none'
    electronics2.style.display = 'none'
    safety2.style.display = 'none'
    notfound2.style.display = 'none'
    theend2.style.display = 'none'
        cross.style.display = 'inline-block'
  }
  else if (search.value === 'furniture') {
    newproducts.style.display = 'none'
    decorations.style.display = 'none'
    furniture.style.display = 'flex'
    electronics.style.display = 'none'
    safety.style.display = 'none'
    newproducts2.style.display = 'none'
    decorations2.style.display = 'none'
    furniture2.style.display = 'inline-block'
    electronics2.style.display = 'none'
    safety2.style.display = 'none'
    notfound2.style.display = 'none'
    theend2.style.display = 'none'
        cross.style.display = 'inline-block'
  }
  else if (search.value === 'electronics') {
    newproducts.style.display = 'none'
    decorations.style.display = 'none'
    furniture.style.display = 'none'
    electronics.style.display = 'flex'
    safety.style.display = 'none'
    newproducts2.style.display = 'none'
    decorations2.style.display = 'none'
    furniture2.style.display = 'none'
    electronics2.style.display = 'inline-block'
    safety2.style.display = 'none'
    notfound2.style.display = 'none'
    theend2.style.display = 'none'
        cross.style.display = 'inline-block'
  }
  else if (search.value === 'safety') {
    newproducts.style.display = 'none'
    decorations.style.display = 'none'
    furniture.style.display = 'none'
    electronics.style.display = 'none'
    safety.style.display = 'flex'
    newproducts2.style.display = 'none'
    decorations2.style.display = 'none'
    furniture2.style.display = 'none'
    electronics2.style.display = 'none'
    safety2.style.display = 'inline-block'
    notfound2.style.display = 'none'
    theend2.style.display = 'none'
        cross.style.display = 'inline-block'
  }
  else {
    newproducts.style.display = 'none'
    decorations.style.display = 'none'
    furniture.style.display = 'none'
    electronics.style.display = 'none'
    safety.style.display = 'none'
    newproducts2.style.display = 'none'
    decorations2.style.display = 'none'
    furniture2.style.display = 'none'
    electronics2.style.display = 'none'
    safety2.style.display = 'none'
    notfound2.style.display = 'none'
    notfound2.style.display = 'inline-block'
    theend2.style.display = 'none'
        cross.style.display = 'inline-block'
  }
};

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
