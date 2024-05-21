import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../apis/userApi';
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from '../store/actions';
import { DataGrid } from '@mui/x-data-grid';
import { Box, CircularProgress } from '@mui/material';

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: any) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchUsersRequest());
      try {
        const usersData = await fetchUsers();
        dispatch(fetchUsersSuccess(usersData));
      } catch (err: any) {
        dispatch(fetchUsersFailure(err.message));
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <Box>
      {users.length > 0 ? (
        <div style={{ height: 500, width: '100%' }}>
          <DataGrid
            rows={users ? users : []}
            editMode='row'
            columns={[
              { field: 'id', headerName: 'ID', width: 300 },
              { field: 'name', headerName: 'Name', width: 150 },
              {
                field: 'email',
                headerName: 'Email',
                width: 250,
              },
              { field: 'age', headerName: 'Age', width: 100 },
              {
                field: 'location',
                headerName: 'Location',
                width: 200,
              },
              {
                field: 'description',
                headerName: 'Description',
                width: 300,
              },
            ]}
            getRowId={(row) => {
              console.log(row);
              return row.id;
            }}
          />
        </div>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default UserList;
