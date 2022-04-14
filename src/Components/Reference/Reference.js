import React, {Component} from 'react';
import { Routes, Route, Link } from "react-router-dom";

class Reference extends Component {
    render (){

        const descriptionR = this.props.descriptionR;

        return (
        <div>
            <h2>Referenze</h2>
            <p>{descriptionR}</p>
            </div>
        );
    }
}

export default Reference;