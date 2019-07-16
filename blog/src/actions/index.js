import jsonPlaceholder from "../apis/jsonPlaceholder";

// A function that returns a function
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response })
};

// Action creator
// export const fetchPosts = () => {
  // Below is a BAD approach!!! and will result with: Error: Actions must be plain objects. Use custom middleware for async actions.
  // const response = await jsonPlaceholder.get("/posts");

  // Below is the correct way to do async calls
  // Return an action
