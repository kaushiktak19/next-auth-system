// hooks/useAuthSession.ts
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearAuth } from '@/redux/auth/auth.slice';
import { RootState } from '@/redux/store';

const useAuthSession = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await fetch('/api/userinfo', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          const user = await response.json();
          dispatch(setUser(user));
        } else {
          dispatch(clearAuth());
        }
      }
    };

    fetchUser();
  }, [dispatch]);

  return user;
};

export default useAuthSession;
