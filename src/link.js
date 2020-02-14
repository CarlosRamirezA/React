import React from 'react'

class Link extends React.Component{

    state ={
        loading : true
    }

    handleClick = (event) => {

       
        //bloquea un proceso
        event.preventDefault();
        alert('No entraras al link ;)')
    };
    //se monta cuando es llamado captura un stado pero no lo modifica 
    componentWillReceiveProps(next_props) {
        this.setState({
        loading: false
        });
        console.log("entro al componentwillreceiveprops",next_props)
      }
    componentWillUpdate(next_props,next_state){
        //no puedo utilizar setstate :'c
        console.log(next_props)
        console.log(next_state)
        
    }
    //Deuvlve el siguiente y el anterior 
    componentDidUpdate(next_props,prev_state){
        console.log(next_props)
        console.log(prev_state)
    }
    
    render(){
        let className = this.state.loading ? 'loading' : 'loaded';
        return(
            <div>
            <a href='https://www.instagram.com/carloosraamirez/' onClick={this.handleClick}>
            Sigueme en instagram
            </a>
            <div>
            <div>{className}</div>
            </div>
            </div>
        )
    }
}

export default Link