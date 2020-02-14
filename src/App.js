import React  from 'react';
import Link from './link'
import Heroes from './heroes';
import MomentWrapper from './moment_warepper';
import Cart from './cart';
class App extends React.Component {


  
  state = {
    update: false,
    name: `App name is ${this.props.name}`,
    count: 0,
    loading :true
  };
  handleClick = (event) => {
    this.setState({count: this.state.count + 1})
  }

 

render(){
  
  return (
    
    <div>
     <small onClick = {this.handleClick}>{this.state.count}</small>
     <br></br>
     <Link  className/>
     <Heroes/>
     <MomentWrapper format = 'YYYY/MM/DD'/>
     <br></br>
     <MomentWrapper date = {new Date("04/10/2020")} format="MMMM"/>
     <Cart/>
    </div>
  )
 };
}

export default App;
