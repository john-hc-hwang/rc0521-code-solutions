import React from 'react';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.getStatus = this.getStatus.bind(this);
    this.changePos = this.changePos.bind(this);
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  getStatus() {
    if (this.state.isOn) {
      return 'switch on';
    } else {
      return 'switch off';
    }
  }

  changePos() {
    if (this.state.isOn) {
      return 'circle right';
    } else {
      return 'circle left';
    }
  }

  render() {
    return (
      <div className={ this.getStatus() } onClick={ this.handleClick }>
        <div className={ this.changePos() }></div>
        <p>{ this.state.isOn ? 'ON' : 'OFF' }</p>
      </div>
    );
  }
}

export default ToggleButton;
