import React, { Component } from 'react';
import './App.css';
import './UserOutput/UserOutput.css'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
class App extends Component {

  state={
    userName: "The instructions are: \r\n    Create TWO new components: UserInput and UserOutput\r\n    UserInput should hold an input element, UserOutput two paragraphs\r\n    Output multiple UserOutput components in the App component (any paragraph texts of your choice)\r\n    Pass a username (of your choice) to UserOutput via props and display it there\r\n    Add state to the App component (=> the username) and pass the username to the UserOutput component\r\n    Add a method to manipulate the state (=> an event-handler method)\r\n    Pass the event-handler method reference to the UserInput component and bind it to the input-change event\r\n    Ensure that the new input entered by the user overwrites the old username passed to UserOutput\r\n    Add two-way-binding to your input (in UserInput) to also display the starting username\r\n    Add styling of your choice to your components\/ elements in the components - both with inline styles and stylesheets"
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
