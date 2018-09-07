//Dependencies

import React, {Component} from 'react';

class Parent extends Component {
  render() {
    return (
      <div className={"Parent"}>
        <div className="section-3">
          <div className="w-container">
            <div className="w-row">
              <div className="column w-col w-col-8">
                <br/>
                <h1 data-ix="main-heading" className="main-heading">Your student athletes development starts here.</h1>
                <br/>
                <div className="main-subheading">Helping youth athletes increase competitive levels, decrease injuries
                  and improve strength, endurance, flexibility and attitude.
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="w-container">
            <div className="w-row">
              <div className="w-col w-col-12 font-weight-bold">
                <h3>How Does it Work?</h3>
                <p className="paragraph">Each child and individual learn and develop at a different rate than their
                  peers! Mad Skills Sports (MSS) believe everyone has potential, confidence, determination and ability
                  to grow in his/her own way. The custom designed sports training and activities software platform we
                  created allows your child to develop specific skills and tools while being active daily. We strive to
                  advance agility, nutrition, exercising techniques and overall athletic potential of every child,
                  everywhere. Your student athlete will learn tips and games in time management, sportsmanship,
                  communication, nutrition and team building, all while having fun playing with his/her peers and
                  teammates.</p>
                <br/>
                <p className="paragraph">Maintaining personal health and performance is a challenge to all humans. We
                  all need motivation, skills, personal accountability and training to be better in every aspect of
                  life. As the parent, our FREE activity tracker allows you access to connecting with players, coaches,
                  teams, leagues and private lessons to further encourage your child’s balance between sports and other
                  activities around the house. Our coaching clinics and software modules are set-up and managed through
                  multiple sports leagues, associations, and teams coordinated with specific coaches and mentors that
                  are best fit to train your student based on their individual skill level. The program is broken down
                  into benchmarks based on a percentage of time spent on each child’s primary sport, a percentage of
                  time on other sports they don’t regularly play as well as various games and outdoor activities. New
                  games, activities and rules for play are added weekly upon fulfillment of each benchmark along with
                  average age standards to assess current and future goals achieved by your child. </p>
                <br/>
                <p className="paragraph">In addition to building techniques and skills in a primary sport, the software
                  assigns benchmarks to other activities like swimming, Marco Polo, bike-riding, kickball, whiffle ball,
                  tag and several other fun activities. Digital and personal monitoring, motivation and advancement of
                  each task is completed based on time spent and as each task is completed, the next one becomes more
                  advanced as the student achieves goals and advances to the next level. Parents & mentors will have
                  online access to your child’s activity tracker for monitoring, accountability and motivation along
                  with the coaches, associations and trainers. Children want to play, parents want their children to
                  play, coaches and teammates want better players; Mad Skills Sports will help keep everyone accountable
                  and motivated with a detailed plan for improvement.</p>

              </div>
            </div>
          </div>
        </div>


        <div className="section imageparent">
          <div className="w-container">
            <h1 className="heading">Check out the breakdown of activities and tasks here!</h1>
            <div className="w-row">
              <div className="w-col w-col-4">
                <div className="process-titles">Age Report</div>
                <div className="icon-wrapper">
                  <img  src={require("../../images/ICONOS-WEB_Mesa-de-trabajo-1.png")}
                       width="69" className="image-5" alt={"image"} />
                </div>

              </div>
              <div className="w-col w-col-4">
                <div className="process-titles">Create &Aacute; Resolve issues</div>
                <div className="icon-wrapper">
                  <img src={require("../../images/ICONOS-WEB_Mesa-de-trabajo-1.png")} width="69"
                                                   className="image-5" alt={"trabajo"}/></div>

              </div>
              <div className="w-col w-col-4">
                <div className="process-titles">Time traking report</div>
                <div className="icon-wrapper">
                  <img src={require("../../images/ICONOS-WEB_Mesa-de-trabajo-1.png")} width="69"
                                                   className="image-5" alt={"trabajo"}/></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Parent;