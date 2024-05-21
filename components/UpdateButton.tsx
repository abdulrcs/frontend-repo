import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Snackbar, Typography } from '@mui/material';
import { updateUser } from '../apis/userApi';
import {
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
} from '../store/actions';
import axios from 'axios';

const UpdateButton: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: any) => state.user);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleAdd = async () => {
    dispatch(updateUserRequest());
    try {
      await axios.get('https://randomuser.me/api/').then(({ data }) => {
        const user = data.results[0];
        const newData = {
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          age: user.dob.age,
          location: `${user.location.city}, ${user.location.country}`,
          description: 'Random user from randomuser.me',
        };
        updateUser(newData);
        dispatch(updateUserSuccess(newData));
        setOpenSnackbar(true);
      });
    } catch (err: any) {
      dispatch(updateUserFailure(err.message));
    }
  };

  return (
    <div>
      <Button variant='contained' onClick={handleAdd} disabled={loading}>
        {loading ? 'Adding...' : 'Add Random User'}
      </Button>
      <Snackbar
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        autoHideDuration={3000}
        message='Random User Added!'
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
      <Snackbar
        open={error}
        autoHideDuration={3000}
        message={error}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </div>
  );
};

export default UpdateButton;
