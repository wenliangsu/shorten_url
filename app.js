//Section set the variable
const express = require("express");
const exphbs = require("express-handlebars");

const UrlDatabase = require("./models/Url-Schema");
const generateShortenUrl = require("./shorten_url_generator");

const app = express();
const port = 3000;

//Section Database connection requirement
require("./config/mongoose");

//Section set template engine
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Section static file, body-parser
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

//Section routes setting
app.get("/", (req, res) => {
  res.render("index");
});

//todo shorten the url
app.post("/", (req, res) => {
  const inputUrl = req.body.inputUrl;

  /* //note findOne() 使用的時候要用Schema裡面的名字，不可以直接使用設定好的變數名字，如果直接使用的話直接比對第二筆資料，因為會強制轉換Schema type變成網址換新的，但是短網址還是一直是第一個資料的短網址。 */
  UrlDatabase.findOne({ originalUrl: inputUrl })
    .lean()
    .then((data) => {
      //If it isn't in database
      if (!data) {
        newUrl = `http://localhost:${port}/` + generateShortenUrl();

        UrlDatabase.create({ originalUrl: inputUrl, shortenUrl: newUrl })
          .then(() => res.render("shorten", { shortenUrl: newUrl }))
          .catch((error) => {
            console.log(error);
            res.render("error", { message: error });
          });

        //If it is already in database
      } else {
        res.render("shorten", { shortenUrl: data.shortenUrl });
      }
    });
});

//todo copy the link and go to the original website
app.get("/:id", (req, res) => {
  const urlEndWord = req.params.id;
  const url = `http://localhost:${port}/${urlEndWord}`;
  UrlDatabase.findOne({ shortenUrl: url })
    .lean()
    .then((data) => res.redirect(data.originalUrl))
    .catch((error) => {
      console.log(error);
      res.render("error", { message: error });
    });
});

//Section Express server listen
app.listen(port, () => {
  console.log(`Express is listening on ${port}`);
});
