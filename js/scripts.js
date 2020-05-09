(() => {
  const mainHeader = document.querySelector('.main-header');
 const introForm = document.forms['intro-form'];
 const infoForm = document.forms['info-form'];

  const showError = (input, message) => {
    const formControl = input.parentElement;
    const formMessage = formControl.querySelector('.form-message')

    formMessage.classList.add('show')
    formMessage.innerText = message

    setTimeout(() => {
      const formControl = input.parentElement;
      const formMessage = formControl.querySelector('.form-message')
      formMessage.innerText = '';
      formMessage.classList.remove('show');
    }, 4000)
  }

  const hideError = (input) => {
    const formControl = input.parentElement;
    const formMessage = formControl.querySelector('.form-message')
    formMessage.innerText = '';
    formMessage.classList.remove('show');
  }

  const checkEmail = (input) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value.trim())) {
      hideError(input);
      window.location.href = '/'
    } else {
      showError(input, 'Email is not valid');
    }
  }

  const getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

  const checkRequired = (inputs) => {
    inputs.forEach((input) => {
      if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
      } else {
        showError(input);
      }
    });
  }

 introForm.addEventListener('submit', (e) => {
   e.preventDefault();

   checkRequired([introForm.email])

   if (introForm.email.value) {
     checkEmail(introForm.email);
   }
 });

  infoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([infoForm.email])

    if (infoForm.email.value) {
      checkEmail(infoForm.email);
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
       mainHeader.classList.add('sticky');
    } else {
      mainHeader.classList.remove('sticky');
    }
  })
})();