"use client";

import axios from "axios";

export const api = axios.create({
  baseURL: "https://dev-api.mandacarubroker.com.br",
});
