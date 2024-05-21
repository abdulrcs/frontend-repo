import UpdateButton from '@/components/UpdateButton';
import UserList from '@/components/UserList';
import { Stack, Typography } from '@mui/material';
import * as React from 'react';

export default function ButtonUsage() {
  return (
    <Stack spacing={2}>
      <Typography fontWeight='600' variant='h2' component='h1' gutterBottom>
        E-Buddy Technical Test
      </Typography>
      <UserList />
      <Stack direction='row' spacing={2}>
        <UpdateButton />
      </Stack>
    </Stack>
  );
}
