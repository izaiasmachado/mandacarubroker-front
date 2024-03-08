// providers.js
import React from "react";
import GlobalStyles from "@/styles/global";
import { UserProvider } from "@/contexts/UserContext";
import { BalanceProvider } from "@/contexts/BalanceContext";
import { TransactionTypeProvider } from "@/contexts/TransationTypeContext";
import { StockProvider } from "@/contexts/StockContext";

export function Providers({ children }) {
  return (
    <>
      <GlobalStyles />
      <BalanceProvider>
        <TransactionTypeProvider>
          <StockProvider>
            <UserProvider>{children}</UserProvider>
          </StockProvider>
        </TransactionTypeProvider>
      </BalanceProvider>
    </>
  );
}
