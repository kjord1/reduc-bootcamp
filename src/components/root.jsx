import React from 'react';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import ProfileName from '../containers/profile_name';
import Posts from '../containers/posts';
import { fetchPosts } from '../actions/posts';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchPosts());

const RootComponent = () => (
  <Provider store={store}>
    <div className="container">
      <div>
        <h1>
          <span className="label label-primary">Reduxbook</span>
        </h1>
      </div>
      <br />
      <ProfileName />
      <Posts />
    </div>
  </Provider>
);
RootComponent.displayName = 'RootComponent';

export default RootComponent;
