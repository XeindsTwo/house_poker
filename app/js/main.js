const html = document.documentElement;
const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.header__mobile');
const anchorsDesktop = document.querySelectorAll('a.desktop');
const anchors = document.querySelectorAll('a.mobile');

menuBtn.addEventListener('click', (event) => {
  event.preventDefault();
  html.classList.toggle('active');
  header.classList.toggle('active');
  menuBtn.classList.toggle('active');
  menuBtn.blur();
});

function scrollToTargetDesktop(targetId) {
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    const targetOffset = targetSection.offsetTop - 25;
    window.scrollTo({top: targetOffset, behavior: 'smooth'});
  }
}

function scrollToTarget(targetId) {
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    html.classList.remove('active');
    header.classList.remove('active');
    menuBtn.classList.remove('active');
    setTimeout(() => {
      const targetOffset = targetSection.offsetTop - 25;
      window.scrollTo({top: targetOffset, behavior: 'smooth'});
    }, 400);
  }
}

function handleAnchorClick(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href');
  scrollToTarget(targetId);
}

function handleAnchorClickDesktop(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href');
  scrollToTargetDesktop(targetId);
}

for (const anchor of anchorsDesktop) {
  anchor.addEventListener('click', handleAnchorClickDesktop);
  anchor.addEventListener('touchstart', handleAnchorClickDesktop, {passive: true});
}

for (const anchor of anchors) {
  anchor.addEventListener('click', handleAnchorClick);
  anchor.addEventListener('touchstart', handleAnchorClick, {passive: true});
}