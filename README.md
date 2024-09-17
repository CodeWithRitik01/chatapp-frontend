# React + Vite

# ChatApp

## Overview
ChatApp is a real-time messaging application built using React.js for the frontend and Node.js for the backend. It allows users to communicate instantly with each other through text messages. This application uses WebSockets for real-time communication and MongoDB for data storage. 



![Screenshot (318)](https://github.com/CodeWithRitik01/chatapp-frontend/assets/141724500/bf43ceed-6e47-4aa1-b27c-07d4f2539c5d)
![Screenshot (312)](https://github.com/CodeWithRitik01/chatapp-frontend/assets/141724500/ebc93992-82e0-4882-851c-d124543e0859)
![Screenshot (308)](https://github.com/CodeWithRitik01/chatapp-frontend/assets/141724500/da1c8d16-fa7f-4517-8392-f6e13f155eaf)
![Screenshot (310)](https://github.com/CodeWithRitik01/chatapp-frontend/assets/141724500/9c5be414-c0a8-489b-97f2-eea2dd4edc70)
![Screenshot (311)](https://github.com/CodeWithRitik01/chatapp-frontend/assets/141724500/29a80b99-ac79-421b-a6e7-6f9c2e95f1dc)
![Screenshot (313)](https://github.com/CodeWithRitik01/chatapp-frontend/assets/141724500/5cd17160-b323-4aa7-acfb-8e68bf8a4f13)
![Screenshot (314)](https://github.com/CodeWithRitik01/chatapp-frontend/assets/141724500/a77825ce-de30-4635-a73c-d7f352b8f043)
![Screenshot (315)](https://github.com/CodeWithRitik01/chatapp-frontend/assets/141724500/ad913cb1-0266-441b-83b6-c109c516a9bd)
![Screenshot (316)](https://github.com/CodeWithRitik01/chatapp-frontend/assets/141724500/03726626-b2a7-4c03-a341-bf2fcc26fd50)
![Screenshot (317)](https://github.com/CodeWithRitik01/chatapp-frontend/assets/141724500/49d5d503-9912-4da4-aec2-f3bca1490c45)



## Features

* Real-time messaging
* User authentication and authorization
* Typing indicators
* Online status indicators
* Group chat support
* Media file sharing
* Admin view
* Responsive design

## Tech Stack

### Frontend

* React.js
* Redux (for state management)
* Axios (for HTTP requests)
* Socket.io-client (for real-time communication)
* Styled-components (for styling)
  
### Backend

* Node.js
* Express.js
* MongoDB (with Mongoose)
* Socket.io (for WebSocket communication)
* JWT (for authentication)
* Cloudinary (for media file storage)

## Getting Started
### Prerequisites
* Node.js (v14.x or later)
* MongoDB (local or Atlas)
* Cloudinary account (for media uploads)

## Installation
### Clone the repository

* git clone https://github.com/codeWithRitik01/chatapp-frontend.git
* cd chatapp


### Backend Setup

Navigate to the backend directory

cd backend

### Install dependencies

* npm install

* Create a .env file in the backend directory and add the following environment variables

    * MONGO_URL= "URL"
    * PORT=5000
    * JWT_SECRET=your_jwt_secret
    * ADMIN_SECRET_KEY = "koregajiyudakoregajiyuda"
    * NODE_ENV = "DEVELOPMENT"
    * CLIENT_URL=
    * CLOUDINARY_CLOUD_NAME=your_cloud_name
    * CLOUDINARY_API_KEY=your_api_key
    * CLOUDINARY_API_SECRET=your_api_secret


### Start the backend server

* npm start

### Frontend Setup

* Navigate to the frontend directory

### Install dependencies

* npm install

* Create a .env file in the frontend directory and add the following environment variables

* VITE_SERVER=http://localhost:3000/

### Start the frontend server

* npm run dev

* Access the Application

* Open your browser and navigate to http://localhost:3000

## Project Structure
### Backend
* app.js: Entry point for the backend server
* routes/: Contains the route definitions for users, chats, and admin
* controllers/: Contains the logic for handling requests
* models/: Mongoose models for MongoDB
* middlewares/: Custom middlewares for authentication, error handling, etc.
* utils/: Utility functions and database connection
* constants/: To add events and configration files


### Frontend
* src/components/: React components for different parts of the application
* src/redux/: Redux store setup and slices
* src/pages/: Page components representing different views
* src/utils/: Utility functions
* src/App.js: Main React component
* src/index.js: Entry point for the React application
* src/utils: validators folder
* src/hooks: Some custom hooks


### Usage
* Register/Login: Create a new account or log in with existing credentials.
* Chat: Start a new chat or join an existing chat to send real-time messages.
* Typing Indicators: See when other users are typing.
* Online Status: View the online status of other users.
* Media Sharing: Upload and share media files in the chat.


## Acknowledgements
* React
* Node.js
* Express
* Socket.io
* MongoDB
* Cloudinary

# Hosted Project
Link of Hosted project = ("https://chatapp-frontend-lac.vercel.app/")

server's folder link - "https://github.com/CodeWithRitik01/Chatapp.git"

## Credits

This project was created by [Ritik].
