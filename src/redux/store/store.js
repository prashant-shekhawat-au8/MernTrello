import {createStore,combineReducers,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rcategory from "../reducer/rcategory.js"
import rtask from "../reducer/rtask.js"






const rootReducer= combineReducers({category:rcategory,task:rtask})

const store= createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store;