import React, { Component } from 'react';
import BlogImg from '../images/blog.png'
import mediumImg from '../images/medium.png'

class Blog extends Component {
  render() {
    return (
      <div className="Blog section flex-container">
      <div className="item">
          <img src={BlogImg} className="thumb"/>
          <div className="blog-overlay">
            <div className="text">
              <h3>ProgramThat</h3>
              <p><strong>A guide to simple programs & Android</strong></p>
              <p>Currently over 10000 views</p>
              <p><a href="https://programthat.wordpress.com" target="_blank" rel="noopener noreferrer">Read on Wordpress<i className="fa fa-external-link"></i></a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={mediumImg} className="thumb"/>
          <div className="blog-overlay">
            <div className="text">
              <h3>Medium</h3>
              <p><strong>A bunch of random articles! </strong></p>
              <p><a href="https://medium.com/@znbb" target="_blank" rel="noopener noreferrer">Read<i className="fa fa-external-link"></i></a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;