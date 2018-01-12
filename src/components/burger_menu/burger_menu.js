class Burger {
  init() {
    const burgers = document.querySelectorAll('.burger');
    const burgerHeader = document.querySelector('.burger_header');
    const modal = document.getElementById('modal');
    const leftPart = modal.querySelector('.modal__left');
    const rightPart = modal.querySelector('.modal__right');

    if (burgers && burgerHeader && modal && leftPart && rightPart) {
      [].forEach.call(burgers, (elem) => {
        elem.addEventListener('click', () => {
          modal.classList.toggle('modal_active');
          burgerHeader.classList.toggle('burger_cross');
          document.body.classList.toggle('prevent-scroll');

          setTimeout(() => {
            leftPart.classList.toggle('modal__left_active');
            rightPart.classList.toggle('modal__right_active');
          }, 0)

        })
      })
    }
  }
}

export default Burger;