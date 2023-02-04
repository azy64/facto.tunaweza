import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_HOST, LOGIN_USER_URL } from '../constants/Constants';

const initState = {
  user: {},
  isLoading: false,
  error: '',
};

/**
 * this function for checking user authentication
 */

export const getLogin = createAsyncThunk('get/login', (login) => fetch(`${BASE_HOST}${LOGIN_USER_URL}`, {
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLogin.fulfilled, (state, action) => {
      const prev = state;
      prev.isLoading = false;
      prev.user = action.payload.user;
    });
    builder.addCase(getLogin.pending, (state) => {
      const prev = state;
      prev.isLoading = true;
    });
    builder.addCase(getLogin.rejected, (state, action) => {
      const prev = state;
      prev.isLoading = false;
      prev.error = action.error;
    });
  },
});

// export const { login } = loginSlice.actions;

export default loginSlice.reducer;
