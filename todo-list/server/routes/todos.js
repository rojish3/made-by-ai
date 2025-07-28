const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
  getTodoById,
} = require("../controllers/todoController");

// @route   GET /api/todos
// @desc    Get all todos
router.get("/", getTodos);

// @route   POST /api/todos
// @desc    Create a new todo
router.post("/", createTodo);

// @route   GET /api/todos/:id
// @desc    Get a specific todo
router.get("/:id", getTodoById);

// @route   PUT /api/todos/:id
// @desc    Update a todo
router.put("/:id", updateTodo);

// @route   PATCH /api/todos/:id/toggle
// @desc    Toggle todo completion status
router.patch("/:id/toggle", toggleTodo);

// @route   DELETE /api/todos/:id
// @desc    Delete a todo
router.delete("/:id", deleteTodo);

module.exports = router;
