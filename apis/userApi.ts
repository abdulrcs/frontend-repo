import axios from 'axios';

export const updateUser = async (userId: string, data: object) => {
  const response = await axios.post(
    'http://localhost:5000/api/update-firebase-doc',
    {
      userId,
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
