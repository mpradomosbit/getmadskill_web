//Dependencies

import React, {Component} from 'react';

class Home extends Component {
  render() {
    return (
        <div className="section-2">
          <div className="w-container">
            <div>
              <div className="w-row">
                <div className="column w-col w-col-8">
                  <div>
                    <h1 className="main-heading">MAD SKILLS SPORTS IS</h1>
                    <h1 data-ix="new-interaction" className="main-heading bold">COMING SOON </h1>

                  </div>
                </div>
                <div className="w-col w-col-4">
                  <div>
                    <img src={require("../../images/cell.png")}
                         srcSet={`
                                    ${require('../../images/cell-p-500.png')} 500w,
                                    ${require('../../images/cell-p-800.png')} 800w,
                                    ${require('../../images/cell-p-1080.png')} 1080w,
                                    ${require('../../images/cell.png')} 1128w
                                    `}
                         sizes={"(max-width: 479px) 96vw, (max-width: 767px) 97vw, (max-width: 991px) 229.328125px, 299.984375px"}
                    alt={"img"}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default Home;