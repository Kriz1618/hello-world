//Dependences
import React, { Component } from 'react';
import PropTypes from 'prop-types'

// Assets
import logo from './images/logo.svg';
import './ccs/Header.css';

class Header extends Component {
  static propTypes = {
    tittle: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };
  render() {
    const {title, items } = this.props;
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h2> {title} </h2>

          <ul className="Menu">
            {items && items.map((item, key) => <li key={key}>{item.title}</li>)}
          </ul>
        </div>        
      </div>
    );
  }
}

export default Header;
