//uso di librerie esterne
import React, {Component} from 'react'

//definizione del componente
class Student extends Component {
    render() {
    const name = this.props.name;
    const surname = this.props.surname;

    const voto1 = this.props.voto1;
    const voto2 = this.props.voto2;
    const voto3 = this.props.voto3;   

    const voti_alunno = [{

    }] = this.props.voti_alunno;

        return (
            <div>
                <p>Nome : {name}</p>
                <p>Cognome : {surname}</p>
                <p>Voti : {voti_alunno}</p>
            </div>
        )
    }
}



//esportazione del componente (o di sole sue parti ..)
export default Student
