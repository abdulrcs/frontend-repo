import { createReducer } from '@reduxjs/toolkit';
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
} from './actions';

const initialState = {
  users: [],
  loading: false,
  success: false,
  error: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUsersRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchUsersSuccess, (state, action) => {
      state.loading = false;
      state.users = action.payload!;
    })
    .addCase(fetchUsersFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload!;
    })
    .addCase(updateUserRequest, (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    })
    .addCase(updateUserSuccess, (state, action) => {
      state.loading = false;
      state.success = true;
      state.users = [...state.users, action.payload!];
    })
    .addCase(updateUserFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload!;
    });
});

export default userReducer;
