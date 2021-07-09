import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // Made this method into a toggle using ! operator
  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    return (
    // you can also bind this by doing below
    // <button onClick={() => this.handleClick()}>
    <button onClick={this.handleClick}>
      { this.state.isClicked ? 'Thanks!' : 'Click Me!'}
    </button>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
