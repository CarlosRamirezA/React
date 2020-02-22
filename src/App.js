import React  from "react";

import SwitchRoute from './switch';
import InitRedux from './reduxe';

class App extends React.Component {

  render(){
    return (
    <div>
      <SwitchRoute/>
      <InitRedux/>
    </div>
  )
 };
}

export default App;
