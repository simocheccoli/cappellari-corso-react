import logo from './logo.svg';
import './App.css';
import Student from "./Student";
import { Routes, Route, Link } from "react-router-dom";
import About from './Components/About/About.js';

function App() {

    const navbar = <div className="container">
        <h1 className="site-heading">Hello, React</h1>
    </div>

    

    return (
        <div className="App">
            <header className="App-header">
            
                <h1>Welcome to React Router!</h1>
      <Routes>
       
        <Route path="Irene" element={<Student name={'Irene'} gender={'f'} />} />
        <Route path="Fabio" element={<Student name={'Fabio'} gender={'m'}/>} />
        <Route path="about" element={<About />} />
      </Routes>

      <Link to="Fabio">Fabio</Link>
      <Link to="Irene">Irene</Link>

</header>
        </div> 
    );
}

export default App;
