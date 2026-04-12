# Task Manager API

A simple RESTful API for managing tasks, built with Node.js, Express, and MongoDB.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MongoDB (via Mongoose)
- **Dev Tooling:** Nodemon

## API Endpoints

| Method   | Endpoint              | Description         |
| -------- | --------------------- | ------------------- |
| `GET`    | `/api/v1/tasks`       | Get all tasks       |
| `POST`   | `/api/v1/tasks`       | Create a new task   |
| `GET`    | `/api/v1/tasks/:id`   | Get a single task   |
| `PATCH`  | `/api/v1/tasks/:id`   | Update a task       |
| `DELETE` | `/api/v1/tasks/:id`   | Delete a task       |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- A MongoDB connection string (local or [Atlas](https://www.mongodb.com/atlas))

### Installation

```bash
npm install
```

### Configuration

Create a `.env` file in the root directory with:

```
MONGO_URI=<your-mongodb-connection-string>
```

### Run

```bash
npm start
```

The server will start on `http://localhost:3000` by default.
