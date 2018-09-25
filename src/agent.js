import axios from 'axios';

const API_ROOT = 'https://conduit.productionready.io/api';

const encode = encodeURIComponent;
const responseBody = res => res.body;

const instance = axios.create({
  baseURL: API_ROOT
});

let token = null;
const tokenPlugin = config => {
  let newConfig = {...config};
  if (token) {
    newConfig = {
      ...config,
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  }
  return newConfig;
};

const requests = {
  del: url => {
    instance.interceptors.request.use(tokenPlugin);
    instance.del(url).then(responseBody);
  },
  get: url => {
    instance.interceptors.request.use(tokenPlugin);
    instance.get(url).then(responseBody);
  },
  put: (url, body) => {
    instance.interceptors.request.use(tokenPlugin);
    instance.put(url, body).then(responseBody);
  },
  post: (url, body) => {
    instance.interceptors.request.use(tokenPlugin);
    instance.post(url, body).then(responseBody);
  }
};

const Auth = {
  login: (email, password) =>
    requests.post('/users/login', {user: {email, password} }),
  register: (username, email, password) =>
    requests.post('/user/register', {user: {username, email, password} })
};

export default {
  Auth,
  setToken: _token => { token = _token; }
};
