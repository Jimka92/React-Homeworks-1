class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      className: 'is-error'
    };

    this.formValidation = this.formValidation.bind(this);
  }

  formValidation(e) {
    this.setState({
      className: e.currentTarget.validity.valid ? 'is-valid' : 'is-error'
    });
  }

  render() {
    const {className} = this.state;
    return (
      <div className="subscribe__form">
        <form
          className={`form form--subscribe ${className}`}
        >
          <h4 className="form-title">Подписаться:</h4>
          <div className="form-group">
            <label htmlFor="input-email" className="sr-only">Email</label>
            <input
              type="email"
              id="input-email"
              placeholder="Email"
              className="form-control"
              onChange={this.formValidation}
            />
            <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
            <button type="submit" className="form-next">
              <i className="material-icons">keyboard_arrow_right</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}