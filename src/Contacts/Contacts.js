import React, {Component} from 'react'
import data from '../Data/data.json'

class Contacts extends Component{

render(){
    const address = data.Contacts.address;
    const number = data.Contacts.number;
    const mail = data.Contacts.mail;
    console.log(data.Contacts.address);


return (
    <div>
        <h3>contatti</h3>
        <p>{address}</p>
        <p>{number}</p>
        <p>{mail}</p>
    </div>
)
    



}


}

export default Contacts