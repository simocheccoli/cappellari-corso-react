//uso di librerie esterne
import React, {Component} from 'react'

//definizione del componente
class Student extends Component {
    render() {
        const name = this.props.name;
        const surname = this.props.surname;

        return (
            <div>
                <p>Nome : {name}</p>
                <p>Cognome : {surname}</p>
                <p>Media : {this.calcolaMedia()}</p>
            </div>
        )
    }

    calcolaMedia() {
        const voti = this.props.voti;
        if (voti && voti.length > 0) {
            const sommaVoti = voti.reduce((prevValue, curValue) => prevValue + curValue);
            let media = sommaVoti / voti.length;
            return media;
        } else {
            return '-'
        }
    }
}

//esportazione del componente (o di sole sue parti ..)
export default Student
