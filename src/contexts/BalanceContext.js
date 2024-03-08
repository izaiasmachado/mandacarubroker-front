'use client'

import { createContext, useContext, useState } from 'react';

const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(288);

  const incrementBalance = (amount) => {
    setBalance(balance + amount);
  };

  const decrementBalance = (amount) => {
    setBalance(balance - amount);
  };

  return (
    <BalanceContext.Provider value={{ balance, incrementBalance, decrementBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => useContext(BalanceContext);