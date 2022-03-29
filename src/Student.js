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
        const voti = this.props.voti;
        


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
       
       console.log(this.props.voti, 'calcola_media')
       console.log(this.props.voti.lenght, 'lenght voti')

       if(this.props.voti && this.props.voti.length > 0){
       
        let sommavoti=0;


        for(let i=0; i<this.props.voti.length ; i++) {
            sommavoti+=this.props.voti[i];
        }
        return sommavoti/this.props.voti.length;
        
           

       }

        return '-';

    }
}

//esportazione del componente (o di sole sue parti ..)
export default Student
