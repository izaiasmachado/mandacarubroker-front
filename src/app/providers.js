// providers.js
import React from "react";
import GlobalStyles from "@/styles/global";
import { UserProvider } from "@/contexts/UserContext"
import { BalanceProvider } from "@/contexts/BalanceContext";

export function Providers({ children }) {
  return (
    <>
      <GlobalStyles />
      <UserProvider>
        <BalanceProvider>{children}</BalanceProvider>
      </UserProvider>
    </>
  );
}
