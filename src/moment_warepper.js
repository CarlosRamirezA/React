import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class MomentWrapper extends React.Component{

    static proTypes = {
        date : PropTypes.any.isRequired,
        format: PropTypes.string
    };

    static defaultProps ={
        date: new Date(),
        format : 'MMMM Do YYYY, h:mm:ss'
    };


    render(){
        const date = moment(this.props.date).format(this.props.format);
        return(
        <span>{date}</span>
        );
    }
}

export default MomentWrapper;