//uso di librerie esterne
import React, {Component} from 'react'

//definizione del componente
class Student extends Component {
    render() {

        console.log(this.props)

        const name = this.props.name;
        const surname = this.props.surname;
        /*
        const voto1 = this.props.voto1;
        const voto2 = this.props.voto2;
        const voto3 = this.props.voto3;
        */


        //interfaccia
        return (
            <div>
                <p>Nome : {name}</p>
                <p>Cognome : {surname}</p>
                <p>Media : {this.calcola_media()}</p>
            </div>
        )
    }


    /*
    const array1 = [1, 2, 3, 4];

    // 1 + 2 + 3 + 4

        const sum = array1.reduce(
            (previousValue, currentValue) => previousValue + currentValue
        );

        console.log(sum);
    */

    calcola_media(){
        const voti = this.props.voti;
        const sommaVoti = voti.reduce((previousValue, currentValue) => previousValue + currentValue);

        let media = sommaVoti / voti.length;
        return media;

    }
}

//esportazione del componente (o di sole sue parti ..)
export default Student
