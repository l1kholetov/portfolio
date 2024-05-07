var selector = document.querySelector('.section-contact__tel');

var im = new Inputmask("+7 (999) 999-99-99",{
  showMaskOnHover: false
});
im.mask(selector);

const validate = new window.JustValidate(document.querySelector('.section-contact__form'), {
  errorLabelStyle: {
    color: '#E62872'
  },
  errorFieldStyle: {
    outline: '1px solid #E62872'
  }
});

validate
  .addField(document.querySelector('.section-contact__name'), [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимальная длина 2 символа',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Максимальная длина 15 символов',
    },
  ])

  .addField(document.querySelector('.section-contact__surname'), [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели фамилию',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимальная длина 2 символа',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Максимальная длина 20 символов',
    },
  ])

  .addField(document.querySelector('.section-contact__textarea'), [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели сообщение',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Минимальная длина сообщения 10 символа',
    },
  ])

  .addField(document.querySelector('.section-contact__email'), [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Вы ввели неверный e-mail',
    },
  ])

  .addField(document.querySelector('.section-contact__tel'), [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()

        return phone.length === 10
      },
      errorMessage: 'Введите телефон полностью',
    },
  ]);
