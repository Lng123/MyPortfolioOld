import React, {Component} from 'react';
import {Grid, Cell, Card, CardTitle, CardActions, Button, CardText, CardMenu, IconButton} from 'react-mdl';
import {Collapse} from 'react-collapse';
import { Carousel } from 'react-responsive-carousel';
import './css/Projects.css';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {buttonStatus: false, isOpened: false, activeTab: 0};
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
                        <CardTitle style={{color: '#fff', height: '300px'
                        }}>Android Project 1
                        </CardTitle>
                        <Collapse isOpened ={this.state.isOpened}>
                            <CardText>
                                    Test Test<br/>
                                    Test Test<br/>
                                    Test Test<br/>
                                    Test Test<br/>
                                    Test Test<br/>
                                    Test Test<br/>
                                    Test Test<br/>
                                    Test Test<br/>
                                    Test Test<br/>
                                    Test Test<br/>
                                    Test Test<br/>
                                    Test Test<br/>
                            </CardText>
                        </Collapse>
                        <CardActions border>
                            <Button colored onClick = {this.handleClick}>More Info</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450px'}}>
                        <CardTitle style={{color: '#fff', height: '300px'}}>Android Project 1
                        </CardTitle>
                        <CardText>
                            Test Test
                        </CardText>
                        <CardActions border>
                            <Button colored>More Info</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;