import './App.css';
import Student from "./Student";
import {Routes, Route, Link} from "react-router-dom";
//import studenti from "./elencoStudenti.json";
import axios from 'axios';
import {initializeApp} from "firebase/app";
import {getStorage, ref } from "firebase/storage";



// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAawEECNqaWOuGSyWPTnyqJVrAv4nG5Y74",
  authDomain: "corso-cappellari-react.firebaseapp.com",
  databaseURL: "https://corso-cappellari-react-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "corso-cappellari-react",
  storageBucket: "corso-cappellari-react.appspot.com",
  messagingSenderId: "194560797106",
  appId: "1:194560797106:web:25c76295fc42e157f0dcab",
  measurementId: "G-5B40RREM4G"
};

const firebase = initializeApp(firebaseConfig);
const storage = getStorage(firebase);

const studentiref = ref(storage, 'elencoStudenti.json');

/*const studenti = axios.create({
    baseURL:'https://firebasestorage.googleapis.com/v0/b/corso-cappellari-react.appspot.com/o/elencoStudenti.json'
})*/



const studenti = axios.get(`https://raw.githubusercontent.com/simocheccoli/cappellari-corso-react/main/src/elencoStudenti.json`)
            .then(response => console.log(response.data))
            .catch(error => {
                console.error('There was an error!', error);
            });


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
                                              <Student 
                                                       url={item.Photo.url}
                                                       name={item.User.name}
                                                       surname={item.User.surname}
                                                       address={item.Contacts.address}
                                                       tel={item.Contacts.tel}
                                                       mail={item.Contacts.mail}
                                                       experiences={item.Experience}
                                                       education={item.Education}
                                                       //description={item.Bio.description}
                                                       descriptionR={item.Reference.descriptionR}                                                       
                                                       skills={item.Skills}
                                                       software={item.Software}
                                              />
                                            
                                            
                                          }
                                          
                            />


                        })
                    }
                </Routes>

                <h2>Curriculum di {}</h2>
               
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
