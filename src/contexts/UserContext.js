"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { api } from "@/lib/api";

const UserContext = createContext();
import { useBalance } from "@/contexts/BalanceContext";

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [portfolio, setPortfolio] = useState([]);
  const { saveBalance } = useBalance();
  const [selectedStock, setSelectedStock] = useState(null);
  const [selectedStockPortfolio, setSelectedStockPortfolio] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        if (!isLoading) setIsLoading(true);
        const response = await api.get("/profile/me");
        setUserData(response.data);
        saveBalance(response.data.balance);
      } catch (error) {
        console.error("Erro ao fazer a requisição:", error);
      } finally {
        setIsLoading(false);
      }
    }

    // Chame a função de busca de dados ao montar o componente
    fetchUserData();
  }, [saveBalance]);

  const fetchPortfolio = useCallback(async () => {
    try {
      const response = await api.get("/portfolio");
      setPortfolio(response.data);
    } catch (error) {
      console.error("Erro ao buscar portfolio:", error);
    }
  }, []);

  const fetchPortfolioStock = useCallback(async () => {
    try {
      const response = await api.get(`/portfolio/stock/${selectedStock.id}`);
      setSelectedStockPortfolio(response.data);
    } catch (error) {
      console.error("Erro ao buscar portfolio:", error);
    }
  }, [selectedStock]);

  useEffect(() => {
    fetchPortfolioStock();
  }, [selectedStock]);

  return (
    <UserContext.Provider
      value={{
        userData,
        isLoading,
        portfolio,
        setUserData,
        fetchPortfolio,
        selectedStock,
        setSelectedStock,
        selectedStockPortfolio,
        fetchPortfolioStock,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
