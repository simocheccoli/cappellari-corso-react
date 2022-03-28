import React, {Component} from "react";
import {Link} from "react-router-dom";
import studentsData from "../data";

class Students extends Component{
    render() {
        return studentsData.map((element)=> {
            return (
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    {element.name} {element.surname}
                    <Link style={{ display: "block", margin: "1rem 0" }} to={`/studente/${element.id}`} key={element.id}>Maggiori informazioni</Link>
                    </li>
                </ul>
            );
        });
    }
}


export default Students