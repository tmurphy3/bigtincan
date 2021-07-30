import { ADD_USER, EDIT_USER, DELETE_USER } from "./actions";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      //console.log("add");
      initialState[action.payload.data.id] = action.payload.data;
      return initialState;
    case EDIT_USER:
      //console.log("edit");
      initialState[action.payload.data.id] = action.payload.data;
      return initialState;
    case DELETE_USER:
      //console.log("delete");
      delete initialState[action.payload.id];
      return initialState;
    default:
      return state;
  }
};

export { userReducer };
