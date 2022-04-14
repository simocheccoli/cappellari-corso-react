//uso di librerie esterne
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Bio from './Components/Bio/Bio';
import Reference from './Components/Reference/Reference';


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
        const description= this.props.description;
        const descriptionR= this.props.descriptionR;
        

        //interfaccia
        return (
            <div>
                <p>Nome : {name}</p>
                <p>Cognome : {surname}</p>
                <Bio description = {description}/>
                <Reference descriptionR = {descriptionR}/>
               
            </div>
        )
    }
}


export default Student;
