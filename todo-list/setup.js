#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("🚀 Setting up MERN Todo List Application...\n");

// Colors for console output
const colors = {
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  blue: "\x1b[34m",
  reset: "\x1b[0m",
};

const log = (message, color = "reset") => {
  console.log(`${colors[color]}${message}${colors.reset}`);
};

try {
  // Check if Node.js is installed
  log("📋 Checking prerequisites...", "blue");
  const nodeVersion = execSync("node --version", { encoding: "utf8" }).trim();
  const npmVersion = execSync("npm --version", { encoding: "utf8" }).trim();
  log(`✅ Node.js version: ${nodeVersion}`, "green");
  log(`✅ npm version: ${npmVersion}`, "green");

  // Create .env files if they don't exist
  log("\n📝 Setting up environment files...", "blue");

  // Server .env
  const serverEnvPath = path.join(__dirname, "server", ".env");
  if (!fs.existsSync(serverEnvPath)) {
    const serverEnvContent = `PORT=5000
MONGODB_URI=mongodb://localhost:27017/todo-app
NODE_ENV=development`;
    fs.writeFileSync(serverEnvPath, serverEnvContent);
    log("✅ Created server/.env", "green");
  } else {
    log("ℹ️  server/.env already exists", "yellow");
  }

  // Client .env
  const clientEnvPath = path.join(__dirname, "client", ".env");
  if (!fs.existsSync(clientEnvPath)) {
    const clientEnvContent = `VITE_API_URL=http://localhost:5000/api`;
    fs.writeFileSync(clientEnvPath, clientEnvContent);
    log("✅ Created client/.env", "green");
  } else {
    log("ℹ️  client/.env already exists", "yellow");
  }

  // Install dependencies
  log("\n📦 Installing dependencies...", "blue");

  // Install root dependencies
  log("Installing root dependencies...", "yellow");
  execSync("npm install", { stdio: "inherit" });

  // Install server dependencies
  log("Installing server dependencies...", "yellow");
  execSync("cd server && npm install", { stdio: "inherit" });

  // Install client dependencies
  log("Installing client dependencies...", "yellow");
  execSync("cd client && npm install", { stdio: "inherit" });

  log("\n🎉 Setup completed successfully!", "green");
  log("\n📋 Next steps:", "blue");
  log("1. Make sure MongoDB is running on your system", "yellow");
  log("2. Start the development servers:", "yellow");
  log("   npm run dev", "green");
  log("\n3. Open your browser and navigate to:", "yellow");
  log("   http://localhost:5173", "green");
  log("\n4. The backend API will be available at:", "yellow");
  log("   http://localhost:5000/api", "green");

  log("\n📚 Available commands:", "blue");
  log(
    "  npm run dev      - Start both frontend and backend in development mode",
    "yellow"
  );
  log("  npm run server   - Start only the backend server", "yellow");
  log(
    "  npm run client   - Start only the frontend development server",
    "yellow"
  );
  log("  npm run build    - Build the frontend for production", "yellow");
  log("  npm start        - Start the backend in production mode", "yellow");
} catch (error) {
  log(`\n❌ Setup failed: ${error.message}`, "red");
  log("\nPlease make sure you have:", "yellow");
  log("- Node.js (v14 or higher) installed", "yellow");
  log("- npm installed", "yellow");
  log(
    "- MongoDB running locally or update the MONGODB_URI in server/.env",
    "yellow"
  );
  process.exit(1);
}
