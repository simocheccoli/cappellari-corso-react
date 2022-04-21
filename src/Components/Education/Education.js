//uso di librerie esterne
import React, {Component} from 'react';
import icona from '../icons/studi.svg';

//definizione del componente
class Education extends Component {
    render() {

        const education = this.props.education;
        console.log(this.props.education);
        
      const educationList = education.map((item, index) =>{
           return( <li className='listElement' key={index}>
                <span>{item.dateFrom}/{item.dateTo}</span>
                <p>{item.institute}</p>
                <p>{item.title}</p>
                </li>)

        })
        //interfaccia
        return (<div><div className='titleContainer'>
        <img className='Icon' src={icona}/>
        <h2>STUDI</h2>
        </div><ul>{educationList}</ul></div>)
    }
}

//esportazione del componente (o di sole sue parti ..)
export default Education
