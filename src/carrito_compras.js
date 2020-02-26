import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

const addItem = (name, price) => {
    return {
        type: "ADD_ITEM",
        item: {
            name: name,
            price: price
        }
    };
};

const deleteItem = index => {
    return{
        type: "DELETE_ITEM",
        index: index
    };

};

const reducer = (state = [], action) => {
    switch (action.type){
        case "ADD_ITEM":
            return [...state, action.item];
        case "DELETE_ITEM":
            return [
                ...state.slice(0,action.index),
                ...state.slice(action.index + 1)
            ]
        default:
            return state;
    }
};
let store = createStore(reducer);

const Item = props => {
    return (
        <div>
            <div>
                Item: {props.name}| Price: { props.price }
            </div>
            <button onClick ={() => props.onDelete(props.index)}>Delete</button>
        </div>
    )
}

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = { name: "", price: ""};
    }

    handleChangeName(event){
        this.setState({ name: event.target.value })
    }
    handleChangePrice(event){
        this.setState({ price: event.target.value })
    }
    addItem(){
        this.props.onAdd(this.state.name, this.state.price)
        this.setState({ name: "", price: ""})
    }

    render(){
        return(
            <div>
                <input
                onChange={ this.handleChangeName.bind(this)}
                value={this.state.name} 
                />
                <input 
                onChange={ this.handleChangePrice.bind(this)}
                value={ this.state.price}
                ></input>
                <button 
                onClick= {() => this.addItem()}>
                    Add
                </button>
            </div>
            
        )
    }

}

const ItemsList = props => {
    return (
        <div>
            <Input onAdd={props.onAdd} />
            { props.items.map((item, index) => {
                return (
                    <Item
                    onDelete= {props.onDelete}
                    index={index}
                    name={item.name}
                    price={item.price}
                    />
                )
            })}
        </div>
    )
}
const mapStateToProps = state => {
    return{
        items: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: (name, price) => {
            console.log(dispatch(addItem(name,price)));
            console.log(store.getstate());
        },
        onDelete: id => {
            console.log(dispatch(deleteItem(id)))
        }
    }
}

const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(
    ItemsList
);


class Devolver extends React.Component{
    render(){
        return(
            <Provider store = {store}>
                <ItemListContainer/>
            </Provider>,
            rootElement
        )
    }
}

export default Devolver;