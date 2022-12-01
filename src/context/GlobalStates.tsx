import React, { createContext, useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

type ContextType = {};

export const GlobalContext = createContext<ContextType>({} as ContextType);

export const GlobalProvider = ({ children }: ProviderProps) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
