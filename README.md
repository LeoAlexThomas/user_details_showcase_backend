## SETUP

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

3. Create a `.env` file in the root directory and add your MongoDB connection string and port:

```sh
PORT=3001
CONNECTION_STRING=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>
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

```sh
Make sure to replace `<username>`, `<password>`, `<cluster-url>`, and `<dbname>` with your actual MongoDB credentials and database name.
```

##### MongoDB Dump

MongoDB dump file added in the name of `test.users.json` which is located in the root directory.
