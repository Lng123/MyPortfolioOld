<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
=======
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Projects from './components/Projects'
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';



class App extends Component{
    render() {
        return(
            <div>
                {/* <Navigation/> */}
                <Header/>
                <Projects/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> d90291635155fceafa7fa822e42acfb327927e40

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
