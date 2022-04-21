import React, {Component} from 'react'
import data from '../Data/data.json'

class Contacts extends Component{

render(){
    const contacts = this.props.contacts
    console.log(data.Contacts.address);


return (
    <div>
        <h3>Contatti</h3>
        <p>{contacts.address}</p>
        <p>{contacts.tel}</p>
        <p>{contacts.mail}</p>
    </div>
)
}
}

export default Contacts