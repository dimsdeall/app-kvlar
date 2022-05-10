import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import globalReducer from "./globalReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
  sessionReducer,
  globalReducer,
  userReducer
});

export default reducer;
