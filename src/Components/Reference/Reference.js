import React, {Component} from 'react';


class Reference extends Component {
    render (){

        const reference = this.props.reference;
        console.log(this.props.reference.number);

        const referenceList = reference.map((item, index) =>{
            return( <li key={index}>
                 <p>{item.name} {item.surname}</p>
                 <p>{item.number}</p>
                 <p>{item.email}</p>
                 </li>)
 
         })
       

        return (
        <div>
            <h2>Referenze</h2>
            {referenceList}
            </div>
        );
    }
}

export default Reference;