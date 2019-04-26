import React, { Component } from 'react';

// import { Container } from './styles';

export default class template extends Component {
  render() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                <div className="gradient"></div>
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        Logo
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i className="fa fa-align-right" aria-hidden="true"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="hidden">/</li>
                            <li className="nav-item">
                                <a className="nav-link" href="/teste">Portfolio</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
  }
}
