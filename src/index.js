// import React from 'react';
import * as React from "react"
// import ReactDOM from 'react-dom/client';
import * as ReactDOM from "react-dom"
import './index.css';
// import App from './App';
import App from './NewApp'

// ReactDOM.render(<div>hello</div>, document.getElementById('root'), function(){
//   console.log('this', this)
// });

ReactDOM.render(<App rootProps={{rp1: 'rp1', rp2: 2}} />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
