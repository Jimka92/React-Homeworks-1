'use strict';

function FeedbackForm({data, onSubmit}) {
  function onSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    const json = JSON.stringify(object);
    onSubmit(json);
  }

  return (
    <form onSubmit={onSubmitHandler} className="content__form contact-form">
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <div className="contact-form__input-group">
        <input className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation"
               type="radio" value="Мистер" defaultChecked/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
        <input className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation"
               type="radio" value="Мисис" checked={data.salutation === 'Мисис'}/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
        <input className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation"
               type="radio" value="Мис" checked={data.salutation === 'Мис'}/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="name"></label>
        <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text"
               value={data.name}/>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
        <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email"
               value={data.email}/>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
        <select className="contact-form__input contact-form__input--select" id="subject" name="subject"
                value={data.subject}>
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
        <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6"
                  cols="65" value={data.message}></textarea>
      </div>
      <div className="contact-form__input-group">
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks"
               type="checkbox" value="пицца" checked={data.snacks.includes('пицца')}/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks"
               type="checkbox" value="пирог" checked={data.snacks.includes('пирог')}/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
      </div>
      <button className="contact-form__button" type="submit">Отправить сообщение!</button>
      <output id="result"/>
    </form>
  );
}