import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const User = ({match}) => <div>{match.url}</div>

class React_Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/">Home </Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
                
                <hr/>

                <Route exact path="/" component={Home}/>
                <Route strict path="/about/"render= {() => <div>About</div> }/>
                <Route path="/users" children={() => <div>Rendered</div>}/>
            </BrowserRouter>
            
        )
    }
}


export default React_Router;