import React, {Component} from 'react'
import data from '../Data/data.json'
import data2 from '../elencoStudenti.json'

class Contacts extends Component{
    

render(){
    const address = data.Contacts.address;
    const number = data.Contacts.tel;
    const mail = data.Contacts.mail;
    const ind = this.props.indice;
    
   

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