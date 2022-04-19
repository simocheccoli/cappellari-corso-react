import React, {Component} from 'react';

class Photo extends Component {
    render(){

        const url = this.props.url;
        console.log(url);

        return(
           <div>
               <h2>Photo</h2>
               <img src={url} alt="immagine" />
           </div>
        );
    }
}

export default Photo;