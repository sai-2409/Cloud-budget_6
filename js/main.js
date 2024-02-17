document.querySelector('.burger').addEventListener('click', function(){
   this.classList.toggle('active');
   document.querySelector('.header__content-nav').classList.toggle('open')
})