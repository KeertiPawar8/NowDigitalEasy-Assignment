# NowDigitalEasy-Assignment

**User Routes**

- `POST /registerUser` route - To add a user to the database.
- `GET /AllUserDetails` route - To get all the users from the database.
- `GET /singleUserDetails/:id` route - To get a single user from the database.
- `DELETE /deleteUser/:id` route - To delete a single user from the database.
- `PUT /updateUser/:id` route - To update a single user's data.

**Packages installed**

1. `express` - Used for making the server easier and more robust.
2. `nodemon` - Used to automatically restart the application after changes happen in the file.
3. `cors` - CORS allows servers to specify who can access their resources and under what conditions.
4. `mongoose` - To connect MongoDB database with the server.
5. `dotenv` - To secure MongoDB sensitive information.

The person checking the assignment have to create a dotenv file and add these two field in the file
1. mongoURL
2. port
