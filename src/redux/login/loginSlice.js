import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_HOST, LOGIN_USER_URL } from '../constants/Constants';

const initState = {
  user: {},
};

/**
 * this function for checking user authentication
 */

const getLogin = createAsyncThunk('get/login', (login) => fetch(`${BASE_HOST}${LOGIN_USER_URL}`, {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(login),
})
  .then((result) => result.json())
  .then((data) => data));

/**
 * here we define the slice for our reducer
 */

const loginSlice = createSlice({
  initialState: initState,
  name: 'loginSlice',
  reducers: {
    login: (state, action) => {
      const prev = state;
      prev.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLogin.fulfilled, (state, payload) => {
      const prev = state;
      prev.user = payload.result;
    });
  },
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;
