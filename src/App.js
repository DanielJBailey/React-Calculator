import React, { Component } from 'react';
import Screen from './components/Screen';
import ButtonContainer from './components/ButtonContainer';
import Calculate from './logic/Calculate';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      input:  [],
      calc: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleClick = (buttonName) => {
    this.setState(Calculate(this.state, buttonName));
    console.log(buttonName);
  }


  render() {
    return (
      <div className="Calculator">
        <Screen input = {this.state.input} result={this.state.result} calc={this.state.calc} done={this.state.done}/>
        <ButtonContainer clickHandler = {this.handleClick}/>
      </div>
    );
  }
}

export default App;
