import axios from "axios";

export const httpService = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs'
})
