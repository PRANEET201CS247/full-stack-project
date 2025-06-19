
📚 Book Review Platform - Full Stack Project

This is a complete full-stack web application where users can view books and their reviews.

----------------------------------------
🧰 Tech Stack
----------------------------------------
- Frontend: React.js
- Backend: Node.js + Express
- Database: MongoDB

----------------------------------------
📁 Folder Structure
----------------------------------------
book-review-platform/
├── backend/        # Express API with MongoDB
├── frontend/       # React UI
├── README.txt      # Project instructions

----------------------------------------
🚀 Step-by-Step Setup Instructions
----------------------------------------

========================================
1. Clone or Extract the Project
========================================
Unzip the file and navigate to the project folder:

```bash
cd book-review-platform
```

========================================
2. Backend Setup (Node + Express + MongoDB)
========================================

Step 1: Navigate to the backend folder
```bash
cd backend
```

Step 2: Install dependencies
```bash
npm install
```

Step 3: Start MongoDB locally (required)
Make sure MongoDB is running locally on your system.

Step 4: Start the backend server
```bash
node index.js
```
The backend will run on: http://localhost:5000

========================================
3. Frontend Setup (React)
========================================

Step 1: Open a new terminal window/tab and navigate to frontend
```bash
cd ../frontend
```

Step 2: Install dependencies
```bash
npm install
```

Step 3: Start the React frontend
```bash
npm start
```
The frontend will run on: http://localhost:3000

========================================
4. Test the Application
========================================

- Visit http://localhost:3000 in your browser.
- You will see a list of books fetched from the backend.
- Ensure MongoDB is running locally.

========================================
✅ Notes
========================================
- You can add books manually into the MongoDB collection named 'books'.
- This is a starter template; you can add review submission, auth, and more features.
- If needed, use MongoDB Atlas by replacing the connection string in `backend/index.js`.

----------------------------------------
👨‍💻 Author
----------------------------------------
Praneet S.
