# Dish Dashboard Realtime

A full-stack dish management dashboard built as part of the Euphotic Labs Full Stack Assignment.

## Overview

This project allows users to:

* View all dishes from MongoDB Atlas
* Manage dish publication status
* Toggle dish visibility through REST APIs
* Persist data in MongoDB
* Support future real-time updates using Socket.IO

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Dotenv
* CORS

### Database

* MongoDB Atlas

### Development Tools

* Nodemon
* Git
* GitHub
* Thunder Client

---

## Project Structure

```text
euphotic-labs-assignment/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controllers/
│   │   │   └── dishController.js
│   │   │
│   │   ├── models/
│   │   │   └── Dish.js
│   │   │
│   │   ├── routes/
│   │   │   └── dishRoutes.js
│   │   │
│   │   └── server.js
│   │
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
└── frontend/
```

---

## Database Schema

### Dish

```json
{
  "dishId": 1,
  "dishName": "Pizza",
  "imageUrl": "https://example.com/image.jpg",
  "isPublished": true
}
```

---

## API Endpoints

### Get All Dishes

```http
GET /api/dishes
```

#### Sample Response

```json
[
  {
    "dishId": 1,
    "dishName": "Pizza",
    "imageUrl": "https://example.com/image.jpg",
    "isPublished": true
  }
]
```

---

### Toggle Dish Status

```http
PATCH /api/dishes/:id/toggle
```

#### Sample Response

```json
{
  "success": true,
  "updatedDish": {
    "dishId": 1,
    "dishName": "Pizza",
    "isPublished": false
  }
}
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Aadithya2222/dish-dashboard-realtime.git
```

### Backend Setup

```bash
cd backend

npm install
```

### Start Development Server

```bash
npm run dev
```

Server runs on:

```text
http://localhost:5000
```

---

## Testing

### GET Dishes

```text
http://localhost:5000/api/dishes
```

### Toggle Dish

```http
PATCH http://localhost:5000/api/dishes/1/toggle
```

---

## Current Progress

### Completed

* MongoDB Atlas Setup
* Database Connection
* Express Server Setup
* Dish Schema Creation
* GET Dishes API
* Toggle Dish API
* GitHub Repository Setup

### Upcoming

* Socket.IO Integration
* React Frontend
* Real-Time Updates
* Deployment (Render + Vercel)
* Project Documentation Enhancement

---

## Author

Aadithya R

B.Tech Artificial Intelligence and Machine Learning

Saveetha Engineering College
