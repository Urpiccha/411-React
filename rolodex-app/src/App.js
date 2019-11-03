import { Component }from 'react';
import React from "react"
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
      this.setState({personInfo: data.results})
    })
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={} className="Thumbnail-Pic" alt="small picture" />
      <button onClick = {this.click}> Click Me Please </button>
      {this.state.personInfo.map(personInfo => {
        return (
          <div key={personInfo.user.results}>
          <p className="description">personInfo.</p>
          </div>
        )
      })}
      </header>
      </div>
    )
  }
}

export default App;
