//uso di librerie esterne
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Experiences from "./Components/Experiences";
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Software from './Components/Software/Software';
import Contacts from './Contacts/Contacts';


//definizione del componente
class Student extends Component {
    render() {

       
        const name = this.props.name;
        const surname = this.props.surname;
        const experiences = this.props.experiences;
        const education = this.props.education;
        const skills = this.props.skills;
        const software = this.props.software;

        console.log(experiences);
        //interfaccia
        return (
            <div>
                <p>Nome : {name}</p>
                <p>Cognome : {surname}</p>
                <Contacts />
                <Experiences experiences={experiences}/>
                <Education education={education}/>
                <Skills skills={skills}/>
                <Software software={software}/>
            </div>
        )
    }
}

//esportazione del componente (o di sole sue parti ..)
export default Student
