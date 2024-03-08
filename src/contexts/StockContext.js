"use client";

import { createContext, useState, useContext } from 'react';

const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [selectedStock, setSelectedStock] = useState(0);

  return (
    <StockContext.Provider value={{ selectedStock, setSelectedStock }}>
      {children}
    </StockContext.Provider>
  );
};

export const useStock = () => useContext(StockContext);
