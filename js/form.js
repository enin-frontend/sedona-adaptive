let form = document.querySelector('form'),
    firstName = document.getElementById('input-first-name'),
    lastName = document.getElementById('input-last-name'),
    userNumber = document.querySelector('.form-input-text__number'),
    userMail = document.querySelector('.form-input-text__mail'),
    popup = [firstName,lastName,userNumber,userMail],
    btnModal = document.querySelector('.form__button'),
    errorBlock = document.querySelector('.modal-error'),
    succesBlock = document.querySelector('.modal-succes');

    btnModal.addEventListener('click', function(event){
      for(let i = 0; i < popup.length; i++){
        popup[i].classList.remove('form__error');
        if(!popup[i].value){
          event.preventDefault();
          errorBlock.style.display = 'block';
          popup[i].classList.add('form__error');
        }
        else if(firstName.value && lastName.value && userMail.value && userNumber.value){
          event.preventDefault();
          succesBlock.style.display = 'block';
        }
      }
    });

errorBlock.addEventListener('click',function(event){
  if(event.target && event.target.classList.contains('modal__button')){
    errorBlock.style.display = 'none';
  }
});

succesBlock.addEventListener('click',function(event){
  if(event.target && event.target.classList.contains('modal__button')){
    succesBlock.style.display = 'none';
    form.submit();
  }
});