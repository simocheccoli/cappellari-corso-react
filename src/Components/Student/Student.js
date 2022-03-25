//uso di librerie esterne
import React from 'react'
import {useParams} from "react-router-dom";
import {getStudent} from "../data/data.js";

function Student() {
    let params = useParams();
    let student = getStudent(parseInt(params.studentId, 10));
    return (
        <div>
            <h1>Student</h1>
            <p>Nome : {student.name}</p>
            <p>Cognome : {student.surname}</p>
            <p>Media : {calcolaMedia(student.voti)}</p>
        </div>
    );
}

function calcolaMedia(voti) {
    if (voti && voti.length > 0) {
        const sommaVoti = voti.reduce((prevValue, curValue) => prevValue + curValue);
        let media = sommaVoti / voti.length;
        return media;
    } else {
        return '-'
    }
}

//definizione del componente
// class Student extends Component {
//     render() {
//         const name = this.props.name;
//         const surname = this.props.surname;
//         return (
//             <div>
//                 <h1>Student</h1>
//                 <p>Nome : {name}</p>
//                 <p>Cognome : {surname}</p>
//                 <p>Media : {this.calcolaMedia()}</p>
//             </div>
//         )
//     }
//
//     calcolaMedia() {
//         const voti = this.props.voti;
//         if (voti && voti.length > 0) {
//             const sommaVoti = voti.reduce((prevValue, curValue) => prevValue + curValue);
//             let media = sommaVoti / voti.length;
//             return media;
//         } else {
//             return '-'
//         }
//     }
// }

//esportazione del componente (o di sole sue parti ..)
export default Student
