import React from 'react';
import './App.css';

import { SnakeGame } from './SnakeGame';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.el = null;
  }

  componentDidMount() {
    this.el.focus();
  }
  setTextInput = el => (this.el = el);

  render() {
    return (
      <div className="App">
        <h1>FORM</h1>
        <form>
          <div className="lastNameInfos">
            <label for="lastName">Enter your last name : </label>
            <input type="text" name="lastName" id="lastName" />
          </div>
          <br />
          <div className="firstNameInfos">
            <label for="firstName">Enter your first name : </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              ref={this.setTextInput}
            />
          </div>
          <br />
          <div className="genderInfos">
            <label for="gender" name="gender" id="gender">
              Choose your gender :
            </label>
            <br />
            <input id="maleGender" type="checkbox" />
            Male
            <br />
            <input id="femaleGender" type="checkbox" />
            Female
            <br />
            <input id="unspecifiedGender" type="checkbox" />
            Unspecified
            <br />
          </div>
          <br />
          <div className="ageInfos">
            <label for="age">Enter your age : </label>
            <input type="text" name="age" id="age" />
          </div>
        </form>
        <h1>SNAKE GAME</h1>
        <SnakeGame />
      </div>
    );
  }
}

export default App;
