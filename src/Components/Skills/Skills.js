//uso di librerie esterne
import React, {Component} from 'react';


//definizione del componente
class Skills extends Component {
    render() {

        const skills = this.props.skills;
        console.log(this.props.skills);
        
      const skillsList = skills.map((item, index) =>{     
           return( 
           <li key={index}>
                <p>{item.type}</p>
                </li>)

        })
        //interfaccia
        return (<div><h2>Skills</h2><ul>{skillsList}</ul></div>)
    }
}

export default Skills;
