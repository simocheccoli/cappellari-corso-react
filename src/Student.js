import React, {Component} from 'react';
import Experiences from "./Components/Experiences";
import Education from './Components/Education/Education';
import Bio from './Components/Bio/Bio';
import Reference from './Components/Reference/Reference';
import Skills from './Components/Skills/Skills';
import Software from './Components/Software/Software';
import Contacts from './Contacts/Contacts';
import Photo from './Components/Photo/Photo.js';
import './student.css';


class Student extends Component {
    render() {

       
        const name = this.props.name;
        const surname = this.props.surname;
        const experiences = this.props.experiences;
        const education = this.props.education;
        const skills = this.props.skills;
        const software = this.props.software;
        const contacts = this.props.contacts;
        console.log(experiences);
        const bio = this.props.bio;
        const reference = this.props.reference;
        const url = this.props.url;
        const job = this.props.job;
       

        //interfaccia
        return (
            <div id="main">
            <div id="colonnaSx">
                <Photo url={url}/>
                <Contacts contacts={contacts}/>
                <Bio bio={bio}/>
                <Skills skills={skills} />
                <Software software={software} />
            </div>
            
            <div id="colonnaDx">
                <p className='nome'>{name}</p>
                <p className='nome'>{surname}</p>
                <p className='job'>{job}</p>

                <Education education={education} />
                <Experiences experiences={experiences} />
                <Reference reference={reference} />
                </div>

                </div>//chiude main
        )
    }
}


export default Student;
