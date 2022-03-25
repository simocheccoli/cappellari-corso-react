import React, {Component} from 'react'
import {getStudents} from "../data/data";
import {Link, Outlet} from "react-router-dom";

class ListStudents extends Component {
    render() {
        let students = getStudents();
        return (
            <div>
                <h1>Lista studenti</h1>
                <nav>
                    {students.map((student) => (
                        <Link
                            style={{display: "block", margin: "1rem 0"}}
                            to={`/student/${student.id}`}
                            key={student.id}
                        >
                            {student.name}
                        </Link>
                    ))}
                </nav>
                <Outlet/>
            </div>
        )
    }
}

export default ListStudents;