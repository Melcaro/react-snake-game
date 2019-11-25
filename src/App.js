import React from 'react';
import './App.css';

import { SnakeGame } from './SnakeGame';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.el = null;
    this.elAge = null;
  }

  componentDidMount() {
    //this.el.focus();
    // }
    // setTextInput = el => (this.el = el);
    // setAgeInput = el => (this.elAge = el);
    // changeFocusWhenGenderIsChoose = () => {
    //   this.elAge.focus();
  }

  render() {
    return (
      <div className="App">
        <div>
          <SnakeGame />
        </div>
      </div>
    );
  }
}

export default App;
