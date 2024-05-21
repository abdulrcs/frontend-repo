import axios from 'axios';

export const fetchUsers = async () => {
  const response = await axios.get(
    'http://localhost:5000/api/get-firebase-docs',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }
  );
  return response.data;
};

export const updateUser = async (data: object) => {
  const response = await axios.post(
    'http://localhost:5000/api/update-firebase-doc',
    {
      data,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }
  );
  return response.data;
};
