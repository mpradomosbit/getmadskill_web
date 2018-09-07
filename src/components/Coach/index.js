//Dependencies

import React, {Component} from 'react';

class Coach extends Component {

  render() {
    console.log("estas en couchado");
    return (
    <div className={"Coach"}>

      <div className="section-4">
        <div className="w-container">
          <div className="w-row">
            <div className="column w-col w-col-8">
              <br/><br/>
              <h1 data-ix="new-interaction" className="main-heading">Evaluate, motivate, Inspire!</h1>
              <br/>
              <div className="main-subheading"> Coaches – Maintain team organization, player skill levels and up to date
                coaching drills, techniques and tips to keep your youth athletes engaged all year long.
              </div>
              <br/>
              <br/><br/><br/>

            </div>
          </div>
        </div>
      </div>

      <div className="section beige">
        <div className="w-container">
          <div className="w-row">
            <div className="w-col w-col-12 font-weight-bold">

              <iframe
                title={"video"}
                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" width="788.54" height="443"
                      type="text/html"
                      src="https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"/>

            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="w-container">
          <div className="w-row">
            <div className="w-col w-col-12 font-weight-bold">

              <p className="paragraph">Training and conditioning don’t end at practice or in the game! With our advanced
                training and reporting software, you can keep your athletes motivated and improving their skills
                throughout the year. We set up a detailed conditioning and training module for each child. Based of
                their fundamental skills and initial assessment, we can help identify key metrics to benchmarks for
                beginner, intermediate and advanced players. Follow along with team members performance of athletic
                skills, abilities, conditioning factors, motivation, team building, athletic training, or individual
                drill improvement.</p>
              <br/>
              <p className="paragraph">
                With our integrated software, we allow coaches to:
                <ul className="paragraph">
                  <li>Organize teams</li>
                  <li>Create and edit practices</li>
                  <li>Host private and team sessions</li>
                  <li>Evaluate players</li>
                  <li>Recruit players</li>
                  <li>Develop long term growth plans</li>
                  <li>Compare age appropriate skill development</li>
                  <li>Follow team members activity tracking</li>

                </ul>
              </p>
              <br/>
              <p className="paragraph">Coaches, as well as parents and their athletes will gain access to this extensive
                software, giving all parties the ability to update, motivate and encourage our youth as they move down
                the path of perfection. On the field (arena) benchmarks include such tasks and tools like time tracking
                and time spent for skating forwards vs. backwards, stopping, weaving in and out of cones, mastery of
                forward puck handling vs. backhand puck handling and all the drills that go along with this. Some of the
                software benchmarks off the field will include rules to neighborhood games like capture the flag,
                dodgeball, Wallball, Kick the Can, Sardines and many more games to keep kids playing, learning hand-eye
                coordination, team building, breathing techniques and so much more.</p>
              <p className="paragraph">Coaches have access to various dashboards of current teammates and potential
                prospects for recruitment, engagement with your team, performance and goal achievement per player and
                much more. Keep tabs on athletic development of each team member off the field just as much as you do on
                the field.</p>

            </div>
          </div>
        </div>
      </div>


      <div className="section beige">
        <div className="w-container">
          <h4>Click here to see team benchmarks in play</h4>
          <div className="w-row">
            <div className="w-col w-col-6">
              <div className="process-titles"></div>
              <p className="paragraph">
                See our points and performance tracking at work and how teams or athletes are maintained.
              </p>
            </div>
            <div className="w-col w-col-6">
              <div className="process-titles"></div>
              <p className="paragraph-2"></p>
            </div>

          </div>
        </div>
      </div>

    </div>
    );
  }
}
export default Coach;