//Dependences
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

//Data
import items from '../data/menu';

class App extends Component {
  //static propTypes = {
  //  children: PropTypes.object.isRequired
  //};  
  render() {
    return (
      <div className="App">
        <Header tittle="Title" items={items} />
        <Content />
        <Footer copyright="&copy; Kr's  webside" />
      </div>
    );
  }
}

export default App;
