import { createStoreHook } from 'react-redux';

// eslint-disable-next-line no-unused-vars
const initialState = {
  users: [],
  loggedInUser: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'REGISTER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
}
export default createStoreHook(reducer);
