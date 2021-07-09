import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    return (
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
