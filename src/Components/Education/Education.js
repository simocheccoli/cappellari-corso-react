//uso di librerie esterne
import React, {Component} from 'react';


//definizione del componente
class Education extends Component {
    render() {

        const education = this.props.education;
        console.log(this.props.education);
        
      const educationList = education.map((item, index) =>{
           return( <li key={index}>
                <span>{item.dateFrom}/{item.dateTo}</span>
                <p>{item.institute}</p>
                <p>{item.title}</p>
                </li>)

        })
        //interfaccia
        return (<div><h2>ISTRUZIONE</h2><ul>{educationList}</ul></div>)
    }
}

//esportazione del componente (o di sole sue parti ..)
export default Education
