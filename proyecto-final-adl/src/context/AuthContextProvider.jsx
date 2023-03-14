import React from "react";

export const AuthContex = React.createContext();

const AuthContexProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  return (
    <AuthContex.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContex.Provider>
  );
};

export default AuthContexProvider;