function burger() {
  const burgerButton = document.querySelector('.header__burger')
  const headerMenu = document.querySelector('.header__list')

  if (!burgerButton || !headerMenu) return

  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active')
    document.body.classList.toggle('active')
    headerMenu.classList.toggle('active')
  })
}

export default burger
