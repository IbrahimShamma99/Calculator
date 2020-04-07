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
    var queue = '';
    var total = 0;
    for (var i =0;i<length;i++)
    { 
      if (i===0)
      {
        queue = display[0];
        continue;
      }
      if (Number.isInteger(parseInt(display[i])))
      {
        queue = queue + display[i];
      }
      if (display[i] === '+')
      {
        total = total + parseInt(queue);
        queue=""
        continue;
      }
      if(display[i] === '-')
      {
        total = total - parseInt(queue);
        queue=""
        continue;
      }
      if (i === (length-1))
      {
        total = total + parseInt(queue);
      }
    };
    this.setState({display:total});
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
