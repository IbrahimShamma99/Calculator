import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Claculator from './Calculator';

class App extends React.Component{
  state={
    display:"0",
    equation:""
  }

  onSumHandler = (value) => {
    this.setState({total:this.state.total+value})
  }

  onRemoveHandler = (value) => {
    this.setState({total:this.state.total-value})
  }

  bindEventhandler = (e) =>{
    this.setState({display:this.state.display + e.target.value})
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Claculator total={this.state.total}
          display={this.state.display}
          equation={this.state.equation}
          bind = {this.bindEventhandler}
          />
        </header>
      </div>
    );
}

}

export default App;
