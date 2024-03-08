"use client";

import axios from "axios";

const getAuthorization = () => {
  if (typeof window === "undefined" || !localStorage) {
    return "";
  }

  const token = localStorage.getItem("access_token");
  return token ? token : "";
};

export const api = axios.create({
  baseURL: "https://api.mandacarubroker.com.br",
  headers: {
    Authorization: getAuthorization(),
  },
});
