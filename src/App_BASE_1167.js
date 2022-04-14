import './App.css';
import Student from "./Student";
import studenti from "./elencoStudenti.js"
import {Routes, Route, Link} from "react-router-dom";
import Contacts from './Contacts/Contacts.js';

function App() {

    const navbar = <div className="container">
        <h1 className="site-heading">Home</h1>
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
                                          path={item.User.name}
                                          element={
                                              <Student name={item.User.name}
                                                       surname={item.User.surname}
                                              />
                                            
                                          }
                                          
                            />


                        })
                    }
                </Routes>

                <h2>Curriculum di {}</h2>
                <Contacts/>

                <h2>Elenco studenti</h2>
               
                    
                {
                    studenti.map((item, index) => {
                        return <Link to={item.User.name}>{item.User.name}</Link>
                            

                        
                    })
                }

            </header>
        </div>
    );
}

export default App;
