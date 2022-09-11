import React from 'react'

function Hoc  (Component)  {
  return (
   class  extends React.Component {
    state={
        auth : true
    }
    render(){
        return(
            <div>
              {this.state.auth ?  <Component name='kava'/> : null}  
            </div>
        )
    }
   }
  )
}

export default Hoc;