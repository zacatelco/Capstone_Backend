# MySpace Clone Backend

This is the backend for the MySpace Clone project, a MERN stack application that replicates the core functionality of the classic MySpace social networking platform. The backend is built using Node.js, Express.js, and MongoDB.

## Features
- RESTful API with Express.js
- CRUD operations for users, posts, and comments
- MongoDB with Mongoose for data modeling
- Middleware for request handling and error management
- Integration with the frontend (React via Vite)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/myspace-clone-backend.git
   cd myspace-clone-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```env
     PORT=5000
     MONGO_URI=your-mongodb-connection-string
     ```

## Usage

### Running the Server
```sh
npm start
```
This will start the server on `http://localhost:5000`.

### API Endpoints
#### Users
- `GET /api/users` - Retrieve all users
- `POST /api/users` - Create a new user

#### Posts
- `GET /api/posts` - Retrieve all posts
- `POST /api/posts` - Create a new post

#### Comments
- `GET /api/comments` - Retrieve all comments
- `POST /api/comments` - Create a new comment

## Future Enhancements
- User authentication and authorization (JWT)
- Friend requests system
- Post likes and pagination


<!-- # Backend API Template

## Instructions

1. Clone the repo `git clone <repo-url> <new-project-name>`
2. cd into your new project folder and run `npm i`
3. Rename the package.json to your folder name
4. `ls -la` to see if the repo is still connected to previous repo. If you see `.git`, run `rm -rf .git`
5. Create a new `.env` file and add the `MONGODB_URI`
6. add a database name to the URI. You can use same name as folder. `.....mongodb.net/<database name goes here>?retryWrites=true&w....."`
7. Run the app with: `npm run dev`

### Dependencies 
`"cors": "^2.8.5",`
`"dotenv": "^16.4.7",`
`"express": "^4.21.2",`
`"helmet": "^8.0.0",`
`"mongoose": "^8.12.1",`
`"pug": "^3.0.3"` -->

<!-- ===== Backend Requirements =========
Create a RESTful API using Node and Express.
Include API routes for all four CRUD operations.
Utilize Mongoose to interface with your database.
Use MongoDB to create a database for your application.
Apply appropriate indexes to your database collections.
Create reasonable schemas for your data by following data modeling best practices. -->