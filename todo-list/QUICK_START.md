# 🚀 Quick Start Guide

Get your MERN Todo List application up and running in minutes!

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (local installation or MongoDB Atlas)

## 🎯 One-Command Setup

Run this command in your terminal:

```bash
node setup.js
```

This will automatically:

- ✅ Check your Node.js and npm versions
- ✅ Create environment files
- ✅ Install all dependencies
- ✅ Set up the project structure

## 🏃‍♂️ Manual Setup (Alternative)

If you prefer to set up manually:

### 1. Install Dependencies

```bash
# Install root dependencies
npm install

# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### 2. Set Up Environment Variables

**Server (.env file in server/ directory):**

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todo-app
NODE_ENV=development
```

**Client (.env file in client/ directory):**

```
VITE_API_URL=http://localhost:5000/api
```

### 3. Start MongoDB

Make sure MongoDB is running on your system:

- **Local MongoDB**: Start the MongoDB service
- **MongoDB Atlas**: Use your connection string in server/.env

## 🚀 Running the Application

### Development Mode (Recommended)

Start both frontend and backend simultaneously:

```bash
npm run dev
```

This will start:

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

### Separate Terminals

If you prefer to run them separately:

**Terminal 1 - Backend:**

```bash
npm run server
```

**Terminal 2 - Frontend:**

```bash
npm run client
```

## 🌐 Access the Application

1. Open your browser
2. Navigate to: **http://localhost:5173**
3. Start adding your todos!

## 📚 Available Commands

| Command          | Description                      |
| ---------------- | -------------------------------- |
| `npm run dev`    | Start both frontend and backend  |
| `npm run server` | Start only the backend server    |
| `npm run client` | Start only the frontend          |
| `npm run build`  | Build frontend for production    |
| `npm start`      | Start backend in production mode |

## 🔧 Troubleshooting

### MongoDB Connection Issues

- Make sure MongoDB is running
- Check your connection string in `server/.env`
- For MongoDB Atlas, use the full connection string

### Port Already in Use

- Change the port in `server/.env` (PORT=5001)
- Update `client/.env` accordingly (VITE_API_URL=http://localhost:5001/api)

### Dependencies Issues

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 🎉 You're Ready!

Your Todo List application is now running! You can:

- ✅ Add new todos
- ✏️ Edit existing todos
- ☑️ Mark todos as complete/incomplete
- 🗑️ Delete todos
- 🔍 Filter todos by All/Active/Completed

Happy coding! 🚀
