'use strict';

function AuthForm(props) {
  let form;
  return (
    <form
      onSubmit={formSubmit}
      className="ModalForm"
      action="/404/auth/"
      method="POST"
      ref={element => form = element} >
      <div className="Input">
        <input required
               onChange={inputValidate}
               type="text"
               placeholder="Имя" />
        <label></label>
      </div>
      <div className="Input">
        <input
          type="email"
          onChange={inputValidate}
          placeholder="Электронная почта" />
        <label></label>
      </div>
      <div className="Input">
        <input
          required
          onChange={inputValidate}
          type="password"
          placeholder="Пароль" />
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  );

  function formSubmit(e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;

    if (!name || !email || !password)
      return null;

    props.onAuth({
      name: name,
      email: email,
      password: password
    });
  }

  function inputValidate(e) {
    const input = e.nativeEvent.target;
    if (input.getAttribute('type') === 'email') {
      input.value = input.value.replace(/[^a-zA-Z0-9@.\-_]/, '');
    } else if (input.getAttribute('type') === 'password') {
      input.value = input.value.replace(/[^a-zA-Z0-9_]/, '');
    }
  }
}

