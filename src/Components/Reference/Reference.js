import React, {Component} from 'react';
import icona from '../icons/referenze.svg';

class Reference extends Component {
    render (){

        const reference = this.props.reference;
        console.log(this.props.reference);

        const referenceList = reference.map((item, index) =>{

            if(item.name === "" && item.surname === "" && item.number === "" && item.email === ""){
                console.log("vuota");
                return (<li key={index}><p>nessuna referenza</p></li>);
            }else{

            return( <li key={index}>
                 <p>{item.name} {item.surname}</p>
                 <p>{item.number}</p>
                 <p>{item.email}</p>
                 </li>);
            }

         })
         
            return (<div>
                <div className='titleContainer'><img className='Icon' src={icona}/><h2>REFERENZE</h2></div>
            <ul>{referenceList}</ul></div>);
            

        
    }
}

export default Reference;