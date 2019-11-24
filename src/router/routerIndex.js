import React, {Component} from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'

import Index from "../view/index/index"
import About from "../view/about/index"
import Book from "../view/book/index"


class RouterIndex extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={
          () =>{
            <Redirect to="./index/all" />
          }
        } />
        <Route path="/index/:id" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/book" component={Book} />
      </Switch>
    )
  }
}

export default RouterIndex;