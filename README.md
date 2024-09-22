# NestJS PostgreSQL API

This project is a RESTful API built with NestJS and PostgreSQL, demonstrating basic CRUD operations for a User entity.

## Features

- RESTful API endpoints for User management
- PostgreSQL database integration using TypeORM
- Docker setup for easy development and deployment
- API Key authentication middleware

## Prerequisites

- Node.js (v14 or later)
- npm
- Docker and Docker Compose
- PostgreSQL (if running locally without Docker)

## Setup

1. Clone the repository:
```
git clone https://github.com/your-username/nestjs-postgres-api.git
cd nestjs-postgres-api
```


2. Install dependencies:
``npm install``


3. Set up environment variables:
- Copy `.env.example` to `.env`
- Update the values in `.env` with your configuration

## Running the Application

### Using Docker

1. Build and start the containers:
```
docker-compose up --build
```

4. The API will be available at `http://localhost:3000`

### Without Docker

1. Ensure PostgreSQL is running and accessible
2. Update `.env` with your PostgreSQL connection details
3. Run the application:
```
npm run start:dev
```

## API Endpoints

All endpoints require the `X-API-KEY` header for authentication.

- `GET /users`: Retrieve all users
- `GET /users/:id`: Retrieve a specific user
- `POST /users`: Create a new user
