//uso di librerie esterne
import React, {Component} from 'react'

//definizione del componente
class Student extends Component {
    render() {
    const name = this.props.name;
    const surname = this.props.surname;


    const voti_alunno = this.props.voti_alunno;

    console.log(voti_alunno)
        return (
            <div>
                <p>Nome : {name}</p>
                <p>Cognome : {surname}</p>
                <p>Voti : {voti_alunno}</p>
                <p>Media : {this.media_alunno}</p>
            </div>
        )
    }

    media_alunno(voti_alunno) {
        let media = (voti_alunno[0]) + (voti_alunno[1]) + (voti_alunno[2])/3;
        console.log(voti_alunno);
        return media;

    }
}


//esportazione del componente (o di sole sue parti ..)

export default Student
