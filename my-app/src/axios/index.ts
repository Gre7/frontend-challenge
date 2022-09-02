import axios from 'axios';

import { API_KEY } from '../lib/constants';

export default axios.create({
  baseURL: process.env.REACT_APP_FRONTEND_CHALLENGE_BASE_URL,
  headers: { 'x-api-key': API_KEY },
});
