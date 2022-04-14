//uso di librerie esterne
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Experiences from "./Components/Experiences";
import Education from './Components/Education/Education';
import Bio from './Components/Bio/Bio';
import Reference from './Components/Reference/Reference';


//definizione del componente
class Student extends Component {
    render() {

       
        const name = this.props.name;
        const surname = this.props.surname;
        const experiences = this.props.experiences;
        const education = this.props.education;
        console.log(experiences);
        const description= this.props.description;
        const descriptionR= this.props.descriptionR;
        

        //interfaccia
        return (
            <div>
                <p>Nome : {name}</p>
                <p>Cognome : {surname}</p>
                <Experiences experiences={experiences}/>
                <Education education={education}/>
                <Bio description = {description}/>
                <Reference descriptionR = {descriptionR}/>
               
            </div>
        )
    }
}


export default Student;
