import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      elapsedTime: 0
    };

    // This binding is necessary to make `this` work in the callback
    this.tick = this.tick.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.getStatus = this.getStatus.bind(this);
    this.resetWatch = this.resetWatch.bind(this);
  }

  tick() {
    this.setState({ elapsedTime: this.state.elapsedTime + 1 });
  }

  play() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  pause() {
    clearInterval(this.timerId);
  }

  changeStatus(event) {
    if (this.state.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
    this.setState({ isPlaying: !this.state.isPlaying });
    event.stopPropagation();
  }

  getStatus() {
    if (this.state.isPlaying) {
      return 'fas fa-pause-circle';
    } else {
      return 'fas fa-play-circle';
    }
  }

  resetWatch() {
    if (!this.state.isPlaying) {
      this.setState({ elapsedTime: 0 });
    }
  }

  render() {
    return (
      <div className="watchFace" onClick={ this.resetWatch }>
        <p>{ this.state.elapsedTime }</p>
        <i className={ this.getStatus() } onClick={ this.changeStatus } ></i>
      </div>
    );
  }
}

export default Stopwatch;
