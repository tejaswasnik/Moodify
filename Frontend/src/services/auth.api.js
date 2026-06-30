import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

export async function register({ username, email, password }) {
  try {
    const response = await api.post("/register", { username, email, password });
    return response.data;
  } catch (error) {
    throw {
      status: error.response?.status,
      ...(error.response?.data || { message: "Request failed" }),
    };
  }
}

export async function login({ username, email, password }) {
  try {
    const response = await api.post("/login", { username, email, password });
    return response.data;
  } catch (error) {
    throw {
      status: error.response?.status,
      ...(error.response?.data || { message: "Request failed" }),
    };
  }
}

export async function getMe() {
  try {
    const response = await api.get("/getme");
    return response.data;
  } catch (error) {
    throw {
      status: error.response?.status,
      ...(error.response?.data || { message: "Request failed" }),
    };
  }
}

export async function logout() {
  try {
    const response = await api.post("/logout");
    return response.data;
  } catch (error) {
    throw {
      status: error.response?.status,
      ...(error.response?.data || { message: "Request failed" }),
    };
  }
}
