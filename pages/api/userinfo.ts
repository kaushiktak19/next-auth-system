import type { NextApiRequest, NextApiResponse } from 'next';

const userInfoHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    // Dummy token verification
    if (token === 'dummy-token') {
      res.status(200).json({ username: 'admin' });
    } else {
      res.status(401).json({ message: 'Invalid token' });
    }
  } else {
    res.status(401).json({ message: 'Authorization header missing' });
  }
};

export default userInfoHandler;
