const envs = import.meta.env;








export default {
  apiKey: envs.PUBLIC_API_KEY,
  baseApiUrl: envs.BASE_URL
};