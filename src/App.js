import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Claculator from './Calculator';

class App extends React.Component{
  state={
    value:0
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Claculator/>
        </header>
      </div>
    );
}

}

export default App;
