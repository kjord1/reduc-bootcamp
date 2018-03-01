import React from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(() => ({}));

const RootComponent = () => (<Provider store={store}>
  <div className="containter">
    <div>
      <h1>
        <span className="label label-primary">Reduxbook</span>
      </h1>
    </div>
    <br/>
    <div>
      <h1>
        <span className="fa fa=user" aria-hidden="true"/>&nbsp; Kent Jordan
      </h1>
    </div>
  </div>
</Provider>);
RootComponent.displayName = 'RootComponent';

export default RootComponent;
