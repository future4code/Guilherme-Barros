import axios from "axios";
export const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-barros-joy";
export const headers = {
  auth: window.localStorage.getItem("token"),
};
export const httpClient = axios.create({ baseURL: url, headers });
export const getToken = () => localStorage.getItem("token");
export const setItem = (token) => localStorage.setItem("token", token);
export const countriesUrl = "https://servicodados.ibge.gov.br/api/v1/paises"