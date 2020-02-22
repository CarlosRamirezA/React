import React from 'react';

class Heroes extends React.Component{

    state ={
        list: [],
        
    };

    dataSource = [
        {name: 'Superman', power: 'fly with underwear'},
        {name: 'Batman',   power: 'belt with gdgets'},
        {name: 'Spiderman',power: 'Jump like a monkey'},
        {name: 'Hulk ', power: 'Angry with anyone'}
    ];
    

    fetchData = () => {
        setTimeout(function() {
                this.setState({ list: this.dataSource });
            }.bind(this), 2000);
    };
    handleReset = () => {
        this.setState({ list: [] });
    };

    handleFetch = () => {
        this.fetchData();
    };

    componentDidMount() {
        this.fetchData();
    }

    render(){
        
        if (!this.state.list.length) {
        return (
            <div>
                No list!
                <br />
                <button onClick={this.handleFetch}>Fetch</button>
            </div>
                );
        }else {
        return (
            <div>
                <ul>
                {
                this.state.list.map(function(heroe, index) {
            return (
                <li key={index}>{heroe.name} the {heroe.power}!</li>
            );
                })
                }
                </ul>
                <button onClick={this.handleReset}>Reset</button>
                </div>
            );
        }
    }
}

export default Heroes;