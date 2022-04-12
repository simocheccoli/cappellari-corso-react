//uso di librerie esterne
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Experiences from "./Components/Experiences";
import Education from './Components/Education/Education';

//definizione del componente
class Student extends Component {
    render() {

       
        const name = this.props.name;
        const surname = this.props.surname;
        const experiences = this.props.experiences;
        const education = this.props.education;
        console.log(experiences);
        //interfaccia
        return (
            <div>
                <p>Nome : {name}</p>
                <p>Cognome : {surname}</p>
                <Experiences experiences={experiences}/>
                <Education education={education}/>
            </div>
        )
    }
}

//esportazione del componente (o di sole sue parti ..)
export default Student
