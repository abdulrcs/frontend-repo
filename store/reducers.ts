import { createReducer } from '@reduxjs/toolkit';
import {
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
} from './actions';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateUserRequest, (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    })
    .addCase(updateUserSuccess, (state) => {
      state.loading = false;
      state.success = true;
    })
    .addCase(updateUserFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload!;
    });
});

export default userReducer;
