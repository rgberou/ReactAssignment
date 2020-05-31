import React, { Component } from 'react';
import './App.css';
import './UserOutput/UserOutput.css'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
class App extends Component {

  state={
    userName: "Argie"
  }

  userNameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  }

  render () {

    const style={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App" style={style} >
        
        <UserInput
          
          userName={this.state.userName} changed={this.userNameChangedHandler}></UserInput>
        <UserOutput  userName={this.state.userName} ></UserOutput>
      </div>
    ) ; 

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  };
};

export default App;
