import React, {Component} from 'react';
import icona from '../icons/bio.svg';

class Bio extends Component {
    render (){

        const bio = this.props.bio;

        return (
        <div>
            <div className='titleContainer'>
            <img className='Icon' src={icona}/>
            <h2>Biografia</h2>
            </div>
            <p>{bio.description}</p>
            </div>
        );
    }
}

export default Bio;