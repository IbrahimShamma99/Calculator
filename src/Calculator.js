import React from 'react';
import "./App.css"

const calc = (props) =>(

    <div className="container">
    <p>{}</p>
    <div className="row">
    <button onClick={()=>{props.setTemp(1)}} type="button" className="btn btn-outline-danger">1</button>
    <button onClick={()=>{props.setTemp(2)}} type="button" className="btn btn-outline-danger">2</button>
    <button onClick={()=>{props.setTemp(3)}} type="button" className="btn btn-outline-danger">3  </button>
    </div>

    <div className="row">
    <button type="button" onClick={()=>{props.setTemp(4)}} className="btn btn-outline-danger">4</button>
    <button type="button" onClick={()=>{props.setTemp(5)}} className="btn btn-outline-danger">5</button>
    <button type="button" onClick={()=>{props.setTemp(6)}} className="btn btn-outline-danger">6</button>
    </div>

    <div className="row">
    <button type="button" className="btn btn-outline-danger">7</button>
    <button type="button" className="btn btn-outline-danger">8</button>
    <button type="button" className="btn btn-outline-danger">9</button>
    </div>

    <div className="row">
    <button type="button" onClick={()=>props.add(props.temp)} varient="add" className="btn btn-success">+</button>
    <button type="button" onClick={()=>props.remove(props.temp)} className="btn btn-danger">-</button>
    <button type="button" className="btn btn-primary">=</button>
    </div>

    </div>
);

export default calc;