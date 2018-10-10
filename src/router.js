import React from 'react';
import { Router, Route } from 'dva/router';
import Index from './routes/index';
import Star from './routes/star/index';
import Test from './routes/test/index';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Index} />
      <Route path="/star" component={Star} />
      <Route path="/test" component={Test} />
    </Router>
  );
}
export default RouterConfig;
