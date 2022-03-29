import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Student extends Component {
    render() {
        //proprietà
        const name = this.props.name;
        const surname = this.props.surname;

        //interfaccia
        return (
            <div className={this.props.gender}>
                <p>Nome : {name}</p>
                <p>Cognome : {surname}</p>
                <p>Media : {this.calcolaMedia()}</p>
                <Link to="/about">About</Link>
            </div>
        )
    }

    calcolaMedia() {
        let sommaVoti = 0;
        if (this.props.voti && this.props.voti.length > 0) { //se mettessi solo la seconda condizione mi darebbe errore.  *vedi appunti
            for (let i = 0; i < this.props.voti.length; i++) { //i è l'indice di ognielemento dell'array
                sommaVoti += this.props.voti[i]; //così abbiamo ciclato i voti
            }
            return sommaVoti / this.props.voti.length;
        }
        return ' - ';
    }


}


export default Student
