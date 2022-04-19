import React, {Component} from 'react';


class Bio extends Component {
    render (){

        const bio = this.props.bio;

        return (
        <div>
            <h2>Biografia</h2>
            <p>{bio.description}</p>
            </div>
        );
    }
}

export default Bio;