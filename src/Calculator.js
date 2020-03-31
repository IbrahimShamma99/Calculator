import React from 'react';
import "./App.css"

const calc = (props) =>(

    <div className="container">

    <div className="row">
    <button onClick={()=>props.add(1)} type="button" className="btn btn-outline-danger">1</button>
    <button onClick={()=>props.add(1)} type="button" className="btn btn-outline-danger">2</button>
    <button onClick={()=>props.add(1)} type="button" className="btn btn-outline-danger">3  </button>
    </div>

    <div className="row">
    <button type="button" className="btn btn-outline-danger">4</button>
    <button type="button" className="btn btn-outline-danger">5</button>
    <button type="button" className="btn btn-outline-danger">6</button>
    </div>

    <div className="row">
    <button type="button" className="btn btn-outline-danger">7</button>
    <button type="button" className="btn btn-outline-danger">8</button>
    <button type="button" className="btn btn-outline-danger">9</button>
    </div>

    <div className="row">
    <button type="button" className="btn btn-success">Plus</button>
    <button type="button" className="btn btn-danger">Minus</button>
    </div>

    </div>
);

export default calc;