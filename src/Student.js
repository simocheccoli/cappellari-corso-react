import React, {Component} from 'react'


class Student extends Component {
    render() {

        console.log(this.props)
        //proprietà
        const name = this.props.name;
        const surname = this.props.surname;
        const voti = this.props.voti;

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
        let voti = (voti[0] += voti[1] += voti[2])/3;
        return voti;
    }
}

export default Student
