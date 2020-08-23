import { combineReducers } from 'redux';
import userReducer from './userReducer';
import uiReducer from './uiReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  user: userReducer,
  data: dataReducer,
  ui: uiReducer,
});

export default rootReducer;
