import React from "react";
import { createStore } from "redux";


const initialState = {
    item: [],
    filter: 'none',
    discount: 0
}


const addItem = (name , price) => {
    return {
        type: "ADD_ITEM",
        item: {name: name,
               price: price,
               }
    };
};

const DeleteItem = index =>{
    return {
        type: "DELETE_ITEM",
        index: index
    };
};

const setFilter = filter => {
    return {
      type: "SET_FILTER",
      filter: filter
    };
  };

const setDiscount = discount => {
    return {
      type: "SET_DISCOUNT",
      discount: discount
    };
  };
  
const items = (state = [], action) => {
      
      switch(action.type){
          case 'ADD_ITEM':
              return [...state, action.item ]
             
              case 'DELETE_ITEM':
                  return [
                      ...state.slice(0,action.index),
                      ...state.slice(action.index + 1)]
                      
                      default: 
                      return state      
         }
}
                
const filter = (state = "none", action) => {
    switch(action.type){
        case 'SET_FILTER':
            return action.filter
            default:
                return state      
            }
}

const discount= (state = 'none', action) => {
    switch(action.type){
        case 'SET_DISCOUNT':
            return action.discount
        default:
            return state      
        }
}
                
const gianReducer = (state = initialState, action) => {
        return {
            items: items(state.items,action),
            filter: filter(state.filter,action),
            discount: discount(state.discount,action)
            }
                  
}
                
                
                
                            

var store = createStore(gianReducer);
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

console.log(store.dispatch(addItem("platano",1)));
console.log(store.dispatch(addItem("mango",2)));
console.log(store.dispatch(addItem("zandia",3)));
console.log(store.dispatch(setFilter("filtro")));
console.log(store.dispatch(setDiscount(50)));
console.log(store.dispatch(DeleteItem(2)));

console.log(store.getState())



class InitRedux extends React.Component {
    render(){
        return(
            <div>
                holaa
            </div>
        )
    }
}

export default InitRedux;