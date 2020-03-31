import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Claculator from './Calculator';

class App extends React.Component{
  state={
    total:0
  }

  onSumHandler = (value) => {
    this.setState({total:this.state.total+value})
  }

  onRemoveHandler = (value) => {
    this.setState({total:this.state.total-value})
  }


  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Claculator total={this.state.total}
            add={this.onSumHandler}
            remove={this.onRemoveHandler}
          />
        </header>
      </div>
    );
}

}

export default App;
