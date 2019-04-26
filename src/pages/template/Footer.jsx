import React, { Component } from 'react';


export default class template extends Component {
  render() {
    return (
        <React.Fragment>
            <footer className="page-footer">
                <div className="gradient"></div>
                <div className="container">
                    <div className="row text-center d-flex justify-content-center">
                        <div className="col-md-12">
                            <ul>
                                <li><a href="index.html">Home </a></li>
                                <li><a href="portfolio.html">Portfolio </a></li>
                                <li><a href="services.html">Services </a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="support.html">Support</a></li>
                                <li><a href="technology.html">Technologies</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="row text-center">
                        <div className="col-md-12 footer-copyright">
                            <p>© 2018, All Rights Reserved. Designed by
                            <a href="https://www.template.net/editable/websites/html5" target="_blank"> Template.net</a></p>
                        </div>
                    </div>

                    <div className="row d-flex text-center justify-content-center">
                        <div className="col-md-8 col-12">
                            <a href="index.html">logo</a>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
  }
}
