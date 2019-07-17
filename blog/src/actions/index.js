import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

// see 188 using Lodash
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // getting all unique user ids from getState().posts
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // calling fetchUser with every userId
  // userIds.forEach(id => dispatch(fetchUser(id)))

  // see 190 using lodash chain to do the same as above
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
};

// A function that returns a function
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data })
  // We only care about the data array so thats why ressponse.data
};

// see 186
// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data })
// });

// Overfetching: Below code can be replaced by above code so there will be only one request as long as the userId is the same.
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data })
};