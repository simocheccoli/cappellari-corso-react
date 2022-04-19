import React, {Component} from 'react';

class Photo extends Component {
    render(){

        const url = this.props.url;
        console.log(url);

        return(
           <div>
               <img className="photo" src={url} alt="immagine" />
           </div>
        );
    }
}

export default Photo;