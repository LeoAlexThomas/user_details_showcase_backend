﻿## SETUP

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB Atlas account (or local MongoDB instance)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/LeoAlexThomas/user_details_showcase_backend.git
   cd user_details_showcase_backend
   ```

2. Install the dependencies:

```sh
npm install
```

3. Create a `.env` file in the root directory and add your MySQL DB Name & DB Password and port:

```sh
PORT=3001
DBPASSWORD = <password>
DBNAME = <DatabaseName>
```

#### Running the Application

1. Start the server in development mode:

```sh
npm run dev
```

2. The server will be running on [localhost:3001](http://localhost:3001).

#### API Endpoints

- `GET /users` - Retrieve all users

##### Error Handling

The application uses a custom error handler to return structured error messages.

##### License

This project is licensed under the MIT License.
