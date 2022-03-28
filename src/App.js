import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/nav/Navbar";
import Student from "./components/students/Student";
import Students from "./components/students/Students";

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {


    return (
        <div className="App">

            <Navbar/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="studenti" element={<Students/>}/>
                <Route path="studente" element={<Student />}>
                    <Route path=":id" element={<Student/>}/>
                </Route>
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>


                {/*<Student surname={'Mucci'} name={'Martina'} voti={[]}/>*/}

        </div>
    );
}

export default App;
