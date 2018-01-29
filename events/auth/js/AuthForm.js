'use strict';

function AuthForm(props) {
    let name, email, password;
    return(
        <form onSubmit={formSubmit} className="ModalForm" action="/404/auth/" method="POST">
            <div className="Input">
                <input required
                       onChange={inputValidate}
                       type="text"
                       placeholder="Имя"
                       ref={element => name = element}
                />
                    <label></label>
            </div>
            <div className="Input">
                <input
                    type="email"
                    onChange={inputValidate}
                    placeholder="Электронная почта"
                    ref={element => email = element}
                />
                    <label></label>
            </div>
            <div className="Input">
                <input
                    required
                    onChange={inputValidate}
                    type="password"
                    placeholder="Пароль"
                    ref={element => password = element}
                />
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
        props.onAuth({
            name: name.value,
            email: email.value,
            password: password.value,
        });
    }

    function inputValidate(e) {
        const input = e.nativeEvent.target;
        if (input.getAttribute('type') === 'email'){
            input.value = input.value.replace(/[^a-zA-Z0-9@.\-_]/, '');
        } else if (input.getAttribute('type') === 'password'){
            input.value = input.value.replace(/[^a-zA-Z0-9_]/, '');
        }
    }
}

