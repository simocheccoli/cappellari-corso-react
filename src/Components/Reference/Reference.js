import React, {Component} from 'react';


class Reference extends Component {
    render (){

        const reference = this.props.reference;
       

        return (
        <div>
            <h2>Referenze</h2>
            <p>{reference.name} {reference.surname}</p>
            <p>{reference.number}</p>
            <p>{reference.email}</p>
            </div>
        );
    }
}

export default Reference;