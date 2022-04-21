import React, {Component} from 'react';

class Photo extends Component {
    render(){

        const url = this.props.url;
        console.log("URL" , url);

        return(
           <div>
               <span className='fillPhoto'></span>
               <img className="photo" src={url} alt="immagine"/>
           </div>
        );
    }
}

export default Photo;