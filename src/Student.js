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
        let voti = this.props.voti;

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
        let media = 0;
        let voti = this.props.voti;
        for(let i=0; i < voti.length; i++){
            (media += voti[i])
        };
        media /= voti.length;

        return media

    }
}

//esportazione del componente (o di sole sue parti ..)
export default Student
