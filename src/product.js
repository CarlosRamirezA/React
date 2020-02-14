
/* hacer que el component padre pase sus 
funciones al component hijo con el metodo 
.bind()*/
import React from 'react';
import propTypes from 'prop-types';

class Product extends React.Component{

    static propTypes = {
        id: propTypes.number.isRequired,
        onclick:propTypes.func.isRequired 
    };

    render(){
        return(
            <ul>
                {
                    this.props.store.map(function(product){
                        return(
                            <li onclick = {this.props.onclick.bind(null,product.id)}>
                            {product.name}        
                            </li>
                        );
                    }.bind(this))
                }
            </ul>
        )
    }
}

export default Product;