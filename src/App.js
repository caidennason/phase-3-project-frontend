import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"

function testClick() {
  console.log('hello')
}

function App() {
  return (
    <h1 onClick={testClick}>hi</h1>
  )
}

export default App;
