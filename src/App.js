import './App.css';
import Student from "./Student";
import studenti from "./elencoStudenti.js"
import {Routes, Route, Link} from "react-router-dom";


function App() {

    const navbar = <div className="container">
        <h1 className="site-heading">Welcome to React Router!</h1>
    </div>

    return (
        <div className="App">
            <header className="App-header">

                {navbar}

                <Routes>
                    {
                        studenti.map((item, index) => {
                            return <Route exact
                                          key={index}
                                          path={item.name}
                                          element={
                                              <Student name={item.name}
                                                       surname={item.surname}
                                                       voti={item.voti}/>
                                          }
                            />
                        })
                    }
                </Routes>

                <h2>Elenco studenti</h2>

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
