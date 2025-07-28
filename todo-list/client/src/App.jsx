import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import EmptyState from "./components/EmptyState";
import { todoAPI } from "./services/api";
import { saveFilterState, loadFilterState } from "./utils/localStorage";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  // Load initial filter state from localStorage
  useEffect(() => {
    const savedFilter = loadFilterState();
    setFilter(savedFilter);
  }, []);

  // Save filter state to localStorage when it changes
  useEffect(() => {
    saveFilterState(filter);
  }, [filter]);

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await todoAPI.getAllTodos();
      setTodos(response.data || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (text) => {
    try {
      setIsAdding(true);
      const response = await todoAPI.createTodo(text);
      setTodos((prev) => [response.data, ...prev]);
    } catch (error) {
      console.error("Failed to add todo:", error);
      throw error;
    } finally {
      setIsAdding(false);
    }
  };

  const updateTodo = async (id, text) => {
    try {
      const response = await todoAPI.updateTodo(id, text);
      setTodos((prev) =>
        prev.map((todo) => (todo._id === id ? response.data : todo))
      );
    } catch (error) {
      console.error("Failed to update todo:", error);
      throw error;
    }
  };

  const toggleTodo = async (id) => {
    try {
      const response = await todoAPI.toggleTodo(id);
      setTodos((prev) =>
        prev.map((todo) => (todo._id === id ? response.data : todo))
      );
    } catch (error) {
      console.error("Failed to toggle todo:", error);
      throw error;
    }
  };

  const deleteTodo = async (id) => {
    try {
      await todoAPI.deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
      throw error;
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Filter todos based on current filter
  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.completed;
      case "completed":
        return todo.completed;
      default:
        return true;
    }
  });

  // Calculate counts for filter buttons
  const counts = {
    all: todos.length,
    active: todos.filter((todo) => !todo.completed).length,
    completed: todos.filter((todo) => todo.completed).length,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading your todos..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <ErrorMessage message={error} onRetry={fetchTodos} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Todo List</h1>
          <p className="text-gray-600">
            Organize your tasks and boost your productivity
          </p>
        </div>

        {/* Main Card */}
        <div className="card">
          {/* Add Todo Form */}
          <TodoForm onAddTodo={addTodo} isLoading={isAdding} />

          {/* Filter Buttons */}
          {todos.length > 0 && (
            <TodoFilter
              filter={filter}
              onFilterChange={handleFilterChange}
              counts={counts}
            />
          )}

          {/* Todo List */}
          <div className="space-y-3">
            {filteredTodos.length === 0 ? (
              <EmptyState filter={filter} />
            ) : (
              filteredTodos.map((todo) => (
                <TodoItem
                  key={todo._id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onUpdate={updateTodo}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </div>

          {/* Stats */}
          {todos.length > 0 && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between text-sm text-gray-500">
                <span>
                  {counts.active} of {todos.length} remaining
                </span>
                <span>
                  {Math.round((counts.completed / todos.length) * 100)}%
                  complete
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Built with React, Node.js, and MongoDB</p>
        </div>
      </div>
    </div>
  );
}

export default App;
