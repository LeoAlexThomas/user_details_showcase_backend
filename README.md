## SETUP

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MySQL server / MongoDB Atlas account (or local MongoDB instance)

### Installation

1. Clone the repository:
> [!IMPORTANT]
> For MongoDB: use `Main` Branch
>
> For MySQL: use `mysqlConnectionWithORM` Branch

   ```sh
   git clone https://github.com/LeoAlexThomas/user_details_showcase_backend.git
   cd user_details_showcase_backend
   ```

1. Install the dependencies:

```sh
npm install
```

3. Create a `.env` file in the root directory:
   - For MongoDB: add your MongoDB connection string and port
   ```sh
   PORT=3001
   CONNECTION_STRING=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>
   ```
   Make sure to replace `<username>`, `<password>`, `<cluster-url>`, and `<dbname>` with your actual MongoDB credentials and database name.

   - For MySQL: add MySQL Database name, Database username , Database password and port
   ```sh
   PORT=3001
   DBUSER = <database_username>
   DBPASSWORD = <database_password>
   DBNAME = <database_name>
   ```


### Running the Application

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

### Dump File
#### Mongo DB Dump

MongoDB dump file added in the name of `test.users.json` which is located in the root directory.

#### MySQL DB Dump

MySQL dump file added in the name of `mysql_dump.sql` which is located in the root directory. [Located in `mysqlConnectionWithORM` Branch]

