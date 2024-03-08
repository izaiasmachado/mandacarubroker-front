"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { api } from "@/lib/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await api.get("/profile/me", {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("access_token"),
          },
        });

        setUserData(response.data);
      } catch (error) {
        console.error("Erro ao fazer a requisição:", error);
      }
    }

    // Chame a função de busca de dados ao montar o componente
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
