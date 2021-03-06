import './App.css';
import Student from "./Student";
import React, {Component} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import {initializeApp} from "firebase/app";
import {getStorage, ref, getDownloadURL} from "firebase/storage";
import axios from "axios";
import ReactLoading from 'react-loading';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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

class App extends Component {
    state = {
        studenti: [],
        isLoading: true
    }

    componentDidMount() {

        getDownloadURL(ref(storage, 'elencoStudenti.json'))
            .then((url) => {
                this.setState({
                    studenti: []
                })
                axios.get(url)
                    .then((response) => {
                        this.setState({
                            studenti: response.data,
                            isLoading: false
                        })
                    });
            })

            .catch((error) => {
                // Handle any errors
            });


    }

    render() {

        const navbar = <div className="container">
            <h1 className="site-heading">Home</h1>
        </div>

        const loading = <div className="container">
            <ReactLoading type={"cylon"}/>
        </div>

        const studentiRoutes = this.state.studenti.map((item, index) => {
            return <Route exact
                          key={index}
                          path={item.User.name}
                          element={
                              <Student 
                                  key={index}
                                  url={item.Photo.url}
                                  job={item.User.job}
                                  name={item.User.name}
                                  surname={item.User.surname}
                                  contacts={item.Contacts}
                                  tel={item.Contacts.tel}
                                  mail={item.Contacts.mail}
                                  experiences={item.Experience}
                                  education={item.Education}
                                  bio={item.Bio}
                                  reference={item.Reference}
                                  skills={item.Skills}
                                  software={item.Software}
                              />


                          }

            />
        });

        const studentiLinks = this.state.studenti && this.state.studenti.length && this.state.studenti.map((item, index) => {

        if(index % 2 === 0){
            return (<tbody key={index}>
                <tr>
                    <td><AnchorLink href='#main'><Link to={item.User.name}>{item.User.name} {item.User.surname}</Link></AnchorLink></td>
                    <td><img src={item.Photo.url} alt="immagine" /></td>
                    </tr>
           </tbody>);
      
        }
        else{
            return (<tbody key={index}>
                <tr>
                <td>
                    <img src={item.Photo.url} alt="immagine" /></td>
                    <td><AnchorLink href='#main'><Link to={item.User.name}>{item.User.name} {item.User.surname}</Link></AnchorLink></td>
                    </tr>
           </tbody>
           );
        }
    });

        if (this.state.isLoading) {
            return (
                <div className="App">
                    <header className="App-header">
                        {loading}
                    </header>
                </div>
            )
        }

        return (
            <div className="App">
                <header className="App-header">

                    

                    <Routes>
                        {
                            studentiRoutes
                        }
                    </Routes>

                    {navbar}

                    <h2>Elenco studenti</h2>
    <table>
                    {
                        studentiLinks
                    }

    </table>
                    

                </header>
            </div>
        )
    };
}

export default App;
