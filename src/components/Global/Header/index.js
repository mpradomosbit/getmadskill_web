//Dependencies
import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

//Assets
import '../../../css/mainstyle.css';
import '../../../css/webflow.css';
import '../../../css/normalize.css';



class Header extends Component{
  static propTypes ={
    title: PropTypes.string.isRequired,
    items : PropTypes.array.isRequired,
  };
  render() {
const {items} = this.props;
console.log('items',items);
    return(
<div className={"Header"}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="">
              <img
                alt={'logo'}

                src={require('../../../images/Mad-Skills-Sports-logo-white-3.png')}
                srcSet={`
            ${require('../../../images/Mad-Skills-Sports-logo-white-3-p-500.png')} 500w,
            ${require('../../../images/Mad-Skills-Sports-logo-white-3-p-800.png')}  800w,
            ${require('../../../images/Mad-Skills-Sports-logo-white-3-p-1080.png')} 1080w,
            ${require('../../../images/Mad-Skills-Sports-logo-white-3-p-1600.png')}  1600w,
            ${require('../../../images/Mad-Skills-Sports-logo-white-3.png')}   3300w
            `}
                sizes={"150px"}
                className={"stone-logo"}/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="fa fa-bars"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {
                  items && items.map(
                    (item, key)=> <li className="nav-item active " key={key}><Link className={"nav-link"} to={item.url}>{item.title}</Link></li>)
                }
              </ul>
            </div>
          </div>
        </nav>

</div>
    );
  }
}
export  default Header;