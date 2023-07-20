import axios from 'axios';
import { ENV, API } from './env';

export const API_URL = API[ENV];

axios.defaults.baseURL = API_URL;