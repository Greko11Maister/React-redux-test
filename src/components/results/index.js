import React, { Component } from 'react';
import {connect} from 'react-redux';
import Page from './page';

class Results extends Component {
    render(){
        const {suggestions} = this.props;
        console.log(suggestions);

        return (
            <Page/>
        );
    }
}
const mapStateToProps = (state) => {
        return {
            suggestions: state.suggestions
        };
}

/*
//->  Hacemos el connect que nos regresa una funcion.
const wraper = connect(mapStateToProps);
//->  a esa funcion le pasamos nuestro componente [Results] y nos regresa otro componente
const componnet = wraper(Results);*/

export default  connect(mapStateToProps)(Results);