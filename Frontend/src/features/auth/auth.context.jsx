import { createContext, useEffect, useState } from "react";
import { getMe } from "../../services/auth.api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function bootstrapAuth() {
      setLoading(true);
      try {
        const data = await getMe();
        if (isMounted) {
          setUser(data.user);
        }
      } catch (error) {
        if (isMounted && error?.status === 401) {
          setUser(null);
          return;
        }
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    bootstrapAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <AuthContext.Provider value={{user,setLoading,setUser,loading}}>
        {children}
        </AuthContext.Provider>
  )
};