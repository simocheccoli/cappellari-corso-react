//uso di librerie esterne
import React, {Component} from 'react';


//definizione del componente
class Education extends Component {
    render() {

        const education = this.props.education;
        console.log(this.props.education);
        
      const educationList = education.map((item, index) =>{
           return( <li>
             <div className='dataEd'>
                <span>{item.dateFrom}/{item.dateTo}</span>
             </div>

            <div className='testoEd'>
                <p>{item.institute}</p>
                <p>{item.title}</p>
            </div>
                </li>)

        })
        //interfaccia
        return (<div className='mainEd'><h2>Studi</h2><ul>{educationList}</ul></div>)
    }
}

//esportazione del componente (o di sole sue parti ..)
export default Education
