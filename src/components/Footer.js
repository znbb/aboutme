import React, { Component } from 'react';
//import gif from '../images/footer.gif'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footer-1">
          <p><a href="mailto:zaramckeown@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/> Email</a></p>
          <p><a href="https://linkedin.com/in/znbb" target="_blank" rel="noopener noreferrer" className="footer-link"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/> Linkedin</a></p>
          <p><a href="https://github.com/znbb" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/> Github</a></p>
          <h3>This Site</h3>
          <p>Made with ❤️ by <strong>Zara</strong> using React, JavaScript and custom CSS</p>
        </div>
      </div>
    );
  }
}

export default Footer;