import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const storedUser = localStorage.getItem("rentwiseUser");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

  }, []);

  const login = (userData) => {

    localStorage.setItem(
      "rentwiseUser",
      JSON.stringify(userData)
    );

    setUser(userData);

  };

  const logout = () => {

    localStorage.removeItem("rentwiseUser");

    setUser(null);

  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );

}