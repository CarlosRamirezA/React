import React from 'react';
import { render } from 'react-dom';
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
                        hol
                    </li>
                </ul>
            </BrowserRouter>
            
        )
    }
}