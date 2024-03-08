"use client";

import { createContext, useContext, useState, useCallback } from "react";

const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
  const getInitialBalance = () => {
    if (typeof window === "undefined") return 0;
    const balance = localStorage.getItem("balance");
    return balance ? parseFloat(balance) : 0;
  };

  const [balance, setBalance] = useState(getInitialBalance());

  const saveBalance = useCallback((amount) => {
    setBalance(amount);
    localStorage.setItem("balance", amount);
  }, []);

  const incrementBalance = useCallback(
    (amount) => {
      setBalance(balance + amount);
    },
    [balance]
  );

  const decrementBalance = useCallback(
    (amount) => {
      setBalance(balance - amount);
    },
    [balance]
  );

  return (
    <BalanceContext.Provider
      value={{ balance, incrementBalance, decrementBalance, saveBalance }}
    >
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => useContext(BalanceContext);
