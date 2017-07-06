import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import store from './store';

import App from './components/App.jsx';
import Quiz from './components/Quiz.jsx';
import Submit from './components/Submit.jsx';
import NotFound from './components/NotFound.jsx';
import { fetchStatements } from './reducers/reducer.js';

const onQuizEnter = () => {
  store.dispatch(fetchStatements() );
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path="/" component={App} onEnter={onQuizEnter} >
        <IndexRedirect to="/quiz" />
        <Route path="/quiz" component={Quiz} />
        <Route path="/quiz/?v=:version" component={Quiz} />
        <Route path="/quiz/submit" component={Submit} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
