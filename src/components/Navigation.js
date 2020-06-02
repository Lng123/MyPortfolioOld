import React, {Component} from 'react';
import './css/Navigation.css'

class Navigation extends Component {
  render() {
    const sections = ['Home', 'Projects'];
    const navLinks = sections.map(section => {
        return (
          <li><a href={'#' + section}>{section}</a></li>
        )
    });
    return (
      <nav>
        <h1>Louis Ng</h1>
        <ul>
            {navLinks}
        </ul>
      </nav>

    );
  }
}

export default Navigation;