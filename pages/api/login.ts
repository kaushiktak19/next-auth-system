import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Dummy authentication logic
    if (username === 'admin' && password === 'password') {
      const token = 'dummy-token';
      const user = { username: 'admin' };
      res.status(200).json({ token, user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
