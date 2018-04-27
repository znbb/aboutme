import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
        <div className="Welcome section">
            <h1 className="welcome-intro"><strong>Zara</strong> is a <strong>Software Engineer</strong></h1>
            <br/>
            <br/>
            <a href="https://linkedin.com/in/znbb" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/></a> <a href="https://github.com/znbb" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/></a>  <a href="mailto:zaramckeown@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/></a>
            <br/>
            <a href="insert here" target="_blank" rel="noopener noreferrer"><button className="button resume-button">Resume <i className="fa fa-file-pdf-o" aria-hidden="true"/></button></a>
            <img src="https://avatars2.githubusercontent.com/u/3525153?s=460&v=4" className="main-pic"/>
      </div>
    );
  }
}

export default Welcome;