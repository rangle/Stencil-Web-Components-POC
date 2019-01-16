import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    isOpen: true
  }

  textBox: any;

  handleButtonPress = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  componentDidMount() {
    this.textBox.addEventListener('go', this.handleSubmit);
  }

  componentWillUnmount() {
    this.textBox.removeEventListener('go', this.handleSubmit);
  }

  handleSubmit = ({detail}: any) => {
    console.log(`React found ${detail}!!!`)
  }

  handleRef = (component: any) => {
    this.textBox = component;
  };

  render() {
    return (
      <div className="phone">

        <div className="content">
          <cl-text-box></cl-text-box>
          <br />
          <cl-weather-card
            location="Toronto"
            src="https://cdn3.iconfinder.com/data/icons/weather-and-forecast/51/Weather_icons_grey-03-512.png"
            temperature="4°"
            details="Rain and Sun"
          ></cl-weather-card>
          <br />
          <cl-weather-card
            location="Dallas"
            src="https://cdn3.iconfinder.com/data/icons/weather-and-forecast/39/Weather_icons_grey-07-512.png"
            temperature="16°"
            details="Heavy Rain"
          ></cl-weather-card>
          <br />
          <cl-expansion-panel>
            <cl-text slot="description" color="secondary">At 3:23pm it’s 12°</cl-text>
            <cl-text slot="details" weight="light">Overcast</cl-text>
          </cl-expansion-panel>
          <br />
          <cl-expansion-panel>
            <cl-text slot="description" color="secondary">At 4:23pm it’s 12°</cl-text>
            <cl-text slot="details" weight="light">Overcast</cl-text>
          </cl-expansion-panel>
          <br />
          <cl-expansion-panel>
            <cl-text slot="description" color="secondary">At 5:23pm it’s 13°</cl-text>
            <cl-text slot="details" weight="light">Overcast</cl-text>
          </cl-expansion-panel>
          <br />
          <cl-expansion-panel>
            <cl-text slot="description" color="secondary">At 6:23pm it’s 15°</cl-text>
            <cl-text slot="details" weight="light">Overcast</cl-text>
          </cl-expansion-panel>
          <br />
          <cl-expansion-panel is-open={this.state.isOpen}>
            <cl-text slot="description" color="secondary">At 7:23pm it’s 13°</cl-text>
            <cl-text slot="details" weight="light">Overcast</cl-text>
          </cl-expansion-panel>
          <br />
          <button onClick={this.handleButtonPress}>toggle</button>
        </div>
      </div>
    );
  }
}

export default App;
