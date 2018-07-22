import React, { Component } from 'react';
import Screen from './components/Screen';
import ButtonContainer from './components/ButtonContainer';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result:  90,
      input:  7,
      calc: null,
      operator: null
    }
  }
  render() {
    return (
      <div className="Calculator">
        <Screen input = {this.state.input} result={this.state.result}/>
        <ButtonContainer />
      </div>
    );
  }
}

export default App;
