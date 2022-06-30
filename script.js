AOS.init()

const hamburger = document.querySelector('.header__hamburger'),
      menu = document.querySelector('.header__links')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open')
  menu.classList.toggle('open')
  document.body.classList.toggle('disable-scroll')
})