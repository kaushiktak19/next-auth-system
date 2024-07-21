'use client';

import { useState } from 'react';
import { setToken, setUser } from '@/redux/auth/auth.slice';
import { useAppDispatch } from '@/redux/store';
import useAuthSession from '../hooks/useAuthSession';

const HomePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const user = useAuthSession();

  const handleLogin = async () => {
    setError('');
    if (!username || !password) {
      setError('Both fields are required');
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { token, user } = await response.json();
        localStorage.setItem('token', token);
        dispatch(setToken(token));
        dispatch(setUser({ username: user.username }));
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('Failed to login');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        {user ? (
          <div>
            <h2 className="text-xl font-bold">Welcome, {user.username}</h2>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-center">Login</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-4 py-2 mt-4 border rounded-md"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 mt-4 border rounded-md"
            />
            <button
              onClick={handleLogin}
              className="w-full px-4 py-2 mt-6 font-bold text-white bg-blue-500 rounded-md"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
