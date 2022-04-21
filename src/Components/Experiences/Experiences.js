//uso di librerie esterne
import React, {Component} from 'react';
import icona from '../icons/esperienze.svg';

//definizione del componente
class Experiences extends Component {
    render() {

        const experiences = this.props.experiences;
        console.log(this.props.experiences);
        
      const experiencesList = experiences.map((item, index) =>{
           return( <li className='listElement' key={index}>
                <span>{item.dateFrom}/{item.dateTo}</span>
                <p>{item.job}</p>
                <p>{item.company}</p>
                <p>{item.description}</p>
                </li>)

        })
        //interfaccia
        return (<div><div className='titleContainer'>
        <img className='Icon' src={icona}/>
        <h2>ESPERIENZE LAVORATIVE</h2>
        </div><ul>{experiencesList}</ul></div>)
    }
}

export default Experiences;
