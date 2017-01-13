import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';

import Home from './modules/Home';
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Repos';
import Repo from './modules/Repo';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>

      {/* IndexRoute has no path; it's at parent's route */}
      <IndexRoute component={Home} />

      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo} />
      </Route>
      <Route path="/about" component={About} />
    </Route>
  </Router>
), document.getElementById('app'));

// the words React Router and React are written on Repos component.
// then is the purpose of line 14 just to set the url (path) and what to display?
// ^ <Route> determines which component to show at that route (path)

// Link to="..." is different than Route path="..."
// how?

// Link to="..." exits that current component and replaces it with the new component (links to routes)
// while Route path="..." is what decides which component gets rendered at that route (url).
// ^ is this right?

// I think this is it:
// <Route> determines which component to display at that route (path).
// <Link> is basically an <a> tag that navigates you to a different route in the app.

// why do I get a 404 for something like "/repos/thing/thing"?

/***********************************************************************/

// how do I make the list of repo names to persist?
// add {this.props.children} to Repos.js
// & nest Repo route to be inside Repos route in index.js

// also, what is the difference between <Link> and <NavLink>?
// "NavLink allows you to add `active` class name to links"
// also, when child routes are active, the parents routes become active too (in green)

/***********************************************************************/

// what does this mean?
// "React Router looks for an index route if a route's path matches exactly."
