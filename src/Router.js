import {Link, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import React, {Component} from "react";
import ListStudents from "./Components/Student/ListStudents";
import Student from "./Components/Student/Student";


class Router extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="students" element={<ListStudents/>}/>
                <Route path="student">
                    <Route path=":studentId" element={<Student/>}/>
                </Route>
                <Route
                    path="*"
                    element={
                        <main>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        )
    }
}

export default Router