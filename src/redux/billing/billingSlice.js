import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_HOST, BILLING_URL } from '../constants/Constants';

const initState = {
  billings: [],
};

/**
 * Here is a function to post a new Bill
 * @param billing
 */

export const postNewBilling = createAsyncThunk('post/bill', (billing) => {
  fetch(`${BASE_HOST}${BILLING_URL}`, {
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
  fetch(`${BASE_HOST}${BILLING_URL}`)
    .then((result) => result.json())
    .then((data) => data);
});

/**
 * here is a function for delete billing
 */
export const deleteBilling = createAsyncThunk('delete/bill', (id) => {
  fetch(`${BASE_HOST}${BILLING_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((result) => result.json())
    .then((data) => data);
});

/**
 * our slice here
 */
const billingSlice = createSlice({
  initialState: initState,
  name: 'bill-crud',
  reducers: {
    createBilling: (state, action) => {
      state.billings.push(action.payload);
    },
    removeBilling: (state, { payload }) => {
      const prev = state;
      // state.billings.forEach((el) => { if (el.id === payload.id)state.billings.delete(el); });
      prev.billings = state.billings.filter((el) => el.id !== payload.id);
    },
    loadBillings: (state, { payload }) => {
      const prev = state;
      prev.billings = payload;
    },
  },
  extraReducers: (builder) => {
    /**
     * when postNewBilling is fulfilled
     * @param state
     * @param payload
     */
    builder.addCase(postNewBilling.fulfilled, (state, payload) => {
      state.billings.push(payload.result);
    });
    builder.addCase(getBillings.fulfilled, (state, payload) => {
      const prev = state;
      prev.billings = payload;
    });
    builder.addCase(deleteBilling.fulfilled, (state, payload) => {
      const prev = state;
      prev.billings = state.billings.filter((el) => el.id !== payload.id);
    });
  },
});

export default billingSlice.reducer;
export const { loadBillings, createBilling, removeBilling } = billingSlice.actions;
