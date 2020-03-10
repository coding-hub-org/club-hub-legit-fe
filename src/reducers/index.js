//Where all our reducers are going to be imported to (i.e. states)

import counterReducer from "./counter";
import loginReducer from "./login";
import editReducer from "./edit";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  //add reducers here
  counter: counterReducer,
  login: loginReducer,
  edit: editReducer
});

export default allReducers;
