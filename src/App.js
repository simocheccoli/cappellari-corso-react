import logo from './logo.svg';
import './App.css';
import Student from "./Student";

function App() {

    const navbar = <div className="container">
        <h1 className="site-heading">Hello, React</h1>
    </div>

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1> <u>Titolo pagina</u></h1>

                <p>
                    Il mio primo <b>progetto react</b>
                </p>
               

                <Student name={'Beatrice'} surname={'Djoum'} voto1={7} voto2={10} voto3={3}/>
                
            </header>


        </div>
    );
}

export default App;
