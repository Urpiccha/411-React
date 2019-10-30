import { Component }from 'react';
import React from "react"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personInfo: []
    };
  }

  click = () => {
    fetch("https://randomuser.me/api?results=25")
    .then(res => res.json())
    .then(data => {
      console.log("*** FETCH DATA ***", data)
      this.setState({personInfo: data})
    })
  }

  render() {
    return ()
  }
}

export default App;
