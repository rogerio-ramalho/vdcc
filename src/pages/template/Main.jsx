import React, { Component } from 'react';

// import { Container } from './styles';
import Routes from '../../routes';

export default class template extends Component {
  render() {
    return (
        <React.Fragment>
            <div id="blog-single">
                <div className="container">
                    <Routes />
                </div>                
            </div>
        </React.Fragment>
    );
  }
}
