import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { NonMemberTopContainer } from '../../components';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';
import './BaseContainer.scss';

export default class Container extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={NonMemberTopContainer} />
            <Route path="/about" component={About} />
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="404" />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
