import React, {Component} from 'react';
import {CardActions, Button} from 'react-mdl';


class Collapse extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            collapsed: true
        };
    }

    handleClick = () => {
        const {collapsed} = this.state;
        this.setState(() => ({
            collapsed: !collapsed
        }))
    }


render () {
    const { children } = this.props;
    const { collapsed } = this.state;
    return (
      <div>
        <div style={{
            display : collapsed ? "none" : "block"
          }}>
          {children}
        </div>
        <CardActions border>
            <Button colored onClick = {this.handleClick}>Details</Button>
            <Button colored>GitHub</Button>
        </CardActions>
      </div>
      
    );
  }
}

export default Collapse;