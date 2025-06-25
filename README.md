# 🔐 PassMan – Password Manager

**PassMan** is a modern, GUI-based web application that allows users to **securely store and manage passwords** for various applications in one centralized location.

Built with the **React** JavaScript library, styled using **Tailwind CSS**, and powered by a **Node.js + Express.js + MongoDB** backend, PassMan provides a clean, intuitive, and secure experience for managing sensitive credentials.

---

## 🚀 Features

- 🧠 Store and manage passwords for multiple applications  
- 🔐 Secure storage using MongoDB  
- ⚡ Backend API built with Node.js and Express.js  
- 🎨 Responsive UI with React + Tailwind CSS  
- 📦 RESTful structure with clean code organization  

---

## 🛠️ Tech Stack

| Layer       | Technology                |
|-------------|----------------------------|
| Frontend    | React, Tailwind CSS        |
| Backend     | Node.js, Express.js        |
| Database    | MongoDB                    |
| Styling     | Tailwind CSS               |

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/anirudh7065/Password-Manager.git
cd Password-Manager
````

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../server
npm install
```

### 4. Create Environment Variables

Create a `.env` file inside the `server` directory with the following contents:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

> Replace `your_mongodb_connection_string` with your actual MongoDB connection string (e.g. from MongoDB Atlas).

### 5. Run the Application

Start the backend server:

```bash
npm run dev
```

Open a new terminal and start the frontend app:

```bash
cd ../client
npm start
```

Visit your app at: `http://localhost:3000`

---

## 📁 Project Structure

```
/client       # React + Tailwind frontend
/server       # Node.js + Express backend
.env          # Environment variables for backend
README.md     # Project documentation
```

---

## 📄 License

### MIT License

```
MIT License

Copyright (c) 2025 Abhishek

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

---

## 📬 Contact

Created by **Abhishek**
🌐 Portfolio: [https://abhishekvalsan.vercel.app](https://abhishekvalsan.vercel.app)
🔗 GitHub Repository: [https://github.com/anirudh7065/Password-Manager](https://github.com/anirudh7065/Password-Manager)

