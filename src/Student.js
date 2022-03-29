//uso di librerie esterne
import React, {Component} from 'react'

//definizione del componente
class Student extends Component {
    render() {
    const name = this.props.name;
    const surname = this.props.surname;



    console.log(this.props)
        return (
            <div>
                <p>Nome : {name}</p>
                <p>Cognome : {surname}</p>
                <p>Voti : {voti_alunno}</p>
                <p>Media : {this.media_alunno}</p>
            </div>
        )
    }

    calcolaMedia () {

        console.log(this.voti_alunno)
        return media;

    }
}


//esportazione del componente (o di sole sue parti ..)

export default Student
