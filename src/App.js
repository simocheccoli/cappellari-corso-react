import logo from './logo.svg';
import './App.css';
import Student from "./Student";
import studenti from "./elencoStudenti.js"
import {Routes, Route, Link} from "react-router-dom";


function App() {

    const navbar = <div className="container">
        <h1 className="site-heading">Hello, React</h1>
    </div>

    return (
        <div className="App">
            <header className="App-header">

                <h1>Welcome to React Router!</h1>

                <Routes>
                    {
                        studenti.map((item, index) => {
                            return <Route exact key={index} path={item.name}
                                          element={<Student name={item.name} surname={item.surname}/>}/>
                        })
                    }
                </Routes>

                {
                    studenti.map((item, index) => {
                        return <Link to={item.name}>{item.name}</Link>
                    })
                }

            </header>
        </div>
    );
}

export default App;
