import React, {Component} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import elencoStudenti from '../../elencoStudenti';

class Bio extends Component {
    render (){

        const description = this.props.description;

        return (
        <div>
            <h2>Bio</h2>
            <p>Lorem ipsum</p>
        </div>
        );
    }
}

export default Bio;