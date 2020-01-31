import React, {Component} from 'react';
import {Grid, Cell, Card, CardTitle, CardActions, Button, CardText, CardMenu, IconButton} from 'react-mdl';
import { Carousel } from 'react-bootstrap';
import './css/Projects.css';
import argos1 from '../img/Argos1.png';
import argos2 from '../img/Argos2.png';
import argos3 from '../img/Argos3.png';
import Collapse from './Collapse.js'

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {buttonStatus: false, isOpened: [false, false], activeTab: 0};
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick(event) {
        if (this.state.buttonStatus  === false){
            this.setState({buttonStatus:true, isOpened: true});
        } else if (this.state.buttonStatus  === true) {
            this.setState({buttonStatus:false, isOpened: false});
        }
    }


    render() {
        return(
            <div className="projects">
                <Grid>
                    <Cell col={12}>
                    <div className="projects-grid">
                    <Card id="p1" shadow={5} style={{minWidth: '450px', height: 'auto'}}>
                    <CardText>
                        <span>Android Project: Argos</span>
                    </CardText>
                    
                    <Carousel interval={false}>
                    <Carousel.Item>
                        <img src={argos1}/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={argos2}/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={argos3}/>
                    </Carousel.Item>

                    </Carousel>
                    <Collapse>
                        <CardText>
                        <h2>Argos</h2>
                        An android app named Argos, aimed at improving bike security in Vancouver. Collaborated in a group of three students,
                        Argos won first place out of 11 teams at the BCIT android development competition under the community category.
                        Argos helps users find secure places to park their bike, using maps showing locations of bike racks and bike theft iin Vancouver.
                        <br/><br/>
                        Argos uses the google maps api to display nearby locations of bike racks, as markers and clusters. The user can then toggle a setting,
                        showing all the bike thefts, overlayed as a heatmap.
                        <br/><br/>
                        The datasets for both the bike racks and bike thefts are stored in firebase and populates the map based off latitude and longitude.
                        Coordinates were not available for the bike thefts dataset, and therefore a geocoding api was used to convert addresses to coordinates.
                        <br></br>
                        <h4>Technologies</h4>
                        Java, Firebase, Android Studio
                        </CardText>
                        </Collapse>
                    </Card>
                    <Card id="p1" shadow={5} style={{minWidth: '450px', height: 'auto'}}>
                    <CardText>
                        <span>TAOEX Club</span>
                    </CardText>
                    
                    <Carousel interval={false}>
                    <Carousel.Item>
                        <img src={argos1}/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={argos2}/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={argos3}/>
                    </Carousel.Item>

                    </Carousel>

                    <Collapse >
                        <CardText>
                        <h2>TAOEX Club</h2>
                        I had the oppurtunity to work on TAOEX Club for our client TAOEX along with five other students as part of the Industry Sponsored Student Projects program at BCIT
                        TAOEX Club is a social webapp for the game taoex. 
                        TAOEX Club is used to manage user profiles, matches, clubs, and leagues, and was built with Laravel, a PHP framework, while using MySQL as the database.

                        <br/><br/>
                        We were tasked with adding new features to the platform. The new features involved developing an 
                        admistrator level features that has full control of the players such as banning, messaging, editing user profiles, and managing clubs, club leaders and members.
                        We also added user level features such as owning and joining multiple clubs, club invitations, removing club members, club scores and rankings, and matches.
                        <br/><br/>

                        <h4>Technologies</h4>
                        Laravel PHP Framework, MySql
                        </CardText>
                        </Collapse>
                    </Card>
                </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;