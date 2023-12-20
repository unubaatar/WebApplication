// // https://nodejs.org/docs/latest/api/synopsis.html - documentation
// // common js
// const http = require("node:http"); // import  // https -> performance udaashirna, nuutslah shaardlagatai yman der hereglene

// const hostname = "127.0.0.1"; // local
// const port = 3000;

// const url = "/company/products.html";

// const server = http.createServer((req, res) => {
//   const homePage = `<html><h1>Welcome home</h1><p>${req.url}</p></html>`;
//   const aboutPage = `<html><h1>Welcome about</h1><p>${req.url}</p></html>`;

//   res.statusCode = 200;

//   res.setHeader("Content-Type", "text/html"); // "text/html"

//   if (req.url == "/") {
//     res.write(homePage);
//   } else {
//     res.write(aboutPage);
//   }

//   res.end();
//   // endees hoish ymar neg command baij bolohgui
// });

// server.listen(port, hostname, () => {
//   //ene funktsiij ajilluul
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

import data from "./anime-list.json" assert {type: "json"};
import express from "express";

import swaggerUi from "swagger-ui-express";
import swaggerJsondoc from "swagger-jsdoc";

const app = express();
const port = 3000;

const homePage = `<html><h1>Welcome home</h1><p>cmp</p></html>`;
const aboutPage = `<html><h1 style="text-align: center">Welcome about</h1><p>ab</p></html>`;

let newAnime = 0;

app.get("/", (req, res) => { //post, delete, update
  res.send(homePage);
});

app.get("/about", (req, res) => { //jsonbin.io-s dataga awy gewel ene url uud der tohiruulaad ugchinu, huwisagchid hiij bolno, eswel taashni chigluulchij bolno, tsaad servicees awaad bolowsruulaad shideh
    res.send(aboutPage);
  });

  app.get("/animeList", (req, res) => {
    res.send(data);
  });


app.get("/animeList/:animeId", (req, res) => {
  const anime = data.filter( anime => req.params.animeId == anime.id);
  res.send(anime);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// swagger documentation 3 deer hiihed l bolno gesen

const options = {
  swaggerDefinition: {
    openapi: "3.0.0", // present supported openapi version
    info: {
      title: "My API", // short title.
      version: "1.0.0", // version number
      description: "Animuk dev API for Web-app", // desc.
      contact: {
        name: "John doe", // your name
        email: "john@web.com", // your email
        url: "web.com", // your website
      }
    }
  },
  apis: ["./app.mjs"]
};

const specs = swaggerJsondoc(options); // Assuming you have imported swaggerJsondoc

app.use("/docs", swaggerUi.serve);

app.get("/docs", swaggerUi.setup(specs, {
  explorer: true
}));
