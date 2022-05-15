import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import globalReducer from "./globalReducer";
import userReducer from "./userReducer";
import produkReducer from "./produkReducer";
import penjualanReducer from "./penjualanReducer";

const reducer = combineReducers({
  sessionReducer,
  globalReducer,
  userReducer,
  produkReducer,
  penjualanReducer
});

export default reducer;
