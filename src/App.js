import React, { Component } from 'react';
import ReactGA from 'react-ga';
import About from './components/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import arrow from './images/arrow.gif'
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import Blog from './components/Blog'
import './App.css';

class App extends Component {
  constructor() {
    super();
    initializeReactGA();
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Welcome />
        <div className="down-arrow">
        <img src={arrow} alt="Scroll" width="50px" />
        </div>
        <h2 className="heading" id="about">About</h2>
        <About />
        <h2 className="heading" id="projects">Projects</h2>
        <Projects />
        <h2 className="heading" id="blog">Blogs</h2>
        <Blog />
        <h2 className="heading" id="footer">Contact</h2>
        <Footer />
      </div>
    );
  }
}

function initializeReactGA() {
  ReactGA.initialize('UA-135010858-1');
  ReactGA.pageview(window.location.pathname);
}

export default App;
