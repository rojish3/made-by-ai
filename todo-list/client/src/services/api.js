import axios from "axios";

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log(`🚀 ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error("❌ Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    console.log(
      `✅ ${response.status} ${response.config.method?.toUpperCase()} ${
        response.config.url
      }`
    );
    return response;
  },
  (error) => {
    console.error("❌ Response error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Todo API functions
export const todoAPI = {
  // Get all todos
  getAllTodos: async () => {
    try {
      const response = await api.get("/todos");
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Failed to fetch todos");
    }
  },

  // Create a new todo
  createTodo: async (text) => {
    try {
      const response = await api.post("/todos", { text });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Failed to create todo");
    }
  },

  // Update a todo
  updateTodo: async (id, text) => {
    try {
      const response = await api.put(`/todos/${id}`, { text });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Failed to update todo");
    }
  },

  // Toggle todo completion status
  toggleTodo: async (id) => {
    try {
      const response = await api.patch(`/todos/${id}/toggle`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Failed to toggle todo");
    }
  },

  // Delete a todo
  deleteTodo: async (id) => {
    try {
      const response = await api.delete(`/todos/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Failed to delete todo");
    }
  },

  // Get a specific todo
  getTodoById: async (id) => {
    try {
      const response = await api.get(`/todos/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Failed to fetch todo");
    }
  },
};

export default api;
