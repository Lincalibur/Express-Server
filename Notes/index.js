// const express = require("express"); // only do this after npm install express
// const app = express(); // create an instance of express. Our entire server is man express app
// const port = 3000;

// app.get("/", (req, res) => {
//   console.log(req);
//   res.send("Home "); // sends a string message to the front-end
// });

// // GET POST  PATCH PUT DELETE HEAD ...

// app.get("/books", (req, res) => {
//   res.send("Books");
// });
// app.post("/books", (req, res) => {
//   res.send("Books");
// });
// /* 
//     GET: ... / books ( this a request for a REPRESENTATION  of the requested resource)
//     POST: ... / books ( this a request to CREATE a resource via that endpoint)
// */

// /* app.<http verb >(<path or endpoint: String>, <callback function the code to run if the 
//     REQUEST METHOD && PATH MATCH>) */

// app.get("/", (req, res) => {
//   res.sendFile("./landing-page/index.html" ,{root: __dirname}); // simply sends a text message. This is not technically a webpage
// });
// app.get("/authors", (req, res) => {
//   res.sendFile("./landing-page/authors.html" ,{root: __dirname}); // simply sends a text message. This is not technically a webpage
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });