# Resource Wall Project

Resource Wall was our midterm project of choice. Pinterest for learners.  It allows the user to save resouces such as tutorials, blogs, and videos in a central place that can be accessed by any user.

## Warnings & Tips

- Use the `npm run db:reset` command each time there is a change to the database schema or seeds. 
  - It runs through each of the files, in order, and executes them against the database. 
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x or above
- body-parser
- chalk
- cookie-session
- dotenv
- ejs
- express
- morgan
- sass
- bcryptjs

## Getting Started

1. Install all dependencies (using the `npm install` command).
2. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
3. Start the server by using the `npm run local` command.
  - Note: nodemon is used, so you should not have to restart your server
4. Visit `http://localhost:8080/users/login/1` to login as a user
  - You can change users by using their corresponding id
