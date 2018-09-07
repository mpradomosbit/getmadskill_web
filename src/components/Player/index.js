//Dependencies

import React, {Component} from 'react';

class Player extends Component {
  render() {
    return (
      <div className={"Player"}>
        <div className="section-2">
          <div className="w-container">
            <div className="w-row">
              <div className="column w-col w-col-8">

                <h1 data-ix="new-interaction" className="main-heading">Play, Grow, Perform</h1>
                <div className="main-subheading"> Connect with local Leagues, Coaches &amp; Teams to get MAD SPORTS
                  SKILLS Today!
                </div>
                <div className="row w-row">
                  <div className="w-col w-col-6"></div>
                  <div className="w-col w-col-6">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="w-container">
            <div className="w-row">
              <div className="w-col w-col-12 font-weight-bold">

                <p className="paragraph">Are you starting a competitive sport or are a seasoned player?.... Doesn’t
                  matter! There is always going to be someone better and there is always room for improvement, we
                  guarantee it! Our program is targeted at improving your athletic performance and growth as you move
                  through developmental skills.</p>
                <br/>
                <p className="paragraph">We play sports to win and have fun, but more importantly, we play sports to be
                  humble, to know how to lose on the field and in life. If you are losing, you are improving; and you
                  will learn from your past mistakes, it happens no other way. Practice leads to a better performance; a
                  better performance leads to confidence and ability, which leads to winning and winning is fun. By
                  encouraging and age appropriate balance of sports and daily activities, we will focus on the ABC’s of
                  development; Agility, Balance &amp; Coordination.</p>
                <br/>
                <p className="paragraph">YOU ARE COMPETITIVE, SKILLFUL, HUMBLE, CONFIDENT AND DETERMINED in whatever you
                  want to do! There are so many ways to succeed and fail in life, if you can just take a step out the
                  front door, you’ll learn the value of both. </p>
                <br/><h4 className="paragraph">We believe in our youth and we believe in you. </h4>
                <p className="paragraph">So many distractions in today’s world have isolated us from child development;
                  like getting skinned knees, bloody noses, broken bones and good old-fashioned perspiration. Experts
                  determine it takes 10,000 hours of performance to perfect an activity, task or job! These include
                  hiking, swimming, hide & seek, invitation to other sports outside of your primary sport, riding your
                  bike to the grocery store for a Gatorade and so much more. </p>
                <br/>
                <p className="paragraph">Signing up for your primary sport allows you to track your performance, gives
                  you skills development benchmarks and provides transparency and feedback for improvement and growth as
                  you move through the tracking features. The FREE software specifically matches your abilities and
                  follows you along each task, game and session so you can see your success daily while suggesting areas
                  for improvement. Along with skills and activities development, our tracking program allows you to
                  connect directly with coaches and associations to sign up for tryouts, leagues, private lessons and
                  teams.</p>

              </div>
            </div>
          </div>
        </div>

        <div className="section beige">
          <div className="w-container">
            <h4>Get Started on Developing Mad Skills</h4>
            <div className="w-row">
              <div className="w-col w-col-6">
                <div className="process-titles">Get Our Mad Skills</div>
                <p className="paragraph">Our integrated online performance testing and reporting keeps you completely up
                  to date on specific tasks performed, completed and required to reach benchmarks. Each trainer, coach
                  and association under your care also has access to your reporting software so they can maintain
                  support, education and proper training along your path! You’ll receive online access to your own:
                  <ul className="paragraph">
                    <li>Personal Activity Charts</li>
                    <li>Performance Reports</li>
                    <li>Average Age Standards</li>
                    <li>Games to Play with Friends and the Rules</li>
                    <li>Workout and Endurance Metrics</li>
                    <li>At-Home Activities and logs</li>
                    <li>Activity Time Logs</li>
                    <li>Skills Assessments</li>
                    <li>Tryout Signups</li>
                  </ul></p>
              </div>
              <div className="w-col w-col-6">
                <div className="process-titles">Access our Coaches Community</div>
                <p className="paragraph-2">Gain access to our web of 1000’s of community coaches, leagues and
                  associations across the Front Range to help you get matched up with the perfect mentor and trainer
                  depending on your skills level.</p>
                <div className="icon-wrapper">
                  <img src={require("../../images/kidshooting.jpg")} height="300" className="img-responsive" alt={"kidShooting"}/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Player;