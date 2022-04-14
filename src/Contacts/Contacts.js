import React, {Component} from 'react'
import data from '../Data/data.json'

class Contacts extends Component{

render(){
    const address = data.Contacts.address;
    const tel = data.Contacts.tel;
    const mail = data.Contacts.mail;
    console.log(data.Contacts.address);


return (
    <div>
        <h3>Contatti</h3>
        <p>{address}</p>
        <p>{tel}</p>
        <p>{mail}</p>
    </div>
)
}
}

export default Contacts