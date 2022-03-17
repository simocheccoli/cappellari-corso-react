//uso di librerie esterne
import React, {Component} from 'react'

//definizione del componente
class Student extends Component {
    render() {

        // console.log(this.props)
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
        // const voto1 = this.props.voto1;
        // const voto2 = this.props.voto2;
        // const voto3 = this.props.voto3;
        // const voti = this.props.voti;

        //interfaccia
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
        const sommaVoti = voti.reduce((prevValue, curValue) => prevValue + curValue);
        let media = sommaVoti / voti.length;

        return media;
    }
}

//esportazione del componente (o di sole sue parti ..)
export default Student
