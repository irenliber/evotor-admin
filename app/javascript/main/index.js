import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';
import Stores from './views/stores/index'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


ReactDOM.render(
<Router>
  <div className="container">
    <Switch>
      <Route exact path="/" component={Stores}/>
    </Switch>
  </div>
</Router>,
  document.body.appendChild(document.createElement('div')),
);
