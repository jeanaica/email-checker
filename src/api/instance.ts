import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://haveibeenpwned.com/api/v3/breachedaccount',
  headers: {
    'Content-Type': 'application/json',
    'hibp-api-key': '2d2e33cafe3f460aba6d185d810aa27b',
  },
  timeout: 1000,
});

export default instance;
