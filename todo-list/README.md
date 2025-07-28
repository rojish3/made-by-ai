# MERN Todo List Application

A full-stack Todo List application built with the MERN stack (MongoDB, Express.js, React, Node.js).

## 🚀 Features

- ✅ Add new todo items
- ✏️ Edit existing todos
- ☑️ Mark todos as complete/incomplete
- 🗑️ Delete todos
- 🔍 Filter todos by All / Active / Completed
- 💾 Persistent storage in MongoDB
- 📱 Responsive design with Tailwind CSS
- 🔄 Real-time updates

## 🛠️ Tech Stack

### Frontend

- React with Vite
- Tailwind CSS
- Axios for API calls
- React Router (if needed)

### Backend

- Node.js with Express.js
- MongoDB with Mongoose ODM
- CORS for cross-origin requests
- dotenv for environment management

## 📁 Project Structure

```
todo-list/
├── client/                 # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── package.json
├── server/                 # Backend Node.js application
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env
│   ├── server.js
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd todo-list
   ```

2. **Set up the Backend**

   ```bash
   cd server
   npm install
   cp .env.example .env
   # Edit .env with your MongoDB connection string
   npm start
   ```

3. **Set up the Frontend**
   ```bash
   cd ../client
   npm install
   cp .env.example .env
   # Edit .env with your backend API URL
   npm run dev
   ```

### Environment Variables

#### Backend (.env)

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todo-app
NODE_ENV=development
```

#### Frontend (.env)

```
VITE_API_URL=http://localhost:5000/api
```

## 🎯 API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo
- `PATCH /api/todos/:id/toggle` - Toggle todo completion status

## 🏃‍♂️ Running the Application

### Development Mode

1. **Start the Backend Server**

   ```bash
   cd server
   npm start
   ```

   Server will run on http://localhost:5000

2. **Start the Frontend Development Server**
   ```bash
   cd client
   npm run dev
   ```
   Frontend will run on http://localhost:5173

### Production Build

1. **Build the Frontend**

   ```bash
   cd client
   npm run build
   ```

2. **Start Production Server**
   ```bash
   cd server
   npm start
   ```

## 📝 Usage

1. Open your browser and navigate to `http://localhost:5173`
2. Add new todos using the input field
3. Click on a todo to edit it
4. Use the checkbox to mark todos as complete/incomplete
5. Use the delete button to remove todos
6. Use the filter buttons to view All, Active, or Completed todos

## 🔧 Customization

- Modify the Tailwind CSS classes in components for styling
- Update the MongoDB schema in `server/models/Todo.js`
- Add new API endpoints in `server/routes/todos.js`
- Extend the frontend components in `client/src/components/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.
