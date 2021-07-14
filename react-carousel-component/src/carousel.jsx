import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 1 };

    // bind here
    this.changeIndex = this.changeIndex.bind(this);
    this.changeIndexArrow = this.changeIndexArrow.bind(this);
    this.changeIndexCircle = this.changeIndexCircle.bind(this);
    this.returnImage = this.returnImage.bind(this);
    this.returnCirclePos = this.returnCirclePos.bind(this);
  }

  // do not need to bind lifecyle methods
  componentDidMount() {
    this.timerId = setInterval(
      () => this.changeIndex(),
      1000
    );
  }

  // do not need to bind lifecyle methods
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  changeIndex() {
    if (this.state.index === 5) {
      this.setState({ index: 1 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  }

  changeIndexArrow(event) {
    if (event.target.className === 'fas fa-chevron-circle-left arrow') {
      if (this.state.index === 1) {
        this.setState({ index: 5 });
      } else {
        this.setState({ index: this.state.index - 1 });
      }
    } else {
      if (this.state.index === 5) {
        this.setState({ index: 1 });
      } else {
        this.setState({ index: this.state.index + 1 });
      }
    }

    // for smooth transition when carousel is manually changed by user
    clearInterval(this.timerId);
    this.timerId = setInterval(
      () => this.changeIndex(),
      1000
    );
  }

  changeIndexCircle(event) {
    // data-id attribute is cirlce1, circle2, ... hence at index 6
    const circleIndex = Number(event.target.dataset.id[6]);
    this.setState({ index: circleIndex });

    // for smooth transition when carousel is manually changed by user
    clearInterval(this.timerId);
    this.timerId = setInterval(
      () => this.changeIndex(),
      1000
    );
  }

  returnImage() {
    const images = this.props.images;
    const imageContents = images.map(image =>
      <img key={ image.number.toString() } className={ this.state.index === image.number ? '' : 'hidden' }
      src={ image.imageUrl } alt={ image.description }></img>
    );

    return imageContents;
  }

  returnCirclePos() {
    const images = this.props.images;
    const imageContents = images.map(image =>
      <i key={ image.number.toString() } className={ this.state.index === image.number
        ? 'fas fa-circle circle'
        : 'far fa-circle circle' } data-id={'circle' + image.number }
        onClick={ this.changeIndexCircle }></i>
    );

    return imageContents;
  }

  render() {
    return (
    <div className="container">
      <div className="carousel">
        <i onClick={ this.changeIndexArrow } className="fas fa-chevron-circle-left arrow"></i>
        { this.returnImage() }
        <i onClick={ this.changeIndexArrow } className="fas fa-chevron-circle-right arrow"></i>
      </div>
      <div className="circles">
        { this.returnCirclePos() }
      </div>
    </div>
    );
  }
}

export default Carousel;
