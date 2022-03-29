import logo from './logo.svg';
import './App.css';
import Student from "./Student";
import {Routes, Route, Link} from "react-router-dom";
import About from './Components/About/About.js';

function App() {

    const navbar = <div className="container">
        <h1 className="site-heading">Hello, React</h1>
    </div>


    /**
     *  Proprietà di uno Studente
     *
     *  name,surname, gender , voti
     *
     */

    let studenti = [
        {
            name: "Irene",
            surname: "D'angelo",
            gender: 'f',
            voti: [7, 5, 8]
        },

    ];

    /**
     *
     * <Link to="URL_DI_DESTINAZIONE" target="_blank" > Mostrato in pagina </Link> -> <a href="URL_DI_DESTINAZIONE" target="_blank"> Mostrato in pagina  </a>
     */

    return (
        <div className="App">
            <header className="App-header">

                <h1>Welcome to React Router!</h1>


                <Routes>
                    <Route path="Irene" element={<Student name={'Irene'} gender={'f'}/>}/>
                    <Route path="Fabio" element={<Student name={'Fabio'} gender={'m'}/>}/>
                    <Route path="Simone" element={<Student name={'Simone'} gender={'m'}/>}/>
                    <Route path="Antonio" element={<Student name={'Antonio'} gender={'m'}/>}/>
                    <Route path="Giulia" element={<Student name={'Giulia'} gender={'f'}/>}/>
                    <Route path="about/details" element={<About/>}/>
                </Routes>

                <Link to="Fabio" target="_blank">Fabio</Link>
                <Link to="Irene">Irene</Link>

            </header>
        </div>
    );
}

export default App;
