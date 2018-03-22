'use strict';

function AuthForm({onAuth}) {
  let form;

  function formSubmit(e) {
    e.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!name || !email || !password)
      return null;

    if (Object.prototype.toString.call(onAuth) === '[object Function]') {
      onAuth({
        name: name,
        email: email,
        password: password
      })
    }
  }

  function inputValidate(e) {
    const input = e.currentTarget;
    if (input.getAttribute('type') === 'email') {
      input.value = input.value.replace(/[^\D\d@.\-_]/, '');
    } else if (input.getAttribute('type') === 'password') {
      input.value = input.value.replace(/[^\D\d_]/, '');
    }
  }

  return (
    <form
      onSubmit={formSubmit}
      className="ModalForm"
      action="/404/auth/"
      method="POST"
      ref={element => form = element}>
      <div className="Input">
        <input required
               name="name"
               onChange={inputValidate}
               type="text"
               placeholder="Имя"
               maxLength={80}
        />
        <label></label>
      </div>
      <div className="Input">
        <input
          type="email"
          name="email"
          onChange={inputValidate}
          placeholder="Электронная почта"
          maxLength={80}
        />
        <label></label>
      </div>
      <div className="Input">
        <input
          type="password"
          name="password"
          required
          onChange={inputValidate}
          placeholder="Пароль"
          maxLength={80}
        />
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  );
}

