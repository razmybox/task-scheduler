"use client"
import React, { createContext, useReducer, ReactNode } from "react";
import reducers from "./reducers";
import initialStates from "./initialStates";

export const GlobalContext = createContext<any>({
  contextState: initialStates,
  contextDispatch: () => {},
});

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [contextState, contextDispatch] = useReducer(reducers, initialStates);

  return (
    <GlobalContext.Provider
      value={{
        contextState,
        contextDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
