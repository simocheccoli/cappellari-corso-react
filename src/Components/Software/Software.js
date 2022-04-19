import React, {Component} from 'react';


class Software extends Component {
    render() {

        const software = this.props.software;
        console.log(this.props.software);
        
      const softwareList = software.map((item, index) =>{
           return( <li key={index}>
                <p>{item.type}</p>
                </li>)

        })
        //interfaccia
        return (<div><h3>Software</h3><ul>{softwareList}</ul></div>)
    }
}

export default Software;
