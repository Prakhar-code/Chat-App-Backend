# Chat-App-Backend

This is the backend for a chat application. It is built using Node.js, Express, MongoDB, and Socket.IO.

## Features

- Real-time messaging with Socket.IO
- User authentication and authorization
- Persistent chat history with MongoDB
- RESTful API for managing users and messages

## Technologies Used

- Node.js
- Express
- MongoDB
- Socket.IO

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/Chat-App-Backend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Chat-App-Backend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
    ```
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    ```

## Running the Application

1. Start the server:
    ```bash
    npm start
    ```
2. The server will be running on `http://localhost:3000`.

## API Endpoints

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/users` - Get all users
- `GET /api/messages` - Get all messages
- `POST /api/messages` - Send a new message

