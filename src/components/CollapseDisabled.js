
import Collapse from "./Collapse.js";
import React, {Component} from 'react';
import {CardActions, Button} from 'react-mdl';


class Disabled extends Collapse {
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
              <Button colored disabled>GitHub (Private)</Button>
          </CardActions>
        </div>
        
      );
    }
  }

  export default Disabled;