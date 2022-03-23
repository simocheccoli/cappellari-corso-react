import React, {Component} from 'react'


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
       const voti = this.props.voti;

        /*const voto1 = this.props.voto1;
        const voto2 = this.props.voto2;
        const voto3 = this.props.voto3;*/

        /*voti = [
           {
               voto1: 7,
               voto2: 8,    
               voto3: 7,
           },
       ]*/

        //interfaccia
        return (
            <div>
                <p>Nome : {name}</p>
                <p>Cognome : {surname}</p>
                <p>Media : {voti}</p>
            </div>
        )
    }

    calcolaMedia(){
        let voti = ('voti[0] += voti[1] += voti[2]') /3;
        return voti;
    }

  /*  calcola_media(){
        let media = (voto1+voto2+voto3)/3; //non definiti

        return media;

    }*/
}

export default Student
