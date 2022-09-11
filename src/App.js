import './App.css';
import Hoc from './Hoc';


function App(props) {
  return (
    <div>
    <h1>HOC</h1>
     <p>1.A high-order component(HOC) is an advanced technique in React for reusing component logic.</p>
     <p>2.HOC is a pure function with Zero side-effects and doesn't modify the input component.</p>
    <h2>Defination:</h2> 
    <span>HOC is a function that takes a components and returns a new components.The returned component contains the WrappedComponent as a child.</span>
     <Hoc/>
     <div className="ex">Example:</div>
     
     <h1>Welcome User!!!{props.name}</h1>

    </div>
   
  );
}

export default Hoc(App);
