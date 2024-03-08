"use client";

import { createContext, useState, useContext } from 'react';

const TransactionTypeContext = createContext();

export const TransactionTypeProvider = ({ children }) => {
  const [selectedTransactionType, setSelectedTransactionType] = useState("buy");

  return (
    <TransactionTypeContext.Provider value={{ selectedTransactionType, setSelectedTransactionType }}>
      {children}
    </TransactionTypeContext.Provider>
  );
};

export const useTransactionType = () => useContext(TransactionTypeContext);
