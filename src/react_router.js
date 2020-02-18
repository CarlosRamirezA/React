import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

const Home = () => <div>Home</div>
const About = (props) => {
    console.log(props.match)
    console.log(props.location)
    console.log(props.history)

    return(
        <div>
            About
        </div>
    )

} 
const User = ({match}) => {
    return(
        <div>{match.params.id}</div>
    )
}

const Info = ({match}) => {
    return (
      <div>
        <Route path="{match.url + '/phone'}" 
                render={(props) => <div>Phone: 123 456 7890</div>}/> 
        <Route path="{match.    url + '/email'}" 
                render={(props) => <div>Email: email@email.com</div>}/> 
        <Route path="{match.url + '/address'}" 
                render={(props) => <div>Address: 123 Address</div>}/>
      </div>
  )}
  
  /*
  MATCH (parametroz, isexact,ruta, url)
  LOCATION ((ruta,search,hash,estado))
  HISTORY (longitu,accion,ubicacion, metodos(push,pop,replace))
   */
    


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
                    <li>
                        <Link to="/info">Info</Link>
                    </li>
                </ul>
                
                <hr/>

                <Route exact path="/" component={Home}/>
                <Route path="/about"component={About}/>
                <Route path="/userId/:id" component={User}/>
                <Route path="/info" component = {Info} />
            </BrowserRouter>
            
        )
    }
}


export default React_Router;