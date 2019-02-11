import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (initialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
};

export default configureStore;
