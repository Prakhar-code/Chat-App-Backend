# Chat-App-Backend 💬

Welcome to the backend of a real-time chat application! 🚀 This backend is powered by **Node.js**, **Express**, **MongoDB**, and **Socket.IO** to provide a seamless, scalable chat experience.

## Features ✨

- **Real-time messaging** using Socket.IO
- **User authentication & authorization** with JWT tokens
- **Persistent chat history** stored in MongoDB
- **RESTful API** for managing users and messages

## Technologies Used 🛠️

- **Node.js** – JavaScript runtime for building the backend
- **Express** – Web framework for Node.js
- **MongoDB** – NoSQL database for storing users and messages
- **Socket.IO** – Real-time bi-directional communication

## Installation 🧑‍💻

1. Clone the repository:
    ```bash
    git clone https://github.com/Prakhar-code/Chat-App-Backend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Chat-App-Backend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Configuration ⚙️

1. Create a `.env` file in the root directory.
2. Add the following environment variables to the `.env` file:
    ```
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    ```

## Running the Application 🚀

1. Start the development server:
    ```bash
    npm run dev
    ```
2. The backend will be running on [http://localhost:5001](http://localhost:5001).

## API Endpoints 📡

- `POST /api/auth/signup` – Register a new user
- `POST /api/auth/login` – Log in an existing user
- `GET /api/users` – Fetch all users
- `GET /api/messages` – Fetch all messages
- `POST /api/messages` – Send a new message

## Contribution 🤝

Feel free to open issues or create pull requests if you'd like to contribute to the project. Contributions are always welcome!
