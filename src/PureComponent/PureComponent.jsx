import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
  render() {
    console.warn("PURE-COMP RENDERED")
    console.log(this.props.data);
    
    return (
      <>
       <p>1. A React component is considered pure if it renders the same output for the same state and props.</p>
       <p>2. For this type of class component, React provides the PureComponent base class. </p>
       <p>3. Class components that extend the React.PureComponent class are treated as pure components.</p>
       <div className="ex">Example:</div>
        <p>i.   After the clicking on button this.props.data : (Welcome to Prebytes) name will get change to (Hi! Kava) and it will render the Pure component </p>
        <p>ii.  But if u click again on button and if u r passing the same props as previous props it will shallow compare ur props it it is same it will not re-render the page but if props is different from preveious one it will renders the componenets</p>
        <p>iii. This is the advantage of pureComponents over regular component</p>
        <h1 style={{color:'blue'}}> {this.props.data}</h1>
      </>
    )
  }
}