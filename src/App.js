import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Claculator from './Calculator';
import {connect} from 'react-redux';
import * as actionTypes from './reducer/actions';

class App extends React.Component{
  state={
    display:""
  }

  bindEventhandler = (e) =>{
    this.setState({display:this.state.display + e.target.value})
  }

  onEqualhandler = () => {
    const display = this.state.display;
    var total = 0;
    const values = display.split('+').join(',').split('-').join(",").split(',');
    const signs = display.split('1')
          .join(',').split('2')
          .join(',').split('3')
          .join(',').split('4')
          .join(',').split('5')
          .join(',').split('6')
          .join(',').split('7')
          .join(',').split('8')
          .join(',').split('9')
          .join(",").split(',')
          .join("").split("");
    let ops = signs.length; 
    for (var i = 0;i<ops;i++)
    { var op = signs[i];
      if  (i===0)
      {  
        if (op === "+"){total = parseInt(values[0])+parseInt(values[1])};
        if (op === "-"){total = values[0]-values[1]};
        continue;
      };
      if (op === "+"){total = parseInt(total)+parseInt(values[i+1])};
      if (op === "-"){total = total-values[i+1]};
    }
    this.setState({display:total})
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Claculator total={this.state.total}
          display={this.state.display}
          bind = {this.bindEventhandler}
          equal = {this.onEqualhandler}
          />
        </header>
      </div>
    );
}
}

const mapStateToProps = state => {
  return {
    dis:state.display
  }
} 

const mapDispatchToProps = dispatch =>{
  return {
    binding:(Value)=>dispatch({type:actionTypes.BIND_VALUE}),
    equalize:(Value)=>dispatch({type:actionTypes.EQUAL_VALUE})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
