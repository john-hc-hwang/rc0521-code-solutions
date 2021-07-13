import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabActive: false };

    this.toggleTab = this.toggleTab.bind(this);
    this.toggleTabBackground = this.toggleTabBackground.bind(this);
  }

  toggleTab() {
    this.setState({ tabActive: !this.state.tabActive });
  }

  toggleTabBackground() {
    if (this.state.tabActive) {
      this.setState({ tabActive: !this.state.tabActive });
    }
  }

  render() {
    return (
    <div onClick={ this.toggleTabBackground } className={ this.state.tabActive ? 'container gray' : 'container' }>
      <div className={ this.state.tabActive ? 'tab' : 'tab hidden' }>
        <h1>Menu</h1>
        <p onClick={ this.toggleTab }>About</p>
        <p onClick={ this.toggleTab }>Get Started</p>
        <p onClick={ this.toggleTab }>Sign in</p>
      </div>
      <i onClick={ this.toggleTab } className={ this.state.tabActive ? 'hidden' : 'fas fa-align-justify' }></i>
    </div>
    );
  }
}

export default AppDrawer;
