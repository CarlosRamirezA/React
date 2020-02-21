import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, Switch, Prompt} from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const AllUsers = () => {
  return (
    <div>
      Show All Users:
      <ul>
        <li>abc</li>
        <li>def</li>
        <li>ghi</li>
      </ul>
    </div>
  );
};
const Users = ({ match }) => <div>{match.params.id}</div>;
const DefaultRoute = () => <div>Default Route</div>;

class SwitchRoute extends React.Component{
  
  render(){
      return(
          <BrowserRouter>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users/abc">Users: abc</Link>
                </li>
                <li>
                  <Link to="/users/allUsers">Show All Users</Link>
                </li>
              </ul>
              <hr />
              
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/users/allUsers" component={AllUsers} />
                <Route path="/users/:id" component={Users} />
                <Route component={DefaultRoute} />
                
                <Prompt when = {true} message = "Probando promt"/>
              
            </div>
          </BrowserRouter>
      )
  }
}

export default SwitchRoute;

