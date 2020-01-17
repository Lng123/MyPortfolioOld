import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import layer from '../img/Background-min.png';
import './css/Header.css'

class Header extends Component {
    render() {
        return(
            <header>
                <div className = "landing-grid">
                {/* <img className="layer" alt="none" src={layer}/> */}
                <div>
                    <img className= "avatar-img" alt= "avatar" src="https://dummyimage.com/600x400/000/fff"/>
                    <div className= "banner-text">
                        <h1>Portfolio</h1>
                        <hr/>
                        <p>Skills | Python | Java</p>
                        <div className="social-links">

                            {/*LinkedIn*/}
                            <a href="https://ca.linkedin.com/in/louis-ng" target ="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square" aria-hidden="true"/></a>

                            {/*GitHub*/}
                            <a href="https://github.com/Lng123" target ="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github-square" aria-hidden="true"/></a>

                        </div>
                    </div>
                </div>
                </div>

            </header>
        );
    }

};

export default Header;