import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };

    // This binding is necessary to make `this` work in the callback
    this.countClick = this.countClick.bind(this);
    this.getColorClass = this.getColorClass.bind(this);
  }

  countClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  getColorClass() {
    let className = 'white';
    const state = this.state.clickCount;

    if (state >= 3 && state < 6) {
      className = 'purple';
    } else if (state >= 6 && state < 9) {
      className = 'lightPurple';
    } else if (state >= 9 && state < 12) {
      className = 'pink';
    } else if (state >= 12 && state < 15) {
      className = 'lightOrange';
    } else if (state >= 15 && state < 18) {
      className = 'yellow';
    } else {
      className = 'white';
    }

    return className;
  }

  render() {
    return <button className={this.getColorClass()} onClick={this.countClick}>Hot Button</button>;
  }
}

ReactDOM.render(
  <HotButton />,
  document.querySelector('#root')
);
