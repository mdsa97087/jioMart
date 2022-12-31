import React, { createContext, useState } from "react";


export const AuthContextProvider = createContext();

function AuthContext({ children }) {
  const [count, setCount] = useState(0);
  const [state, setstate] = useState(false);
      // const onOpen ={onOpen};

  return (
    <AuthContextProvider.Provider value={{state, count,setstate, setCount }}>
      {children}
    </AuthContextProvider.Provider>
  );
}

export default AuthContext;
