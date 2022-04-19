import React, {Component} from 'react';


class Reference extends Component {
    render (){

        const reference = this.props.reference;
        console.log(this.props.reference);

        const referenceList = reference.map((item, index) =>{

            if(item.name === "" && item.surname === "" && item.number === "" && item.email === ""){
                console.log("vuota");
                return (<div><li key={index}><p>nessuna referenza</p></li></div>);
            }else{

            return( <li key={index}>
                 <p>{item.name} {item.surname}</p>
                 <p>{item.number}</p>
                 <p>{item.email}</p>
                 </li>);
            }

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