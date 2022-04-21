import React, {Component} from 'react';


class iconC extends Component {
    render(){
        
        
        const icons = this.props.icons;
        console.log("ICONA", icons.softwareUrl);
        const iconsList = icons.map((item, index) =>{
            return (<div key={index}><img src={item.softwareUrl} /></div>)
        });
        //interfaccia
        return (<div><h3>ICONA</h3> {iconsList}</div>)
    }
}

export default iconC;
