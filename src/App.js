import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: null
    }
    setInterval(() => this.changeTime(), 1000)
  }

  changeTime() {
    const currentTime = new Date().toLocaleTimeString()
    this.setState({ currentTime })
  }

  render() {
    const currentTime = new Date()
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {currentTime.toLocaleTimeString()}
        </header>
      </div>
    )
  }
}

export default App
