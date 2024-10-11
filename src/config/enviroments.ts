const envs = import.meta.env;
export default {
  apiKey: envs.VITE_PUBLIC_API_KEY,
  baseApiUrl: envs.VITE_BASE_URL,
  privateKey: envs.VITE_PRIVATE_API_KEY

};