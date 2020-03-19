import { reducer as headerReducer } from "../common/Header/store";
import { reducer as homeReducer } from "../views/home/store";
import { combineReducers } from "redux-immutable";

export default combineReducers({
  headerReducer,
  homeReducer
});
