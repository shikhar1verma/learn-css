var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var closeButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// backdrop.style.display = 'block';

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function() {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

if (closeButton) {
  closeButton.addEventListener('click', function() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if(modal) modal.classList.remove('open');
    backdrop.classList.remove('open');
  });
}


backdrop.addEventListener('click', function() {
  // mobileNav.style.display = 'none';
  // modal.style.display = 'none';
  // backdrop.style.display = 'none'
  mobileNav.classList.remove('open');
  if (modal) modal.classList.remove('open');
  backdrop.classList.remove('open');
});

toggleButton.addEventListener('click', function() {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});