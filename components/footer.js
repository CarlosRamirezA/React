import React from 'react';
import Task from '../models/task';

class Footer extends React.Component {

    static propTypes = {
        context: React.propTypes.string,
        pending: React.propTypes.number
    };

    static defaultProps = {
        pending: 0
    };

    state = {
        context: [
            {href: '#/', caption: 'All'},
            {href: '#/active', caption: 'Active'},
            {href: '#/completed', caption: 'Completed'}
        ]
    };

    handleClearCompleted = (event) => {
        var tasks = Task.completed();
        for (let i=0,len = task.length; 1 <  len; i++){
            tasks[i].destroy();
        }
    };

    render(){
        var context = this.props.context;
        return(
            <footer className = 'footer'>
                <span className= 'todo-count'><strong>{this.props.pending}</strong>item left</span>
                <ul className= 'filters'>
                    {
                        this.state.context.map(function(item,index){
                            let className = item.caption.toLocaleLowerCase() == context ? 'select' : '';
                            return(
                                <li key={index}><a className= {className} href={item.href}>{item.caption}</a></li>
                            )
                        })
                    }
                </ul>
                <button
                    className= 'clear-completed'
                    onClick= {this.handleClearCompleted}
                >
                    clear completed
                </button>
            </footer>
            

        )
    }


}


export default Footer;