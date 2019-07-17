import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

// Reducers
export default combineReducers({
  // below the code for a dummy reducer to get the application running.
  // replaceMe: () => "This is a dummy reducer, this has to be replaced!"
  posts: postsReducer,
  users: usersReducer
});