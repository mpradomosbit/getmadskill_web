//Dependencies
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../../css/mainstyle.css';
import '../../../css/normalize.css';
import '../../../css/webflow.css';


class Footer extends Component {
  render() {

    return (
      <footer className="section footer">
        <div className="container">
          <div className="row row-eq-height">
            <div className="col-4">
              <h5>Sitemap</h5>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/player">Player</Link>
                </li>
                <li>
                  <Link to="/parent">Parent</Link>
                </li>
                <li>
                  <Link to="/coach">Coach</Link>
                </li>
                <li>
                  <Link to="/contactes">Associations</Link>
                </li>
              </ul>
            </div>
            <div className="col-4 text-center">
              <div className="terms">

                <Link to="/terms">Terms and Conditions</Link> | <Link to="/legal">Privacy Policy</Link> | <Link
                className="" to="/contact">Contact us</Link>
              </div>
              <br/>
            </div>
          </div>
        </div>
      </footer>

    );
  }
}

export default Footer;