import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2
        className="contact-page__header"
      >Contact With Us</h2>

      <form className="contact-page__form form">

        <textarea
          className="form__textarea"
          placeholder="Type something..."
        ></textarea>

        <button
          className="form__button"
          type="submit"
        >Send</button>
      </form>
    </div>
  );
}

export default ContactPage;