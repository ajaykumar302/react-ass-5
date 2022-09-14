import React, { Component } from 'react'
import PureComp from './PureComponent';

export default class ParentComp extends Component {
    constructor(){
        super();
        this.state = {names : 'Welcome to Prebytes '}
    }
  render() {
    console.warn("PARENT-COMP RENDERED")
    return (
      <div>
      <h1 className="title">Pure Component</h1>
      <PureComp data={this.state.names}/>
      <button 
      onClick={()=>{this.setState({names : 'Hi! Kava'})}}
      >Login </button>
      <p>(Open Console to see Message warning on renders)</p>
      
      </div>
    )
  }
}