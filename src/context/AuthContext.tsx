import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { AuthProviderProps, AuthContextInterface, supabase } from '../';

const AuthContext = createContext<AuthContextInterface['user']>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthContextInterface['user']>(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
      console.log(event, session);
      if (!session?.user) setUser(null);
      if (session?.user) setUser(session.user);
    });

    return () => {
      authListener.subscription;
    }
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
}

const useUserAuth = () => {
  const user = useContext(AuthContext);
  if (!user) {
    throw new Error('useUserAuth debe ser utilizado dentro de un AuthProvider');
  }
  return user;
};

export default useUserAuth;