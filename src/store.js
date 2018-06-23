import {createStore, applyMiddleware, compose } from 'redux';  
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//const store = createStore(() => [], {}, applyMiddleware());

const initialState = {};  //variable for our initial state; just an emmoty object

const middleware = [thunk];  //array of middleware

/*create our store variable...
and takes in our rootReducer (created later), initial state
and any enhancwers, using the spread operator we say middleware as it
is in the array */
const store = createStore (
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

/* const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(() => [])
); */

export default store;