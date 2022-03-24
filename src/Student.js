import React, {Component} from 'react'


class Student extends Component {
    render() {

        console.log(this.props, 'Render')

        //interfaccia
        return (
            <div>
                <p>Nome : {this.props.name}</p>
                <p>Cognome : {this.props.surname}</p>
                <p>Media : {this.calcolaMedia()}</p>
            </div>
        )
    }

    calcolaMedia() {


        if (this.props.voti && this.props.voti.length > 0) {

let sommavoti=0;
            for (let i = 0; i < this.props.voti.length; i++) {
                sommavoti+=this.props.voti[i];
            }

            return  sommavoti/this.props.voti.length;

        }
        return ' - ';

    }



}

export default Student
