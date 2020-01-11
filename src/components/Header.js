import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import './css/Header.css'

class Header extends Component {
    render() {
        return(
            <header>
                <Grid className = "landing-grid">
                <Cell col={12}>
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
                </Cell>
                </Grid>
            </header>
        );
    }

};

export default Header;