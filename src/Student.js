import React, {Component} from 'react';
import Experiences from "./Components/Experiences";
import Education from './Components/Education/Education';
import Bio from './Components/Bio/Bio';
import Reference from './Components/Reference/Reference';
import Skills from './Components/Skills/Skills';
import Software from './Components/Software/Software';
import Contacts from './Contacts/Contacts';
import Photo from './Components/Photo/Photo.js';


class Student extends Component {
    render() {

       
        const name = this.props.name;
        const surname = this.props.surname;
        const experiences = this.props.experiences;
        const education = this.props.education;
        const skills = this.props.skills;
        const software = this.props.software;

        console.log(experiences);
        const description= this.props.description;
        const descriptionR= this.props.descriptionR;
        const url = this.props.url;
        

        //interfaccia
        return (
            <div>
                <Photo url={url}/>
                <p>Nome : {name}</p>
                <p>Cognome : {surname}</p>
                <Contacts />
                <Experiences experiences={experiences}/>
                <Education education={education}/>
                <Bio description = {description}/>
                <Reference descriptionR = {descriptionR}/>
                <Skills skills={skills}/>
                <Software software={software}/>
            </div>
        )
    }
}


export default Student;
