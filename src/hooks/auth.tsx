import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

import { toast } from 'react-toastify';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@AdoPets:token');
    const user = localStorage.getItem('@AdoPets:user');

    if(token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`

      return {token, user: JSON.parse(user)}
    }

    return {} as AuthState;
  })

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('sessions', {
        email,
        password
      });

      const {token, user} = response.data;

      localStorage.setItem('@AdoPets:token', token);
      localStorage.setItem('@AdoPets:user', JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`

      setData({token, user})
    } catch (error) {
      toast.error('Error when trying to login, check your credentials')
    }


  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@AdoPets:token');
    localStorage.removeItem('@AdoPets:user');

    setData({} as AuthState);
  }, [])

  return (
    <AuthContext.Provider value={{user: data.user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
