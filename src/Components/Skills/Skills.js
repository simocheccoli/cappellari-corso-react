//uso di librerie esterne
import React, {Component} from 'react';
import icona from '../icons/skill.svg';

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
        return (<div><div className='titleContainer'>
        <img className='Icon' src={icona}/>
        <h2>SKILLS</h2>
        </div><ul>{skillsList}</ul></div>)
    }
}

export default Skills;
