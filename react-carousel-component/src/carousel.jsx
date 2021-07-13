import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 1 };

    // bind here
    this.returnImage = this.returnImage.bind(this);
  }

  returnImage() {
    const images = this.props.images;
    const imageContents = images.map(image =>
      <img key={ image.number.toString() } className={ this.state.index === image.number ? '' : 'hidden' }
      src={ image.imageUrl } alt={ image.description }></img>
    );

    return imageContents;
  }

  render() {
    return (
    <div className="container">
      <div className="carousel">
        <i className="fas fa-chevron-circle-left arrow"></i>
        { this.returnImage() }
        <i className="fas fa-chevron-circle-right arrow"></i>
      </div>
      <div className="circles">
        <i className="fas fa-circle circle"></i>
        <i className="far fa-circle circle"></i>
        <i className="far fa-circle circle"></i>
        <i className="far fa-circle circle"></i>
        <i className="far fa-circle circle"></i>
      </div>
    </div>
    );
  }
}

export default Carousel;
