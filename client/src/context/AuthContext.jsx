import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    token: null,
    user: null,
  });

  useEffect(() => {
    const storedAuth = localStorage.getItem("rentwiseAuth");

    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, []);

  const login = (authData) => {
    localStorage.setItem(
      "rentwiseAuth",
      JSON.stringify(authData)
    );

    setAuth(authData);
  };

  const logout = () => {
    localStorage.removeItem("rentwiseAuth");

    setAuth({
      token: null,
      user: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}