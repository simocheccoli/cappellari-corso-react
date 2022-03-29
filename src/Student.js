import React, {Component} from 'react';
import {Routes, Route, Link} from "react-router-dom";


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
        const voti = this.props.voti;

        /*const voto1 = this.props.voto1;
        const voto2 = this.props.voto2;
        const voto3 = this.props.voto3;*/

        //interfaccia
        return (
            <div className={this.props.gender}>
                <p>Nome : {name}</p>
                <p>Cognome : {surname}</p>
                <Link to="/about">About</Link>
            </div>
        )
    }
}

/*let sommaVoti = 0;

    calcolaMedia(){
        if(this.props.voti && this.props.voti.length > 0){ //se mettessi solo la seconda condizione mi darebbe errore.  *vedi appunti
                for (let i=0; i < this.props.voti.length; i++){ //i è l'indice di ognielemento dell'array
                        sommaVoti += this.props.voti[i]; //così abbiamo ciclato i voti
                }
                return sommaVoti/this.props.voti.length;
        }
        return ' - ';
        }
*/

export default Student
