import React, { Component } from 'react';
import { Prompt, Redirect } from 'react-router-dom';

class ContactPage extends Component {
  state = {
    text: '',
    redirect: false,
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  handleSubimt = (e) => {
    e.preventDefault();

    if (this.state.text.length > 0) {
      this.setState({
        text: '',
        redirect: true,
      })
    }
  }

  render() {
    return (
      <div className="contact-page">
        <h2
          className="contact-page__header"
        >Contact With Us</h2>

        <form
          onSubmit={this.handleSubimt}
          className="contact-page__form form"
        >

          <textarea
            value={this.state.text}
            onChange={this.handleChange}
            className="form__textarea"
            placeholder="Type something..."
          ></textarea>

          <button
            className="form__button"
            type="submit"
          >Send</button>
        </form>

        <Prompt
          when={this.state.text.length > 0}
          message="Are you sure you want to leave"
        />

        {this.state.redirect && <Redirect exact to='/' />}
      </div>
    );
  }
}

export default ContactPage;