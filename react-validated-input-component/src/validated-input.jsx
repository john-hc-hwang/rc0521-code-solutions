import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '', submitStatus: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showIcon = this.showIcon.bind(this);
    this.showMessage = this.showMessage.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitStatus: true });
  }

  showIcon() {
    if (this.state.password.length < 8) {
      return 'far fa-times-circle';
    } else {
      return 'far fa-check-circle';
    }
  }

  showMessage() {
    if (this.state.password.length === 0) {
      return 'A password is required.';
    } else if (this.state.password.length < 8) {
      return 'Your password is too short.';
    } else {
      return '';
    }
  }

  render() {
    return (
    <form onSubmit={ this.handleSubmit } className="password-input">
      <label htmlFor="password">Password:</label>
      <input id ="password" type="password" value={ this.state.password } onChange={ this.handleChange }/>
      <i className={ this.state.submitStatus ? this.showIcon() : 'hidden' }></i>
      <p>{ this.state.submitStatus ? this.showMessage() : '' }</p>
    </form>
    );
  }
}

export default ValidatedInput;
