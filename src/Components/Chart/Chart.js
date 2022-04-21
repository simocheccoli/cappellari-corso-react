import React, {Component} from 'react';


class Chart extends Component {
    render() {

        const software = this.props.software;
        console.log(this.props.software.voto);
        
      const chartUrl = software.Chart;

      const chartList = software.map((item, index) =>{
        return( <li  className='chartContainer' key={index}>
             <p className='chartTitle'>{item.type}</p>
             <img className="chartImage" src={item.chart} alt="immagine"/>
             </li>);

     })

        //interfaccia
        return (<div><h2>SOFTWARE CHARTS</h2>{chartList}</div>)
    }
}

export default Chart;
