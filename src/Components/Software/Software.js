import React, {Component} from 'react';
import icona from '../icons/software.svg';

class Software extends Component {
    render() {

        const software = this.props.software;
      
        console.log(this.props.software);
        
        
      const softwareList = software.map((item, index) =>{
           return( <li key={index}>
                <p>{item.type}</p>
                </li>)

        });
        
        
        //interfaccia
        return (<div><div className='titleContainer'>
        <img className='Icon' src={icona}/>
        <h2>SOFTWARE</h2>
        </div><ul>{softwareList}</ul></div>)
    }
}

export default Software;
