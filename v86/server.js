// const { createServer } = require('node:http');
// const fs = require("fs");
// import { createServer } from 'node:http';

// const hostname = '127.0.0.1';
// const port = 5000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>vinay soni</h1>'); 
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// import {a, b, d} from "./myserver.js";
// console.log(a);
// console.log(b);
// console.log(d);

import obj from "./myserver.js";
console.log(obj);

// const a = require("./myserver2.js");
// console.log(a);