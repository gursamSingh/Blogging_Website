// STEP 1 is to setup the server

const dotenv = require("dotenv");
dotenv.config();
const http = require("http");
const port = process.env.PORT || 3000;
const app = require("./app"); //app.js that contains your Express app setup.

// create a server using http module
const server = http.createServer(app); // created the server and passed the Express app to it

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
