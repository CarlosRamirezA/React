import React  from 'react';
import React_Router from './react_router';
import Linked from './router_link';
import SwitchRoute from './switch'

class App extends React.Component {

  render(){
    return (
    <div>
      <SwitchRoute/>
    </div>
  )
 };
}

export default App;
