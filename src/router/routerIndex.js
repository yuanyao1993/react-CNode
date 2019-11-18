import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import About from "../view/about/index"
import Book from "../view/book/index"


class RouterIndex extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/book" component={Book} />
      </Switch>
    )
  }
}

export default RouterIndex;