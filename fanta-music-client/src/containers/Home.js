import React, { Component } from 'react';
import { Link } from 'react-router';

import { Visualizer } from 'components';

import logo from 'commons/logo.svg';
import 'styles/Home.css';

class Home extends Component {

  render() {
    const { url } = this.props;
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Fanta-Music</h2>
            <Link to="/Search">Search</Link>
          </div>
          <p className="App-intro">
          </p>
          <div>
            <Visualizer status={true} audioSrc={url} loop={false} autoPlay={true} author='rktn' title='sdsd'/>
            <img src="commons/hi.jpg" width="250" height="300" alt="my lover"/>
          </div>
        </div>
    );
  }
}

export default Home;
