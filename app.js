const express = require("express");
const port = 3000;
const path = require("path");

const functions = require("./functions");

const app = express();
app.set("view engine", "hbs");
app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Zajęcia 07.02.2021",
    subTitle: functions.subTitle,
    proba: proba()
  });
});

app.get("/about", (req, res) => {
  res.send("Strona o nas");
});

const proba = () => { return 'proba'}


app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening on port: ${port}`);
});

// PURE NODE JS

// const http = require("http");

// const handler = (req, res) => {
//   res.end('<h1>Witajcie na nauce NodeJS</h1>');
//   console.log("Ktoś jest na stronie");
// };

// const server = http.createServer(handler);
// const port = 3000;

// server.listen(port, (err) => {
//     if(err){
//         return console.log(err);
//     }
//   console.log(`Listening to port ${port}`);
// });
