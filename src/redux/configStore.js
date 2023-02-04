// import { createStore, applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import BillingReducer from './billing/billingSlice';
import loginReducer from './login/loginSlice';

const store = configureStore({
  reducer: {
    billing: BillingReducer,
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
