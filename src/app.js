import React , { Component } from 'react';
import Head from './header';
import Foot from './footer';
import RouterIndex from './router/routerIndex';

import './index.css';

export default class App extends Component {
    render() {
      return (
        <div className="pageWrap">
          <Head />
          <div className="main">
            <RouterIndex />
          </div>
          <Foot />
        </div>
      );
    }
  }