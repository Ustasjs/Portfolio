class Burger {
  init() {
    let burgers = document.querySelectorAll('.burger');
    let burgerHeader = document.querySelector('.burger_header');
    let modal = document.getElementById('modal');
    let leftPart = modal.querySelector('.modal__left');
    let rightPart = modal.querySelector('.modal__right');

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

export default new Burger();