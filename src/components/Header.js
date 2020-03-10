import React, {Component} from 'react';
import './css/Header.css'
import github from '../img/logo-github.svg';
import linkedin from '../img/logo-linkedin.svg';

class Header extends Component {
    render() {
        return(
            <header>
                <div className = "landing-grid">
                <div>
                    <div className= "banner-text">
                        <h1>Louis Ng</h1>
                        <hr/>
                        <div>
                        <a href="https://github.com/Lng123/">
                        <img class= "icon" src = {github} alt="GitHub"></img>
                        </a>
                        <a href="https://ca.linkedin.com/in/louis-ng">
                        <img class= "icon" src = {linkedin} alt="LinkedIn"></img>
                        </a>
                        </div>
                        <a href="#projects" class="btn btn-default">Projects</a>
                    </div>
                </div>
                </div>

            </header>
        );
    }

};

export default Header;