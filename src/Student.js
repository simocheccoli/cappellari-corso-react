import React, {Component} from 'react'


class Student extends Component {
    render() {

        console.log(this.props)
     
        //interfaccia
        return (
            <div>
                <p>Nome : {this.props.name}</p>
                <p>Cognome : {this.props.surname}</p>
                <p>Media : {this.calcolaMedia()}</p>
            </div>
        )
    }

    calcolaMedia(){
        console.log(this.props.voti);
        this.altroMetodo();
        let voti = (voti[0] += voti[1] += voti[2])/3;
        return voti;
    }


    altroMetodo(){
        
    }
}

export default Student
