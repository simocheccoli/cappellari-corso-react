//uso di librerie esterne
import React, {Component} from 'react'

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
        /*const voto1 = this.props.voto1;
        const voto2 = this.props.voto2;
        const voto3 = this.props.voto3;*/

        voti = new Array();
        const voti = {
            voto1: 7,
            voto2: 6,
            voto3: 8
        };

        //interfaccia
        return (
            <div>
                <p>Nome : {name}</p>
                <p>Cognome : {surname}</p>
                <p>Media : {this.calcola_media()}</p>
            </div>
        )
    }

    calcola_media(){
        let media = (voto1+voto2+voto3)/3;

        return media;

    }
}

//esportazione del componente (o di sole sue parti ..)
export default Student
