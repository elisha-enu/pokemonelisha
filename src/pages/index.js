import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from './app'
import Detail from './detail'


function PagesRouter() {
  return (
    <Router>
      <div>
      <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="/detail">Detail</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/detail" component={Detail} />
      </div>
    </Router>
  );
}

export default PagesRouter