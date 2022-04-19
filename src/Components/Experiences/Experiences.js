//uso di librerie esterne
import React, {Component} from 'react';


//definizione del componente
class Experiences extends Component {
    render() {

        const experiences = this.props.experiences;
        console.log(this.props.experiences);
        
      const experiencesList = experiences.map((item, index) =>{
           return( <li key={index}>
            <div className='dataEx'>
                <span>{item.dateFrom}/{item.dateTo}</span>
            </div>

            <div className='testoEx'>
                <p>{item.job}</p>
                <p>{item.company}</p>
                <p>{item.description}</p>
            </div>
                
                </li>)

        })
        //interfaccia
        return (<div className="mainEx"><h2>Esperienze Lavorative</h2><ul>{experiencesList}</ul></div>)
    }
}

export default Experiences;
