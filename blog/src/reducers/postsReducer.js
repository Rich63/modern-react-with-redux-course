export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  };

  // normally write something like below but we can use switch statements
  // if (action.type === 'FETCH_POSTS') {
  //   return action.payload;
  // }
  
  // return state;
};

/* 
  Bad approach in reducers is to go outside like:

  return document.querySelector('input') or
  return axios.get('/posts')

  good approach for example:
  return state + action

  Pure means using the (previous) state and an action.

  Mutation is only for arrays and objects because Strings 
  and numbers are immutable. Therefor NEVER do a mutation 
  of an array or objects like state.name = 'Sam' 
  or state.pop().

*/