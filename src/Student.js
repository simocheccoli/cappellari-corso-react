//uso di librerie esterne
import React, {Component} from 'react';
import {Link} from "react-router-dom";

//definizione del componente
class Student extends Component {
    render() {

        console.log(this.props)
        //proprietà
        /*
        const {
            name,
            surname,
            age,
            experienceLists,
        } = this.props
*/
        const name = this.props.name;
        const surname = this.props.surname;


        //interfaccia
        return (
            <div>
                <p>Nome : {name}</p>
                <p>Cognome : {surname}</p>
            </div>
        )
    }
}

//esportazione del componente (o di sole sue parti ..)
export default Student
