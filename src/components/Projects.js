import React, { Component } from 'react';
import mentorme from '../images/mentorme.png'

class Projects extends Component {
  render() {
    return (
      <div className="Projects section flex-container">
        <div className="item">
          <img src={mentorme} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Mentor.Me</h3>
              <p><strong>Helping Students Find a Mentor</strong></p>
              <p>MEAN - MongoDB, Express.js, Angular.js, Node.js</p>
              <p><a href="https://mentorme.herokuapp.com" target="_blank" rel="noopener noreferrer">Explore App <i className="fa fa-external-link"/></a></p>
              <p><a href="https://github.com/znbb/mentor.me" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;