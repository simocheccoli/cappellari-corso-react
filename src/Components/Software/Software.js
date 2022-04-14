import React, {Component} from 'react';

class Software extends Component{
    render(){

        const software = this.props.software;
        const softwareList = software.map((item, index) =>{
            <p>{item.}</p>

        })
        return(<div><ul>{softwareList}</ul></div>)
    }   
}

export default Software;