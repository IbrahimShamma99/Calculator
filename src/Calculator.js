import React from 'react';
import "./App.css"

const calc = (props) =>(

    <div className="container">
    <p>{props.display}</p>
    <div className="row">
    <button onClick={(e)=>props.bind("1")} value="1" type="button" className="btn btn-outline-danger">1</button>
    <button onClick={(e)=>{props.bind("2")}} value="2" type="button" className="btn btn-outline-danger">2</button>
    <button onClick={(e)=>{props.bind("3")}} value="3" type="button" className="btn btn-outline-danger">3  </button>
    </div>

    <div className="row">
    <button onClick={(e)=>{props.bind("4")}} type="button" value="4" className="btn btn-outline-danger">4</button>
    <button onClick={(e)=>{props.bind("5")}} type="button" value="5" className="btn btn-outline-danger">5</button>
    <button onClick={(e)=>{props.bind("6")}} type="button" value="6" className="btn btn-outline-danger">6</button>
    </div>

    <div className="row">
    <button onClick={(e)=>{props.bind("7")}} type="button" value="7" className="btn btn-outline-danger">7</button>
    <button onClick={(e)=>{props.bind("8")}} type="button" value="8" className="btn btn-outline-danger">8</button>
    <button onClick={(e)=>{props.bind("9")}} type="button" value="9" className="btn btn-outline-danger">9</button>
    </div>

    <div className="row">
    <button type="button" onClick={(e)=>{props.bind("+")}} value="+" varient="add" className="btn btn-success">+</button>
    <button type="button" onClick={(e)=>{props.bind("-")}} value="-" className="btn btn-danger">-</button>
    <button type="button" onClick={()=>{props.equal()}} className="btn btn-primary">=</button>
    </div>

    </div>
);

export default calc;