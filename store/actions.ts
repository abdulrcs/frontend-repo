import { createAction } from '@reduxjs/toolkit';

export const updateUserRequest = createAction('UPDATE_USER_REQUEST');
export const updateUserSuccess = createAction('UPDATE_USER_SUCCESS');
export const updateUserFailure = createAction('UPDATE_USER_FAILURE');
