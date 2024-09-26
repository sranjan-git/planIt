# planIt - A Calendar App
https://github.com/user-attachments/assets/619b3f97-21c0-400d-b909-c9b9d693482d



## Overview

This project is a simple **Personal Calendar** application that allows users to create, view, edit, and delete events or meetings on their personal calendars. It integrates both **backend** and **frontend** systems and includes user authentication to ensure that only authenticated users can manage their calendar events. The goal is to keep the application simple yet functional, using **Firebase Authentication** for user login and **MongoDB** as the database for event storage.

---

## Table of Contents
- [Core Features](#core-features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## Core Features

### User Authentication
1. **Login with Google**: Users can log in using Google authentication via **Firebase**.
2. **Authenticated Access**: After login, users can manage their calendar events.

### Calendar Features
1. **Create Events**: Add events with details like title, date & time, and description.
2. **View Events**: View a list or calendar view of all personal events.
3. **Edit Events**: Modify existing events.
4. **Delete Events**: Remove events from the calendar.
5. **Secure Access**: Only authenticated users can access and modify their own events.

### Backend
1. **CRUD Operations**: A simple REST API to manage calendar events.
2. **MongoDB**: Events are stored in a MongoDB database.
3. **Authorization**: Each user has access only to their own events.

### Frontend
1. **UI Design**: The frontend is built using **React** and **Material-UI** to provide a clean and intuitive interface.
2. **Event Management**: Forms for creating, editing, and deleting events, along with views to display events.

---

## Installation

### Prerequisites
- Node.js installed
- MongoDB Atlas or a local MongoDB instance
- Firebase project set up for authentication

### Setup Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/planIt.git
   cd planIt
   ```

2. **Backend Setup:**
   - Navigate to the `server` folder:
     ```bash
     cd server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the root of the server folder with the following environment variables:
     ```bash
     MONGO_URI=mongodb://localhost:27017/
     ```
   - Run the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup:**
   - Navigate to the `client` folder:
     ```bash
     cd client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the frontend application:
     ```bash
     npm start
     ```

---

## Running the Application

1. Start the backend server by navigating to the `server` folder and running `npm start`.
2. Start the frontend by navigating to the `client` folder and running `npm start`.
3. Open your browser and navigate to `http://localhost:3000/` to access the application.

---

## Contributing

We welcome contributions! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions, feel free to reach out at [sranjan.social@gmail.com](mailto:sranjan.social@gmail.com).
