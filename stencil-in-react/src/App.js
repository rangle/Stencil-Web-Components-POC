import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    isOpen: true
  }

  handleButtonPress = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <br />
        <cl-weather-card
          location="Toronto"
          src="http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0011_light_snow_showers.png"
          temperature="-11°"
          details="Heavy Rain"
        ></cl-weather-card>
        <br />
        <cl-expansion-panel is-open={this.state.isOpen}></cl-expansion-panel>
        <button onClick={this.handleButtonPress}>toggle</button>
      </div>
    );
  }
}

export default App;
