//uso di librerie esterne
import React, {Component} from 'react';


//definizione del componente
class Skills extends Component {
    render() {

        const skills = this.props.skills;
        console.log(this.props.skills);
        
      const skillsList = skills.map((item, index) =>{
           return( <li>
                <p>{item.type}</p>
                </li>)

        })
        //interfaccia
        return (<div><ul>{skillsList}</ul></div>)
    }
}

//esportazione del componente (o di sole sue parti ..)
export default Skills
