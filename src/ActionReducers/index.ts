import { combineReducers, createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import MultiLang from './MultiLang';

const AppReducers = combineReducers({
    Language:MultiLang,
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);
