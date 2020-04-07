import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Claculator from './Calculator';

class App extends React.Component{
  state={
    display:"",
    equation:""
  }

  bindEventhandler = (e) =>{
    this.setState({display:this.state.display + e.target.value})
  }

  onEqualhandler = () => {
    const length = this.state.display.length;
    const display = this.state.display;
    const queue = display.split('+').join(',').split('-').join(",").split(',');
    console.log(queue);

  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Claculator total={this.state.total}
          display={this.state.display}
          equation={this.state.equation}
          bind = {this.bindEventhandler}
          equal = {this.onEqualhandler}
          />
        </header>
      </div>
    );
}

}

export default App;
