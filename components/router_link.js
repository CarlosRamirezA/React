import React from 'react';
import {Link, BrowserRouter,NavLink, Redirect} from 'react-router-dom';


var style = {
    color: 'red'
}

const activeEvent = (match,location) => {
    if(!match){
        return false
    }
    console.log("active on :"+ match.url)
}




class Linked extends React.Component{

    render(){
        return(
            <div>
                <BrowserRouter>
                    <Link to="/a/b/c/d">Path</Link>
                    <Link to="/#clothes">Hashtag</Link>
                    <Link to="/item?id=123">Query</Link>
                    <NavLink to= "/somewhere" isActive ={activeEvent} >Somewhere</NavLink>               
                </BrowserRouter>
            </div>
        )
    }
}

export default Linked;