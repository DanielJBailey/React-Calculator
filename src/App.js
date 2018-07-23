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
      input:  '',
      calc: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  componentWillMount() {
    window.addEventListener("keypress", this.onKeyPress);
   
  }

  handleClick = (buttonName) => {
    this.setState(Calculate(this.state, buttonName));
    console.log(buttonName);
  }

  onKeyPress = (e) => {
    console.log(e.keyCode);
    let buttonName;
    if(e.keyCode === 13) {
      buttonName = "=";
      console.log('equals!');
    } else if(e.keyCode === 8) {
      buttonName = "DEL";
      console.log('delete!');
    } else if (e.keyCode === 55) {
      buttonName = "7";
      console.log('7!');
    } else if (e.keyCode === 56) {
      buttonName = "8";
      console.log('8!');
    } else if (e.keyCode === 57) {
      buttonName = "9";
      console.log('9!');
    } else if (e.keyCode === 52) {
      buttonName = "4";
      console.log('4!');
    } else if (e.keyCode === 53) {
      buttonName = "5";
      console.log('5!');
    } else if (e.keyCode === 54) {
      buttonName = "6";
      console.log('6!');
    } else if (e.keyCode === 49) {
      buttonName = "1";
      console.log('1!');
    } else if (e.keyCode === 50) {
      buttonName = "2";
      console.log('2!');
    } else if (e.keyCode === 51) {
      buttonName = "3";
      console.log('3!');
    } else if (e.keyCode === 48) {
      buttonName = "0";
      console.log('0!');
    } else if (e.keyCode === 46) {
      buttonName = ".";
      console.log('period!');
    } else if (e.keyCode === 43) {
      buttonName = "+";
      console.log('plus!');
    } else if (e.keyCode === 61) {
      buttonName = "=";
      console.log('equals!');
    } else if (e.keyCode === 45) {
      buttonName = "-";
      console.log('minus!');
    } else if (e.keyCode === 42) {
      buttonName = "*";
      console.log('multiply!');
    } else if (e.keyCode === 47) {
      buttonName = "/";
      console.log('divide!');
    } else if (e.keyCode === 37) {
      buttonName = "%";
      console.log('%!');
    }
    this.setState(Calculate(this.state, buttonName));
  }



  render() {
    return (
      <div className="Calculator">
        <Screen input = {this.state.input} result={this.state.result} calc={this.state.calc}/>
        <ButtonContainer clickHandler = {this.handleClick}/>
      </div>
    );
  }
}

export default App;
