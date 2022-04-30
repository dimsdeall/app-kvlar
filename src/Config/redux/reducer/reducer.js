import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import globalReducer from "./globalReducer";

const reducer = combineReducers({
  sessionReducer,
  globalReducer
});

export default reducer;