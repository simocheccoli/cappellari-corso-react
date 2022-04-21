//uso di librerie esterne
import React, {Component} from 'react';


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
        return (<div><h2>ESPERIENZE LAVORATIVE</h2><ul>{experiencesList}</ul></div>)
    }
}

export default Experiences;
