"use client";

import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.mandacarubroker.com.br",
});
