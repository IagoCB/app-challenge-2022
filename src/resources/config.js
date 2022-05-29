import axios from 'axios';

const client = axios.create({
  baseURL: `https://app-challenge-api.herokuapp.com/`,
  timeout: 9000,
});

export default client;