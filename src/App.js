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
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

            
                <Student name={'Irene'} surname={'Dangelo'} media={this.props.voti} />
            </header>


        </div>
    );
}

export default App;
