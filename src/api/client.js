import axios from "axios";

const client = axios.create({
  baseURL: "http://demo3134110.mockable.io",
});

client.interceptors.response.use((response) => response.data);

export default client;