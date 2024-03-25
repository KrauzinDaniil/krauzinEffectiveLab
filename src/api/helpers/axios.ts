import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import envs from '../../config/enviroments'
const instance = axios.create({
    baseURL: envs.baseApiUrl,
    params: { 
        apikey:envs.apiKey
    }
});

const notify = (message: string) => toast(message);

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    notify("Ошибка запроса");

    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    notify("Ошибка запроса");
    return Promise.reject(error);
  }
);

export default instance;
