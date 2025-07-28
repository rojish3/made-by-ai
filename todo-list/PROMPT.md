<p align="center">
  ![Cursor AI](https://img.shields.io/badge/Cursor%20AI-%23ff6f61?style=for-the-badge&logo=ai)
</p>

<p align="center">
  <strong>Made by Cursor AI</strong>
</p>

### Development Prompt

You are a full-stack developer. Please create a complete Todo List application using the MERN stack with the following requirements:

- **Frontend:**

  - React using Vite as the build tool
  - Tailwind CSS for styling
  - React Router can be used if needed for navigation

- **Backend:**

  - Node.js with Express.js framework
  - MongoDB as the database, connected through Mongoose ODM
  - Include CORS and dotenv for environment variable management

- Use plain JavaScript (no TypeScript).

---

### Folder Structure

**Frontend (`client/`)**

```

client/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/          # For API calls
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
└── tailwind.config.js

```

**Backend (`server/`)**

```

server/
├── config/
│   └── db.js              # MongoDB connection setup
├── controllers/
├── models/
├── routes/
├── middleware/
├── .env
├── server.js
└── package.json

```

---

### Features to Implement

- Add new todo items
- Edit existing todos
- Mark todos as complete or incomplete
- Delete todos
- Filter todos by All, Active, and Completed
- Persist todos in MongoDB database
- Use RESTful API endpoints (`/api/todos`)
- Show loading and error states appropriately
- Use axios for API requests
- Properly configure CORS

---

### Communication Between Frontend and Backend

- Frontend should call backend APIs using axios
- Use `.env` files on both frontend and backend to manage API URLs and secrets
- Provide instructions for running frontend and backend on separate terminals

---

### Deliverables

1. Full folder structure as outlined above
2. Complete, clean, and well-commented code in JavaScript for both frontend and backend
3. Sample `.env.example` files for environment variables
4. MongoDB connection setup with Mongoose
5. A sample `README.md` file with setup and running instructions
6. Bonus: Persist filter state using localStorage on the frontend
