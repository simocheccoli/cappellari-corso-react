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
        const voto1 = this.props.voto1;
        const voto2 = this.props.voto2;
        const voto3 = this.props.voto3;


        //interfaccia
        return (
            <div>
                <p><b>Nome :</b> {name}</p>
                <p><b>Cognome : </b>{surname}</p>
                <p><b>Media :</b> {this.calcola_media()}</p>
            </div>
        )
    }

    calcola_media(){
        let media = (this.props.voto1 + this.props.voto2 + this.props.voto3)/3;

        return media;

    }
}

//esportazione del componente (o di sole sue parti ..)
export default Student
