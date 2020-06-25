import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      MobileMenuClicked: false
    }
  }

  toggleMobileMenu = () => {
    this.setState({
      MobileMenuClicked: !this.state.MobileMenuClicked
    })
  }

  render() {
    return (
      <div className="background-image">
        <body>
          <header className="App-header">
            <h3 className="bootstrap-logo"> Start Bootstrap </h3>
            <nav className="nav-tabs">
              <span> SERVICES </span>
              <span> PORTFOLIO </span>
              <span> ABOUT </span>
              <span> TEAM </span>
              <span> CONTACT </span>
            </nav>
            <button className="mobile-button" onClick={this.toggleMobileMenu}> MENU ☰ </button>
            <nav className={`mobile-nav-list ${this.state.MobileMenuClicked ?
              "mobile-nav-list-open" : null}`}>
              <span className="mobile-nav-list-item"> PORTFOLIO </span>
              <span className="mobile-nav-list-item"> SERVICES </span>
              <span className="mobile-nav-list-item"> ABOUT </span>
              <span className="mobile-nav-list-item"> TEAM </span>
              <span className="mobile-nav-list-item"> CONTACT </span>
            </nav>
          </header>
          <div className="main-section">
            <section className="middle-section">
              <p className="greeting"> Welcome To Our Studio! </p>
              <h1 className="main-greeting"> IT'S NICE TO MEET YOU </h1>
              <button className="main-button"> TELL ME MORE </button>
            </section>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
