import React, {Component} from 'react';
import { Routes, Route, Link } from "react-router-dom";

class Bio extends Component {
    render (){

        const description = this.props.description;

        return (
        <div>
            <h2>Bio</h2>
            <p>È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una normale distribuzione delle lettere (al contrario di quanto avviene se si utilizzano brevi frasi ripetute, ad esempio “testo qui”), apparendo come un normale blocco di testo leggibile. Molti software di impaginazione e di web design utilizzano Lorem Ipsum come testo modello. Molte versioni del testo sono state prodotte negli anni, a volte casualmente, a volte di proposito (ad esempio inserendo passaggi ironici).</p>
        </div>
        );
    }
}

export default Bio;