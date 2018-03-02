import React from 'react';

import {
  createStore
} from 'redux';
import {
  Provider
} from 'react-redux';

import reducers from '../reducers';
import ProfileName from '../containers/profile_name';
import Posts from '../containers/posts';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const RootComponent = () => (
  <Provider store={store}>
    <div className="container">
      <div>
        <h1>
          <span className="label label-primary">Reduxbook</span>
        </h1>
      </div>
      <br/>
      <ProfileName />
      <Posts />
    </div>
  </Provider>
);
RootComponent.displayName = 'RootComponent';

export default RootComponent;
