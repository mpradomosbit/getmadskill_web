//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//assets
//import '../App.css';
import '../css/normalize.css';
import '../css/webflow.css';
import '../css/mainstyle.css';


//components
import Content from './Global/Content';
import Header from './Global/Header';
import Footer from "./Global/Footer";

//Data
import items from '../data/menu';


class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {

    const {children} = this.props;
    console.log("childre", children);
    return (
      <div className="App">
        <br/><br/>
        <Header title={"Header"} items={items}/>
        <Content body={children}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
