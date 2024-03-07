"use client";

import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.mandacarubroker.com.br",
  headers: {
    Authorization:
      localStorage && localStorage.getItem("access_token")
        ? localStorage.getItem("access_token")
        : "",
  },
});
