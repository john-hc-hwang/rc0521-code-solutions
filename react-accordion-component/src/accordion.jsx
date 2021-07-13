import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { TabIndex: null };

    // bind methods here
    this.mapJsx = this.mapJsx.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // classNames are tab1, tab2, tab3 hence event.target.className[3]
    if (this.state.TabIndex !== event.target.className[3]) {
      this.setState({ TabIndex: event.target.className[3] });
    } else {
      this.setState({ TabIndex: null });
    }
  }

  mapJsx() {
    const contents = this.props.contents;
    const contentItems = contents.map(content =>
      <div key={ content.number }>
        <h1 className={ 'tab' + content.number } onClick={ this.handleClick }>
          { content.name }
        </h1>
        <p className={ this.state.TabIndex === content.number ? '' : 'hidden'}>
          { content.description }
        </p>
      </div>
    );

    return contentItems;
  }

  render() {
    return (
    <div>
      { this.mapJsx() }
    </div>
    );
  }
}

export default Accordion;
