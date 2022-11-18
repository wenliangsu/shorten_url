//Section set the variable
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;

//Section Database connection requirement
require("./config/mongoose");

//Section set template engine
app.engine("hbs", exphbs.engine({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

//Section static file, body-parser
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

//Section routes setting
app.get("/", (req, res) => {
  res.send("Test is working");
});

//Section Express server listen
app.listen(port, () => {
  console.log(`Express is listening on ${port}`);
});
