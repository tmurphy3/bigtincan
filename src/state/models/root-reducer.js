import { combineReducers } from "redux";
import { userReducer } from "./profiles/reducers";

const rootReducer = combineReducers({
  users: userReducer,
});

const reducer = (state, action) => {
  return rootReducer(state, action);
};

export { reducer };
