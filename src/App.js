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
                <h1>Titolo pagina</h1>
                <p>
                    il mio primo progetto react
                </p>
               

                <Student name={'Beatrice'} surname={'djoum'} voto1={7} voto2={10} voto3={3}/>
                
            </header>


        </div>
    );
}

export default App;
