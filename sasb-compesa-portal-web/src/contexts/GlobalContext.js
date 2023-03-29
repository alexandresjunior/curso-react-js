import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <GlobalContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </GlobalContext.Provider>
  );
};
