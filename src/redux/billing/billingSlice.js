import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { POST_BILLING_URL, GET_BILLING_URL, DELETE_BILLING_URL } from '../constants/Constants';

const initState = {
  billings: new Set(),
};

/**
 * Here is a function to post a new Bill
 * @param billing
 */

export const postNewBilling = createAsyncThunk('post/bill', (billing) => {
  fetch(`${POST_BILLING_URL}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(billing),
  })
    .then((result) => result.json())
    .then((data) => data);
});
/**
 * here is a function to get billings
 */
export const getBillings = createAsyncThunk('get/bills', () => {
  fetch(`${GET_BILLING_URL}`)
    .then((result) => result.json())
    .then((data) => data);
});

/**
 * here is a function for delete billing
 */
export const deleteBilling = createAsyncThunk('delete/bill', (billing) => {
  fetch(`${DELETE_BILLING_URL}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(billing),
  })
    .then((result) => result.json())
    .then((data) => data);
});

/**
 * our slice here
 */
const billingSlice = createSlice({
  initialState: initState,
  name: 'crud',
  reducers: {
    createBilling: (state, action) => {
      state.billings.add(action.payload);
    },
    removeBilling: (state, { payload }) => {
      state.billings.forEach((el) => { if (el.id === payload.id)state.billings.delete(el); });
    },
    loadBillings: (state, { payload }) => {
      payload.map((el) => {
        state.billings.add(el);
        return el;
      });
    },
  },
  extraReducers: (builder) => {
    /**
     * when postNewBilling is fulfilled
     * @param state
     * @param payload
     */
    builder.addCase(postNewBilling.fulfilled, (state, payload) => {
      state.billings.add(payload.result);
    });
    builder.addCase(getBillings.fulfilled, (state, payload) => {
      payload.map((el) => {
        state.billings.add(el);
        return el;
      });
    });
  },
});

export default billingSlice.reducer;
export const { loadBillings, createBilling, removeBilling } = billingSlice.actions;
