import React, {Component} from 'react';


class Bio extends Component {
    render (){

        const description = this.props.description;


        return (
        <div>
            <h2>Biografia</h2>
            <p>{description}</p>
        </div>
        );
    }
}

export default Bio;