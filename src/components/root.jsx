import React from 'react';

import {
  createStore
} from 'redux';
import {
  Provider
} from 'react-redux';

import reducers from '../reducers';
import ProfileName from '../containers/profile_name';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const RootComponent = () => (
  <Provider store={store}>
    <div className="containter">
      <div>
        <h1>
          <span className="label label-primary">Reduxbook</span>
        </h1>
      </div>
      <br/>
      <ProfileName />
    </div>
  </Provider>
);
RootComponent.displayName = 'RootComponent';

export default RootComponent;
