import React from 'react';

class Todo extends React.Component{

    static propTypes = {
        data: React.propTypes.object
    };

    state = {
        data: this.props.data,
        editing: false,
        value: this.props.data.name
    };

    handleEdit = (event) => {
        this.setState({editing: true});
    };

    handleDestroy = (event) => {
        this.state.data.destroy()
    };

    handleKeyDown = (event) => {
        if(event.keyCode === 13){
            this.state.data.name = event.target.value;
            this.setState({editing: false});
    } }
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render(){
        return(
            <li className = {className}>
                <div className = 'view'>
                    <input className = 'toggle'
                    checked = {this.state.data.completed}
                    onChange = {this.handleToggle}
                    type= 'checkbox' />
                    <label onDoubleClick= {this.handleEdit}>{this.state.value}</label>
                    <button className= 'destroy' onClick= {this.handleDestroy}></button>
                    </div>
                    <input
                    className= 'edit'
                    onChange= {this.handleChange}
                    onKeyDown= {this.handleKeyDown}
                    type= 'text'
                    value= {this.state.value} />
            </li>

        )
    }
}

export default Todo;