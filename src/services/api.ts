import axios from "axios";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/?limit=30&offset=0",
});
