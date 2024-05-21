import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { updateUser } from '../apis/userApi';
import {
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
} from '../store/actions';

const UpdateButton: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state: any) => state.user);

  const handleUpdate = async () => {
    dispatch(updateUserRequest());
    try {
      const data = { age: 20 };
      await updateUser('QZgMx7pE2MwdaMCQu6tV', data);
      dispatch(updateUserSuccess());
    } catch (err: any) {
      dispatch(updateUserFailure(err.message));
    }
  };

  return (
    <div>
      <Button variant='contained' onClick={handleUpdate} disabled={loading}>
        {loading ? 'Updating...' : 'Update User'}
      </Button>
      {success && <Typography>Update successful!</Typography>}
      {error && <Typography color='error'>{error}</Typography>}
    </div>
  );
};

export default UpdateButton;
