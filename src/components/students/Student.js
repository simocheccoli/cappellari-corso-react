//uso di librerie esterne
import React, {Component} from 'react'
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'*/
import {useParams} from "react-router-dom"
import {studentData} from "../data"
//definizione del componente
/*class Student extends Component {
render() {

        /!*console.log(this.props)*!/

        const name = this.props.name;
        const surname = this.props.surname;
        /!*
        const voto1 = this.props.voto1;
        const voto2 = this.props.voto2;
        const voto3 = this.props.voto3;
        *!/


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
        const voti = this.props.voti;

        if(voti && voti.length > 0){
            const sommaVoti = voti.reduce((previousValue, currentValue) => previousValue + currentValue);
            let media = sommaVoti / voti.length;
            return media;
        }else {
            return '-';
        }

    }
}*/

function Student(){

    let params = useParams();
    let student = studentData(parseInt(params.id));
    return(
        <div className="container">
            <div className="row">
                <div className="card">
                    <img className="card-img-top" src={student.img} alt="student img" />
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Nome: {student.name}</li>
                            <li className="list-group-item">Cognome: {student.surname}</li>
                            <li className="list-group-item">Media dei voti: {calcola_media(student.voti)}</li>
                        </ul>
                </div>
            </div>
        </div>
);
}

function calcola_media(voti) {
    if (voti && voti.length > 0) {
        const sommaVoti = voti.reduce((previousValue, currentValue) => previousValue + currentValue);
        let media = sommaVoti / voti.length;
        return media;
    } else {
        return '-';
    }
}


//esportazione del componente (o di sole sue parti ..)
export default Student
