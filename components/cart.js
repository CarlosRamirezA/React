import React from 'react';
import Product from './product';

const store = [
    {id:1, name: 'Mackbook Air 11'},
    {id:2, name: 'Mackbook 2020'},
    {id:3,  name: 'Mackbook Air 13'}
];


class Cart extends React.Component{

    handkeClick = (id,event) => {
        console.log(id,event)
    }



    render(){
        return(
            <ul>
            <Product store = {store} onclick ={this.handkeClick}/>
            </ul>
        );
    }
}

export default Cart;

